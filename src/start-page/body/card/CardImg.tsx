import { Box, BoxProps, Typography } from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import React from "react";
import { Badge } from "./badge";
import { CardSize } from "./helper";
import { Link } from "./link";
import { Picture } from "./picture";

export const CardImg = ({
  badgeText,
  title,
  description,
  imgs,
  sx,
  ...props
}: BoxProps & ICardImg) => {
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
        alignItems: "start",
        boxShadow: shadows[2],
      }}
    >
      <Badge badgeText={badgeText} sx={{ mt: 2 }} />
      <Box>
        {title.split("\\n").map((t, i) => (
          <Typography
            key={i}
            sx={{
              fontWeight: 800,
              fontSize: "28px",
              lineHeight: "28px",
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
              px: 1,
            }}
          >
            {d}
          </Typography>
        ))}
      </Box>
      <Link text="Let's look" />
      <Box
        sx={{
          width: "100%",
          flexGrow: 999,
          display: "flex",
          justifyContent: "end",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Picture imgs={imgs} />
      </Box>
    </Box>
  );
};
