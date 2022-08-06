import { GridProps, Grid, Box } from "@mui/material";
import React from "react";
import { CardSize } from "../helper";

export const Picture = ({
  imgs,
  sx,
  ...props
}: GridProps & { imgs: string[] }) => {
  return (
    <Grid
      container
      columns={imgs.length === 1 ? 1 : 2}
      columnSpacing={1}
      sx={{ width: "100%", ...sx }}
      {...props}
    >
      {imgs.map((img, index) => (
        <Grid key={img} item xs={1}>
          <Box
            sx={{
              width: "100%",
              height:
                imgs.length === 1
                  ? `${CardSize.LARGE_IMG_HEIGHT}px`
                  : `${CardSize.SMALL_IMG_HEIGHT}px`,
              borderRadius: "15px",
            }}
            component="img"
            src={img}
          />
        </Grid>
      ))}
    </Grid>
  );
};
