"use client";

import BackButton from "@/components/backButton";
import PriorityBadge from "@/components/taskItem/priorityBadge";
import { useTask } from "@/customHooks/useTask";
import { Task, TaskStatus } from "@/types";
import { useEffect, useState } from "react";
import { Checkbox, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Page = ({ params }: { params: { id: string } }) => {
  const [selectedTask, setSelectedTask] = useState<Task | undefined>();

  const { taskList, changeTaskStatus, deleteTask } = useTask();
  const router = useRouter();

  useEffect(() => {
    setSelectedTask(taskList.find((task) => task.id === params.id));
  }, [params.id, taskList]);

  if (!selectedTask) {
    return <div>Not found!</div>;
  }

  return (
    <>
      <div className="py-4">
        <BackButton />
      </div>

      <div className="bg-main-100 dark:bg-main-900 rounded p-4 shadow">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">{selectedTask.title}</h2>
          <div>
            <Button onClick={() => router.push(`/${selectedTask.id}/edit`)}>
              Edit
            </Button>
            <Button onClick={() => deleteTask(selectedTask.id)}>Delete</Button>
          </div>
        </div>
        <p>{selectedTask.description}</p>

        <div>
          <Checkbox
            colorScheme="green"
            isChecked={selectedTask.status === TaskStatus.Completed}
            onChange={() => changeTaskStatus(selectedTask.id)}
          />
          <span>Completed</span>
        </div>

        <div className="my-2">
          <PriorityBadge priority={selectedTask.priority} />
        </div>

        <hr />

        <div className="flex flex-wrap">
          {selectedTask.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
