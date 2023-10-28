import { HiDotsVertical } from "react-icons/hi";
import { ClickAwayListener, Popover } from "@mui/material";
import { MouseEvent, useState } from "react";

interface TaskMenuPopoverProps {
  onEditClick: () => void;
  onDeleteClick: () => void;
}

const TaskMenuPopover = ({
  onEditClick,
  onDeleteClick,
}: TaskMenuPopoverProps) => {
  const [open, setOpen] = useState(false);
  const [anchorElement, setAnchorElement] = useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorElement);
  const id = canBeOpen ? "transition-popper" : undefined;
  return (
    <>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <button
          onClick={handleClick}
          className="w-6 h-6 p-1 rounded-full hover:bg-main-300 dark:hover:bg-main-700"
        >
          <HiDotsVertical size={16} />
        </button>
      </ClickAwayListener>
      <Popover id={id} open={open} anchorEl={anchorElement}>
        <ul className="rounded shadow min-w-[200px] bg-main-100 dark:bg-main-900">
          <li
            className="rounded hover:bg-main-300 hover:dark:bg-main-700 p-2 cursor-pointer font-semibold"
            onClick={onEditClick}
          >
            Edit
          </li>
          <li
            className="rounded hover:bg-main-300 hover:dark:bg-main-700 p-2 cursor-pointer font-semibold"
            onClick={onDeleteClick}
          >
            Delete
          </li>
        </ul>
      </Popover>
    </>
  );
};

export default TaskMenuPopover;
