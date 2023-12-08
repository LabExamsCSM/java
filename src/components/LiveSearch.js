import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const cardTheme = createTheme({
  palette: {
    background: { paper: "#fafafa" },
    primary: { main: "#212121" },
    secondary: { main: "#212121" },
  },
});

function LiveSearch({setValue, Data}) {
  
  return (
    <ThemeProvider theme={cardTheme}>
      <Stack sx={{ width: "80%", marginX: "auto", marginBottom: 5 }}>
        <Autocomplete
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          getOptionLabel={(Data) => `${Data.title}`}
          options={Data}
          sx={{ width: "80%", marginX: "auto" }}
          isOptionEqualToValue={(option, value) => option.title === value.title}
          noOptionsText={"None"}
          renderOption={(props, Data) => (
            <Box component="li" {...props} key={Data.title}>
              {Data.title}
            </Box>
          )}
          renderInput={(params) => <TextField {...params} label="Search" />}
        />
      </Stack>
    </ThemeProvider>
  );
}

export default LiveSearch;
