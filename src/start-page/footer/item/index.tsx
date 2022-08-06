import { Stack, StackProps, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

export const Item = ({
  icon,
  text,
  sx,
  ...props
}: StackProps & { icon: React.ReactNode; text: string }) => {
  return (
    <Stack sx={{ alignItems: "center", gap: 1, ...sx }} {...props}>
      {icon}
      <Typography sx={{ color: grey[800] }}>{text}</Typography>
    </Stack>
  );
};
