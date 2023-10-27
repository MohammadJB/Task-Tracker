"use client";

import SearchBox from "@/components/searchBox";
import TaskItem from "@/components/taskItem";
import { useTask } from "@/customHooks/useTask";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Spinner } from "@chakra-ui/react";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  const router = useRouter();
  const { taskList, loading } = useTask();

  if (loading) return <Spinner />;

  return (
    <>
      <div className="md:flex justify-between">
        <SearchBox
          value={searchValue}
          onChange={(value) => setSearchValue(value)}
        />
        <Button onClick={() => router.push("/create")}>Create Task</Button>
      </div>

      <div className="flex flex-wrap justify-center mt-6 gap-2">
        {taskList
          .filter((task) => task.title.includes(searchValue))
          .map((taskItem) => (
            <TaskItem key={taskItem.id} item={taskItem} />
          ))}
      </div>
    </>
  );
}
