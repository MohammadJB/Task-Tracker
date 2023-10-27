"use client";
import { TASK_LIST_KEY } from "@/constants/constants";
import { Task, TaskStatus } from "@/types";
import { useEffect, useState, createContext } from "react";

export type TaskContextType = {
  taskList: Task[];
  loading: boolean;
  createTask: (
    taskItem: Partial<Task> &
      Pick<Task, "title" | "status" | "description" | "tags" | "priority">
  ) => void;
  deleteTask: (taskId: string) => void;
  editTask: (taskItem: Task) => void;
  changeTaskStatus: (taskId: string) => void;
};

export const TaskContext = createContext<TaskContextType>({
  taskList: [],
  loading: true,
  createTask: () => {},
  deleteTask: () => {},
  editTask: () => {},
  changeTaskStatus: () => {},
});

const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const taskList = localStorage.getItem(TASK_LIST_KEY);

    if (taskList) {
      setTaskList(JSON.parse(taskList));
    }
    setLoading(false);
  }, []);

  const createTask = (
    taskItem: Partial<Task> &
      Pick<Task, "title" | "status" | "description" | "tags" | "priority">
  ) => {
    taskItem.id = Date.now().toString() + Math.random().toString();
    taskItem.creationDate = Date.now();

    setTaskList(taskList.concat([taskItem as Task]));
    localStorage.setItem(
      TASK_LIST_KEY,
      JSON.stringify(taskList.concat([taskItem as Task]))
    );
  };

  const deleteTask = (taskId: string) => {
    setTaskList(taskList.filter((task) => task.id !== taskId));
    localStorage.setItem(
      TASK_LIST_KEY,
      JSON.stringify(taskList.filter((task) => task.id !== taskId))
    );
  };

  const editTask = (taskItem: Task) => {
    const newTaskList = taskList;
    const selectedTaskIndex = newTaskList.findIndex(
      (task) => task.id === taskItem.id
    );
    if (selectedTaskIndex > -1) {
      newTaskList[selectedTaskIndex] = taskItem;
      setTaskList(taskList);
      localStorage.setItem(TASK_LIST_KEY, JSON.stringify(taskList));
    }
  };

  const changeTaskStatus = (taskId: string) => {
    const newTaskList = [...taskList];
    const selectedTaskIndex = newTaskList.findIndex(
      (task) => task.id === taskId
    );
    if (selectedTaskIndex > -1) {
      newTaskList[selectedTaskIndex].status =
        newTaskList[selectedTaskIndex].status === TaskStatus.Completed
          ? TaskStatus.Incomplete
          : TaskStatus.Completed;

      setTaskList(newTaskList);
      localStorage.setItem(TASK_LIST_KEY, JSON.stringify(taskList));
    }
  };

  return (
    <TaskContext.Provider
      value={{
        taskList,
        createTask,
        deleteTask,
        editTask,
        changeTaskStatus,
        loading,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
