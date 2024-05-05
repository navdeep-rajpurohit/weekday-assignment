import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Card from "./Card";
import FilterModal from "./FilterModal";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJobs,
  fetchMoreJobs,
  filteredData,
} from "../redux/slice/jobsSlice";
import Loader from "./Loader";

const JobSection = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const jobs = state.jobs.filtered.jdList || state.jobs.data.jdList;

  // For calling the api on scroll
  let limit = 10;
  // When the api is called after scrolling
  const isLoading = state.jobs.isLoading;

  // Logic to handle infinite scrolling
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      dispatch(fetchMoreJobs(limit));
      limit = limit + 10;
    }
  };

  useEffect(() => {
    dispatch(fetchJobs());

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(state);
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
            {/* Filtering Modal */}
            <FilterModal/>

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
                  {/* Job Cards */}
                  <Card job={jobs} />
                  {/* Loader appears while scrolling*/}
                  {isLoading == true ? <Loader /> : ""}
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
