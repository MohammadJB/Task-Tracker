"use client";

import { memo } from "react";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} variant="outline">
      Back
    </Button>
  );
};

export default memo(BackButton);
