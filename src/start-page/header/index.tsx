import { Box, BoxProps, Fade, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { grey } from "@mui/material/colors";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useStore } from "../../store/useStore";
import shadows from "@mui/material/styles/shadows";

export const Header = observer(({ sx, ...props }: BoxProps) => {
  const { lang, changeLang } = useStore();
  const [showDialogLang, setShowDialogLang] = useState<boolean>(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 1,
        px: 4,
        py: 2,
        ...sx,
      }}
      {...props}
    >
      <Box />
      <Box
        component="img"
        sx={{
          height: "70px",
        }}
        src={
          lang === "eng"
            ? "https://static.tildacdn.com/tild3665-3531-4466-b466-313364396261/Realiste_eng_logo_co.png"
            : "https://static.tildacdn.com/tild3735-3963-4137-a439-623033616465/Realiste_rus_logo.svg"
        }
      ></Box>
      <Box
        onClick={() => {
          setShowDialogLang((state) => !state);
        }}
        sx={{
          position: "relative",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <LanguageIcon
          sx={{ width: "30px", height: "30px" }}
          htmlColor={grey[600]}
        />
        <Fade timeout={300} in={showDialogLang}>
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              position: "absolute",
              zIndex: 1,
              right: "-10px",
              borderRadius: "15px",
              boxShadow: shadows[2],
              py: 1,
              "&:after": {
                content: "''",
                position: "absolute",
                right: "15px",
                top: "-20px",
                border: "10px solid transparent",
                borderBottom: "10px solid #FFFFFF",
              },
            }}
          >
            <Typography
              sx={{
                px: 2,
                py: 1,
                fontSize: "14px",
                lineHeight: "14px",
                fontWeight: "700",
                textAlign: "center",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => changeLang("ru")}
            >
              РУССКИЙ
            </Typography>
            <Typography
              sx={{
                px: 2,
                py: 1,
                fontSize: "14px",
                lineHeight: "14px",
                fontWeight: "700",
                textAlign: "center",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => changeLang("eng")}
            >
              ENGLISH
            </Typography>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
});

//
