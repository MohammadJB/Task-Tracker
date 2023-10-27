import { Task, TaskStatus } from "@/types";
import { useTask } from "@/customHooks/useTask";
import PriorityBadge from "./priorityBadge";
import { Checkbox, Badge } from "@chakra-ui/react";
import TaskMenuPopover from "@/components/taskMenuPopover";
import { useRouter } from "next/navigation";

interface TaskItemProps {
  item: Task;
}

const TaskItem = ({ item }: TaskItemProps) => {
  const { changeTaskStatus, deleteTask } = useTask();
  const router = useRouter();

  return (
    <div className="min-w-[400px] bg-lightElement dark:bg-darkElement rounded p-4 shadow">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Checkbox
            colorScheme="green"
            isChecked={item.status === TaskStatus.Completed}
            onChange={() => changeTaskStatus(item.id)}
          />
          <span
            className="text-lg font-semibold cursor-pointer"
            onClick={() => router.push(`/${item.id}`)}
          >
            {item.title}
          </span>
        </div>
        <TaskMenuPopover
          onEditClick={() => router.push(`/${item.id}/edit`)}
          onDeleteClick={() => deleteTask(item.id)}
        />
      </div>

      <div className="my-2">
        <PriorityBadge priority={item.priority} />
      </div>

      <hr />
      <div className="flex flex-wrap">
        {item.tags.map((tag, index) => (
          <Badge key={index} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default TaskItem;
