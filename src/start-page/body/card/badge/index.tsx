import { Box, BoxProps, Typography } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import React from "react";

export const Badge = ({
  badgeText,
  sx,
  ...props
}: BoxProps & { badgeText: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: "20px",
        bgcolor: "#6307e3",
        pl: 1,
        pr: 2,
        ml: 1,
        gap: 1,
        alignItems: "center",
        justifyContent: "left",
        ...sx,
      }}
      {...props}
    >
      <BoltIcon htmlColor="#FFFFFF" sx={{ width: "20px", flexGrow: 0 }} />
      <Typography sx={{ color: "#FFFFFF", fontWeight: 600, fontSize: "12px" }}>
        {badgeText}
      </Typography>
    </Box>
  );
};
