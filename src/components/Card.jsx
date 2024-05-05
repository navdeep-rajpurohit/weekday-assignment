/* eslint-disable react/prop-types */
import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { capitalize } from "@mui/material";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import Loader from "./Loader";
import { postedDuration } from "../utils/user";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      {props.job != null ? (
        props.job.map((jobs) => (
          <Grid
            key={jobs.jdUid}
            xs={12}
            item={true}
            md={6}
            lg={4}
            sx={{
              paddingLeft: "24px",
              paddingTop: "24px",
              marginTop: "8px",
              padding: "8px",
            }}
          >
            <Paper
              variant="elevation"
              sx={{
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px ",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth: "360px",
                height: "100vh",
                position: "relative",
                maxHeight: "590px",
                minHeight: "590px",
                borderRadius: "20px",
                overflow: "hidden",
                padding: "5px",
              }}
            >
              <Box sx={{ display: "flex", padding: "5px 0", width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    padding: "5px 10px",
                    flexWrap: "wrap",
                    gap: "5px",
                    width: "100%",
                    flex: "1 1 0%",
                  }}
                >
                  <Box
                    sx={{
                      padding: "4px 6px",
                      boxShadow: "rgba(6, 6, 6, 0.05) 0px 2px 6px 0px",
                      borderRadius: "10px",
                      border: "1px solid rgb(230, 230, 230)",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        margin: "0px",
                        fontFamily:
                          "__LexendFont_7838d2, __LexendFont_Fallback_7838d2",
                        fontWeight: "400",
                        lineHeight: "1.5",
                        fontSize: "9px",
                      }}
                    >
                      {/* used constant here */}⏳ Posted {postedDuration} days
                      ago
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <CardContent>
                <Box sx={{ display: "flex", gap: "0.5rem" }}>
                  <Box
                    component="img"
                    sx={{
                      height: "40px",
                      width: "40px",
                      maxHeight: { xs: 30, md: 50 },
                      maxWidth: { xs: 30, md: 50 },
                    }}
                    alt="Company Logo"
                    src={jobs.logoUrl}
                  />
                  <Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "13px",
                          fontWeight: 600,
                          letterSpacing: "1px",
                          marginBottom: "3px",
                          color: "#8b8b8b",
                        }}
                      >
                        {jobs.companyName}
                      </Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        {capitalize(jobs.jobRole)}
                      </Typography>
                    </Box>
                    <Typography>{capitalize(jobs.location)}</Typography>
                  </Box>
                </Box>
                <Typography paragraph={true}>
                  Estimated Salary:{" "}
                  {jobs.salaryCurrencyCode == "USD" ? "$" : "₹"}
                  {jobs.minJdSalary} - {jobs.maxJdSalary}{" "}
                  {jobs.salaryCurrencyCode == "USD" ? "K" : "LPA"}
                </Typography>
                <Box>
                  <Box sx={{ height: "250px", overflow: "hidden" }}>
                    {" "}
                    <Typography sx={{ fontSize: "1rem", lineHeight: "1.5" }}>
                      About Company:
                    </Typography>
                    <Box sx={{ fontSize: "14px" }}>
                      <Typography sx={{ fontWeight: "bold" }}>
                        About us
                      </Typography>
                      <Typography
                        paragraph={true}
                        sx={{ overflow: "auto", height: "160px" }}
                      >
                        {jobs.jobDetailsFromCompany}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      letterSpacing: "1px",
                      marginBottom: "3px",
                    }}
                  >
                    Minimum Experience
                  </Typography>
                  {jobs.minExp == null ? (
                    <Typography sx={{ fontSize: "14px", lineHeight: "1.5" }}>
                      No minimum experience required
                    </Typography>
                  ) : (
                    <Typography sx={{ fontSize: "14px", lineHeight: "1.5" }}>
                      {jobs.minExp} years
                    </Typography>
                  )}
                </Box>
              </CardContent>{" "}
              <Box
                sx={{
                  width: "90%",
                  padding: "0 15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                }}
              >
                {" "}
                <Box
                  sx={{
                    justifyContent: "space-between",
                    display: "flex",
                    width: "100%",
                    gap: "0.5rem",
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: "rgb(85, 239, 196)",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "rgb(85, 239, 196)",
                      },
                      width: "100%",
                      padding: "8px 18px",
                      borderRadius: "8px",
                      margin: "5px 0",
                      textTransform: "none",
                    }}
                    component={Link}
                    to={jobs.jdUid}
                    target="_blank"
                  >
                    ⚡ Easy Apply
                  </Button>
                </Box>
                <Box
                  sx={{
                    justifyContent: "space-between",
                    display: "flex",
                    width: "100%",
                    gap: "0.5rem",
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: "rgb(73, 67, 218)",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "rgb(73, 67, 218)",
                      },
                      width: "100%",
                      padding: "8px 18px",
                      borderRadius: "8px",
                      margin: "5px 0",
                      textTransform: "none",
                    }}
                    component={Link}
                    target="_blank"
                  >
                    <AccountCircleSharpIcon />
                    &nbsp;Unlock referral asks
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Card;
