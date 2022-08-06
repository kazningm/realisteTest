import { Box, BoxProps, Typography } from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import React from "react";
import { observer } from "mobx-react-lite";
import { i18n } from "../../../../store/i18n";
import { useStore } from "../../../../store/useStore";

export const Link = observer(
  ({ text, sx, ...props }: BoxProps & { text: string }) => {
    const { lang } = useStore();
    return (
      <Box
        sx={{
          borderRadius: "20px",
          bgcolor: "#FFFFFF",
          py: 1,
          px: 3,
          ml: 1,
          boxShadow: shadows[2],
          "&:hover": {
            cursor: "pointer",
          },
          ...sx,
        }}
        {...props}
      >
        <Typography sx={{ fontWeight: 700, fontSize: "16px" }}>
          {i18n(text, lang)}
        </Typography>
      </Box>
    );
  }
);
