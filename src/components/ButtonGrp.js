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
        <Button onClick={() => handleType(1)}>Unit-1</Button>
        <Button onClick={() => handleType(2)}>Unit-2</Button>
        <Button onClick={() => handleType(3)}>Unit-3</Button>
        <Button onClick={() => handleType(4)}>Unit-4</Button>
        <Button onClick={() => handleType(5)}>Unit-5</Button>
        <Button onClick={() => handleType(6)}>Unit-6</Button>
        <Button onClick={() => handleType(7)}>Unit-7</Button>
      </ButtonGroup>
    </Container>
  );
}

export default ButtonGrp;
