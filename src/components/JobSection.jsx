import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const JobSection = () => {
  return (
    <>
      <Box sx={{ padding: "20px" }}>
        <Box sx={{ marginTop: "60px" }}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography sx={{fontFamily: "Lexend, sans-serif" }}>Search jobs</Typography>{" "}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default JobSection;
