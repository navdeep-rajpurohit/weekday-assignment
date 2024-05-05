import Button from "@mui/material/Button";
import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { capitalize } from "@mui/material";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import Loader from "./Loader";
import { postedDuration } from "../utils/constants";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";

const Card = (props) => {
  // modal variables
  const [open, setOpen] = useState(false);
  const [jobDesc, setJobDesc] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // modal style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      {/* Modal to be displayed on button click */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Job description
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {jobDesc}
          </Typography>
        </Box>
      </Modal>
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
              <CardContent sx={{ paddingTop: "0px" }}>
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
                    <Typography fontSize="small">
                      {capitalize(jobs.location)}
                    </Typography>
                  </Box>
                </Box>
                <Typography paragraph={true} fontWeight={"200"}>
                  Estimated Salary: {jobs.maxJdSalary ? "" : "From "}
                  {jobs.minJdSalary ? "$" + jobs.minJdSalary : "Upto"}{" "}
                  {jobs.maxJdSalary && jobs.minJdSalary ? " - " : ""}
                  {jobs.maxJdSalary ? jobs.maxJdSalary + " K" : ""}
                </Typography>
                <Box>
                  <Box sx={{ height: "250px", overflow: "hidden" }}>
                    {" "}
                    <Typography sx={{ fontSize: "1rem", lineHeight: "1.5" }}>
                      About Company:
                    </Typography>
                    <Box
                      sx={{
                        fontSize: "14px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                        About us
                      </Typography>
                      <Typography
                        paragraph={true}
                        sx={{ overflow: "auto", height: "160px" }}
                        fontWeight={"200"}
                      >
                        {jobs.jobDetailsFromCompany}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          height: "10px",
                        }}
                      >
                        <Button
                          onClick={() => {
                            handleOpen();
                            setJobDesc(jobs.jobDetailsFromCompany);
                          }}
                        >
                          Show more
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  {jobs.minExp == null ? (
                    <Typography sx={{ height: "45px" }}></Typography>
                  ) : (
                    <>
                      <Typography
                        sx={{
                          fontSize: "13px",
                          letterSpacing: "1px",
                          marginBottom: "3px",
                        }}
                      >
                        Minimum Experience
                      </Typography>

                      <Typography sx={{ fontSize: "14px", lineHeight: "1.5" }}>
                        {jobs.minExp} years
                      </Typography>
                    </>
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
