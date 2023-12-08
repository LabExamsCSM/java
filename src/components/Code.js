import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ButtonCopy from "./ButtonCopy";

const cardTheme = createTheme({
  palette: {
    background: { paper: "#fafafa" },
    primary: { main: "#212121" },
    secondary: { main: "#212121" },
  },
});

function Code({ title, code }) {

  return (
    <>
      <ThemeProvider theme={cardTheme}>
        <Card sx={{padding:3}}>
          <CardContent>
            <Typography
              color="primary"
              variant="h6"
              component="div"
              sx={{ display: "inline" }}
            >
              {title}
            </Typography>
          </CardContent>
          <CardActions>
            <ButtonCopy code={code}/>
            
          </CardActions>
        </Card>
      </ThemeProvider>
    </>
  );
}

export default Code;
