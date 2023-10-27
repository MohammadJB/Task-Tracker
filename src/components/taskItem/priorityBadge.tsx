import { TaskPriority } from "@/types";
import { Badge } from "@chakra-ui/react";

interface PriorityBadgeProps {
  priority: TaskPriority;
}

const getColor = (priority: TaskPriority) => {
  if (priority === TaskPriority.High) return "red";
  else if (priority === TaskPriority.Medium) return "orange";
  else if (priority === TaskPriority.Low) return "green";
};

const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
  return (
    <Badge variant="solid" colorScheme={getColor(priority)}>
      {priority}
    </Badge>
  );
};

export default PriorityBadge;
