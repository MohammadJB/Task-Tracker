import { TaskPriority } from "@/types";
import { twMerge } from "tailwind-merge";

interface PriorityBadgeProps {
  priority: TaskPriority;
}

const getClassByPriority = (priority: TaskPriority) => {
  if (priority === TaskPriority.High) return "bg-red";
  else if (priority === TaskPriority.Medium) return "bg-orange";
  else if (priority === TaskPriority.Low) return "bg-green";
};

const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
  return (
    <span
      className={twMerge(
        "uppercase text-white rounded text-xs font-semibold p-1",
        getClassByPriority(priority)
      )}
    >
      {priority}
    </span>
  );
};

export default PriorityBadge;
