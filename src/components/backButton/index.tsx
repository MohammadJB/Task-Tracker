"use client";

import { memo } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} variant="outlined">
      <FaArrowLeft />
      <span className="ms-2">Back</span>
    </Button>
  );
};

export default memo(BackButton);
