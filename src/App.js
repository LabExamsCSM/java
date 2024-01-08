import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import { Grid } from "@mui/material";
import Code from "./components/Code";
import { DataJava } from "./dataJava";
import { useState } from "react";
import LiveSearch from "./components/LiveSearch";
import Header from "./components/Header";
import ButtonGrp from "./components/ButtonGrp";

const darkTheme = createTheme({
  palette: { primary: { main: grey[50] }, secondary: { main: grey[900] } },
});

export default function App() {
  const [type, setType] = useState("all");
  const [searchValue, setSearchValue] = useState(null);
  let Data = DataJava;

  function handleType(text) {
    setType(() => text);
  }

  if (searchValue) {
    Data = [searchValue];
  }

  return (
    <>
      <ThemeProvider theme={darkTheme}>

        <CssBaseline />
        <Header />
        <LiveSearch setValue={setSearchValue} Data={Data}/>
        <ButtonGrp handleType={handleType}/>

      </ThemeProvider>
      {searchValue ? 
      (
        <Grid container spacing={2} style={{ alignItems: "stretch" }}>
          {Data.map((item, index) => {
            return (
              <Grid
              key={index}
                item
                md={12}
                lg={6}
                sx={{ maxWidth: "100%", margin: "auto" }}
              >
                <Code title={item.title} code={item.code} />
              </Grid>
            );
          })}
        </Grid>
      ) : 
      (
        <Grid container spacing={2} style={{ alignItems: "stretch" }}>
          {Data.map((item, index) => {
            if (type === "all")
              return (
                <Grid
                key={index}
                  item
                  md={12}
                  lg={6}
                  sx={{ maxWidth: "100%", margin: "auto" }}
                >
                  <Code title={item.title} code={item.code} />
                </Grid>
              );

            if (type === item.unit)
              return (
                <Grid
                  item
                  md={12}
                  lg={6}
                  sx={{ maxWidth: "100%", margin: "auto" }}
                >
                  <Code title={item.title} code={item.code} />
                </Grid>
              );
            return null
          })}
        </Grid>
      )}
    </>
  );
}
