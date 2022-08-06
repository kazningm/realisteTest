import { Box, BoxProps } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import CallMadeRoundedIcon from "@mui/icons-material/CallMadeRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { grey } from "@mui/material/colors";
import React from "react";
import { Item } from "./item";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store/useStore";

// согласен стрем, надо переделать
const dict: { [key in string]: React.ReactNode } = {
  Apartments: (
    <StarBorderRoundedIcon
      sx={{ width: "30px", height: "30px" }}
      htmlColor={grey[600]}
    />
  ),
  Deals: (
    <CallMadeRoundedIcon
      sx={{ width: "30px", height: "30px" }}
      htmlColor={grey[600]}
    />
  ),
  Estimation: (
    <AttachMoneyRoundedIcon
      sx={{ width: "30px", height: "30px" }}
      htmlColor={grey[600]}
    />
  ),
  "Trade Up": (
    <TrendingUpIcon
      sx={{ width: "30px", height: "30px" }}
      htmlColor={grey[600]}
    />
  ),
  Квартиры: (
    <StarBorderRoundedIcon
      sx={{ width: "30px", height: "30px" }}
      htmlColor={grey[600]}
    />
  ),
  Сделки: (
    <CallMadeRoundedIcon
      sx={{ width: "30px", height: "30px" }}
      htmlColor={grey[600]}
    />
  ),
  Оценка: (
    <AttachMoneyRoundedIcon
      sx={{ width: "30px", height: "30px" }}
      htmlColor={grey[600]}
    />
  ),
  Обмен: (
    <TrendingUpIcon
      sx={{ width: "30px", height: "30px" }}
      htmlColor={grey[600]}
    />
  ),
};

export const Footer = observer(({ sx, ...props }: BoxProps) => {
  const { cards } = useStore();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        px: 4,
        py: 2,
        ...sx,
      }}
      {...props}
    >
      {cards
        .filter((card) => card.type === "standart")
        .map(({ title }, index) => {
          return <Item key={index} icon={dict[title]} text={title} />;
        })}
    </Box>
  );
});
