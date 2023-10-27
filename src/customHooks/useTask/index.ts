import { TaskContext } from "@/providers/taskProvider";
import { useContext } from "react";

export function useTask() {
  const { taskList,loading, createTask, deleteTask, editTask, changeTaskStatus } =
    useContext(TaskContext);

  return { taskList,loading, createTask, deleteTask, editTask, changeTaskStatus };
}
