import React from "react";
import { Button, ButtonGroup, Container } from "@mui/material";

function ButtonGrp({handleType}) {
  return (
    <Container align="center" sx={{ marginBottom: 10 }}>
      <ButtonGroup
        variant="outlined"
        aria-label="outlined primary button group"
        color="secondary"
        size="small"
      >
        <Button onClick={() => handleType("all")}>ALL</Button>
        <Button onClick={() => handleType(2)}>Graphics</Button>
        <Button onClick={() => handleType(1)}>Non-Graphics</Button>
        {/* <Button onClick={() => handleType(2)}>CYCLE-2 P1</Button>
        <Button onClick={() => handleType(2.5)}>CYCLE-2 P2</Button>
        <Button onClick={() => handleType(3)}>CYCLE-3</Button> */}
      </ButtonGroup>
    </Container>
  );
}

export default ButtonGrp;
