import React from "react";
import { Typography } from "@mui/material";

function Header() {
  return (
    <main>
      <Typography
        variant="h3"
        color="secondary"
        level="title-sm"
        fontWeight={700}
        fontFamily={"Syne"}
        align="center"
        paddingTop={10}
        marginBottom={5}
      >
        JAVA LAB PROGRAMS
      </Typography>
    </main>
  );
}

export default Header;
