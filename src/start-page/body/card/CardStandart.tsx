import { Box, BoxProps, Typography } from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import React from "react";
import { CardSize } from "./helper";

export const CardStandart = ({
  title,
  description,
  img,
  sx,
  ...props
}: BoxProps & ICardStandart) => {
  return (
    <Box
      sx={{
        width: CardSize.WIDTH + "px",
        height: CardSize.HEIGHT + "px",
        bgcolor: "rgba(255, 255, 255, 0.3)",
        flexShrink: 0,
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 1,
        boxSizing: "border-box",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: shadows[2],
      }}
    >
      <Box
        sx={{
          borderRadius: "50%",
          width: "70px",
          height: "70px",
          boxShadow: "0 0 40px 5px rgba(99,7,227, 0.5)",
        }}
        component="img"
        src={img}
      />
      <Box>
        {title.split("\\n").map((t, i) => (
          <Typography
            key={i}
            sx={{
              fontWeight: 800,
              fontSize: "28px",
              lineHeight: "28px",
              textAlign: "center",
              px: 1,
            }}
          >
            {t}
          </Typography>
        ))}
      </Box>
      <Box>
        {description.split("\\n").map((d, i) => (
          <Typography
            key={i}
            sx={{
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "18px",
              textAlign: "center",
              px: 1,
            }}
          >
            {d}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
