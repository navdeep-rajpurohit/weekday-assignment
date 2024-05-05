import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Card from "./Card";

const JobSection = () => {
  const [job, setJobs] = useState([]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
      limit: 10,
      offset: 0,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    const data = async () => {
      try {
        const res = await fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSONn",
          requestOptions
        );
        const json = await res.json();
        setJobs(json.jdList);
      } catch (error) {
        console.log(error);
        setJobs([error]);
      }
    };

    data();
  }, []);

  return (
    <>
      <Box sx={{ padding: "20px" }}>
        <Box sx={{ marginTop: "60px" }}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography sx={{ fontFamily: "Lexend, sans-serif" }}>
                Search jobs
              </Typography>{" "}
            </Box>
            <Grid
              container
              spacing={{ xs: 3 }}
              sx={{
                display: "flex",
                flexFlow: "wrap",
                maxWidth: "100%",
                width: "calc(100% + 24px)",
                padding: "20px 0px",
              }}
            >
              <Grid
                item={true}
                xs={12}
                sx={{ paddingLeft: "24px", paddingTop: "24px" }}
              >
                {" "}
                <Grid
                  container
                  spacing={{ xs: 3 }}
                  sx={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "flex",
                    flexFlow: "wrap",
                  }}
                >
                  <Card job={job} />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default JobSection;
