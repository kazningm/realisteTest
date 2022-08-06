import { Box, BoxProps } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { CardImg, CardStandart } from "./card";
import { CardSize } from "./card/helper";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store/useStore";

export const Body = observer(({ sx, ...props }: BoxProps) => {
  const { cards } = useStore();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const changePadding = () => {
      if (ref.current) {
        const clientWidth = ref.current.clientWidth;
        const padding = clientWidth / 2 - CardSize.WIDTH / 2;
        ref.current.style.paddingLeft = padding + "px";
        ref.current.style.paddingRight = padding + "px";
      }
    };

    const resizeHandler = (e: Event) => {
      changePadding();
    };

    setTimeout(() => {
      changePadding();
    }, 0);

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
      {...props}
    >
      <Box
        ref={ref}
        sx={{
          display: "flex",
          overflow: "hidden",
          overflowX: "scroll",
          width: "100%",
          gap: 2,
          px: 10,
          py: 3,
        }}
      >
        {cards.map((props, index) => {
          if (props.type === "withImgs") {
            return <CardImg key={index} {...(props as ICardImg)} />;
          }
          if (props.type === "standart") {
            return <CardStandart key={index} {...(props as ICardStandart)} />;
          }
          return null;
        })}
      </Box>
    </Box>
  );
});
