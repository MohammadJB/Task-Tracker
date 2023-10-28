"use client";
import { TASK_LIST_KEY } from "@/constants/constants";
import { Task, TaskStatus } from "@/types";
import { useEffect, useState, createContext } from "react";

export type TaskContextType = {
  taskList: Task[];
  loading: boolean;
  createTask: (
    taskItem: Partial<Task> &
      Pick<Task, "title" | "status" | "description" | "priority">
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

  const syncLocalStorage = (taskList: Task[]) => {
    localStorage.setItem(
      TASK_LIST_KEY,
      JSON.stringify(taskList.concat(taskList))
    );
  };

  const createTask = (
    taskItem: Partial<Task> &
      Pick<Task, "title" | "status" | "description" | "priority">
  ) => {
    taskItem.id = Math.random().toString();
    taskItem.creationDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(Date.now());

    const newTaskList = taskList.concat([taskItem as Task]);
    setTaskList(newTaskList);
    syncLocalStorage(newTaskList);
  };

  const deleteTask = (taskId: string) => {
    const newTaskList = taskList.filter((task) => task.id !== taskId);
    setTaskList(newTaskList);
    syncLocalStorage(newTaskList);
  };

  const editTask = (taskItem: Task) => {
    const newTaskList = taskList;
    const selectedTaskIndex = newTaskList.findIndex(
      (task) => task.id === taskItem.id
    );
    if (selectedTaskIndex > -1) {
      newTaskList[selectedTaskIndex] = taskItem;
      setTaskList(newTaskList);
      syncLocalStorage(newTaskList);
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
      syncLocalStorage(newTaskList);
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
