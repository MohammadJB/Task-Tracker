"use client";

import { useTask } from "@/customHooks/useTask";
import TaskForm from "@/components/taskForm";
import BackButton from "@/components/backButton";

const Page = () => {
  const { createTask } = useTask();

  return (
    <div>
      <BackButton />
      <TaskForm
        onSubmit={(values) => {
          createTask({
            title: values.title,
            status: values.status,
            description: values.description,
            tags: values.tags,
            priority: values.priority,
          });
        }}
      />
    </div>
  );
};

export default Page;
