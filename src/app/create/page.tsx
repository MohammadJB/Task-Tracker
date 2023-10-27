"use client";

import { useTask } from "@/customHooks/useTask";
import TaskForm from "@/components/taskForm";
import BackButton from "@/components/backButton";

const Page = () => {
  const { createTask } = useTask();

  return (
    <>
      <div className="py-4">
        <BackButton />
      </div>
      <TaskForm
        onSubmit={(values) => {
          createTask({
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
