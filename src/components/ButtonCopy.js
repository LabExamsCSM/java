import { Button } from "@mui/material";
import React, { useState } from "react";

function ButtonCopy({code}) {
  const [btnText, setBtnText] = useState('Copy');

  const handleCopyClick = () => {
    // const textToCopy = code; // Replace with the text you want to copy
    navigator.clipboard.writeText(code);
    
    setBtnText(()=>'Copied!')

    setTimeout(() => {
      setBtnText('Copy');
    }, 1000);
  };


  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleCopyClick}
      sx={{ paddingX: 3, paddingY: 1.2 }}
    >
      {btnText}
    </Button>
  );
}

export default ButtonCopy;
