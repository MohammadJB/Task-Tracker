"use client";

import SearchBox from "@/components/searchBox";
import TaskItem from "@/components/taskItem";
import { useTask } from "@/customHooks/useTask";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, CircularProgress } from "@mui/material";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  const router = useRouter();
  const { taskList, loading } = useTask();

  if (loading)
    return (
      <div className="py-6 text-center">
        <CircularProgress />
      </div>
    );

  return (
    <>
      <div className="md:flex justify-between sticky top-0 py-4 bg-main-300 dark:bg-main-800 z-10">
        <SearchBox
          value={searchValue}
          onChange={(value) => setSearchValue(value)}
        />
        <Button
          variant="contained"
          onClick={() => router.push("/create")}
          className="mt-4 md:m-0"
        >
          Create Task
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pb-4">
        {taskList.filter((task) => task.title.includes(searchValue)).length ===
          0 && <p className="text-center col-span-3 py-6">No tasks exist.</p>}
        {taskList
          .filter((task) => task.title.includes(searchValue))
          .map((taskItem) => (
            <TaskItem key={taskItem.id} item={taskItem} />
          ))}
      </div>
    </>
  );
}
