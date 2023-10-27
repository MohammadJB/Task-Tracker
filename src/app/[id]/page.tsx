"use client";

import BackButton from "@/components/backButton";
import PriorityBadge from "@/components/taskItem/priorityBadge";
import { useTask } from "@/customHooks/useTask";
import { Task, TaskStatus } from "@/types";
import { useEffect, useState } from "react";
import { Checkbox, Badge, Button } from "@chakra-ui/react";
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
    <div>
      <BackButton />
      <h2>{selectedTask.title}</h2>
      <Button onClick={() => router.push(`/${selectedTask.id}/edit`)}>
        Edit
      </Button>
      <Button onClick={() => deleteTask(selectedTask.id)}>Delete</Button>
      <div>
        <Checkbox
          colorScheme="green"
          isChecked={selectedTask.status === TaskStatus.Completed}
          onChange={() => changeTaskStatus(selectedTask.id)}
        />
      </div>
      <p>{selectedTask.description}</p>
      <div className="my-2">
        <PriorityBadge priority={selectedTask.priority} />
      </div>
      <div className="flex flex-wrap">
        {selectedTask.tags.map((tag, index) => (
          <Badge key={index} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Page;
