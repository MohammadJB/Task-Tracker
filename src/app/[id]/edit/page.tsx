"use client";

import BackButton from "@/components/backButton";
import TaskForm from "@/components/taskForm";
import { useTask } from "@/customHooks/useTask";
import { Task } from "@/types";
import { useEffect, useState } from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const [selectedTask, setSelectedTask] = useState<Task | undefined>();

  const { taskList, editTask } = useTask();

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
      <TaskForm
        initialValues={selectedTask}
        onSubmit={(values) => {
          editTask({
            id: selectedTask.id,
            creationDate: selectedTask.creationDate,
            title: values.title,
            status: values.status,
            description: values.description,
            priority: values.priority,
          });
        }}
      />
    </>
  );
};

export default Page;
