import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
} from "@chakra-ui/react";
import { HiDotsVertical } from "react-icons/hi";

interface TaskMenuPopoverProps {
  onEditClick: () => void;
  onDeleteClick: () => void;
}

const TaskMenuPopover = ({
  onEditClick,
  onDeleteClick,
}: TaskMenuPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <button className="p-1 rounded-full hover:bg-lightBackground dark:hover:bg-darkBackground">
          <HiDotsVertical />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <Button onClick={onEditClick}>Edit</Button>
          <Button onClick={onDeleteClick}>Delete</Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default TaskMenuPopover;
