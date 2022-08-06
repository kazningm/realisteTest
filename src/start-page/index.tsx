import { Fade, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Body } from "./body";
import { Footer } from "./footer";
import { Header } from "./header";

export const StartPage = () => {
  const [showLoader, setShowLoader] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 1500);
  }, []);

  return (
    <>
      <Fade timeout={1000} in={showLoader}>
        <Stack
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            height: "100vh",
            maxHeight: "100vh",
            width: "100%",
            maxWidth: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage:
              "linear-gradient(135deg, rgba(255,246,182,1) 0%, rgba(207,250,255,1) 100%)",
          }}
        >
          <Typography
            sx={{ fontSize: "80px", letterSpacing: "20px", fontWeight: 300 }}
          >
            DUBAI
          </Typography>
        </Stack>
      </Fade>
      <Fade timeout={1000} in={!showLoader}>
        <Stack
          sx={{
            height: "100vh",
            maxHeight: "100vh",
            width: "100%",
            maxWidth: "100%",
            backgroundImage:
              "linear-gradient(135deg, rgba(207,250,255,1) 0%, rgba(255,246,182,1) 100%)",
            overflow: "hidden",
            gap: 2,
          }}
        >
          <Header sx={{ flexGrow: 1 }} />
          <Body sx={{ flexGrow: 999 }} />
          <Footer sx={{ flexGrow: 1 }} />
        </Stack>
      </Fade>
    </>
  );
};
