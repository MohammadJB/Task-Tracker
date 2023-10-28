"use client";

import { useTask } from "@/customHooks/useTask";
import TaskForm from "@/components/taskForm";
import BackButton from "@/components/backButton";
import { useRouter } from "next/navigation";

const Page = () => {
  const { createTask } = useTask();
  const router = useRouter();

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
          router.replace("/");
        }}
      />
    </>
  );
};

export default Page;
