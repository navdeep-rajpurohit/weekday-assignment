import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EditIcon from "@mui/icons-material/Edit";
// static text
import { currentCtc, expectedCtc, noticePeriod } from "../utils/user";

const ProfileSidebar = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        backgroundColor: "rgb(187, 252, 234)",
        padding: "80px 10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        width: "80px",
        zIndex: 10,
        paddingTop: "20px",
      }}
    >
      <Box>
        <AccountCircleRoundedIcon fontSize="large" />
      </Box>
      <Box sx={{ margin: "0px 0px" }}></Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <PaymentsOutlinedIcon />
        <Typography>{currentCtc}</Typography>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <MonetizationOnOutlinedIcon />
        <Typography>{expectedCtc}</Typography>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <AccessTimeOutlinedIcon />
        <Typography>{noticePeriod}</Typography>
      </Box>
      <Box sx={{ margin: "0px 0px" }}></Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <EditIcon />
        <Typography>Edit Profile</Typography>
      </Box>
    </Box>
  );
};

export default ProfileSidebar;
