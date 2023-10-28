"use client";

import BackButton from "@/components/backButton";
import PriorityBadge from "@/components/taskItem/priorityBadge";
import { useTask } from "@/customHooks/useTask";
import { Task, TaskStatus } from "@/types";
import { useEffect, useState } from "react";
import { Checkbox, Button, FormControlLabel, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";

const Page = ({ params }: { params: { id: string } }) => {
  const [selectedTask, setSelectedTask] = useState<Task | undefined>();

  const { taskList, changeTaskStatus, deleteTask, loading } = useTask();
  const router = useRouter();

  useEffect(() => {
    setSelectedTask(taskList.find((task) => task.id === params.id));
  }, [params.id, taskList]);

  if (loading)
    return (
      <div className="py-6 text-center">
        <CircularProgress />
      </div>
    );

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
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedTask.status === TaskStatus.Completed}
                onChange={() => changeTaskStatus(selectedTask.id)}
              />
            }
            label="Completed"
          />
        </div>
        <p>{selectedTask.description}</p>

        <div className="my-2">
          <PriorityBadge priority={selectedTask.priority} />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs">{selectedTask.creationDate}</span>
          <div>
            <Button
              variant="outlined"
              onClick={() => router.push(`/${selectedTask.id}/edit`)}
              color="warning"
              className="me-4"
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              onClick={() => deleteTask(selectedTask.id)}
              color="error"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
