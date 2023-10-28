export enum TaskStatus {
  Completed = "completed",
  Incomplete = "incomplete",
}

export enum TaskPriority {
  Low = "low",
  Medium = "medium",
  High = "high",
}

export type Task = {
  id: string;
  title: string;
  status: TaskStatus;
  description: string;
  creationDate: string;
  priority: TaskPriority;
};
