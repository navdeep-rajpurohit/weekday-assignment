import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const NavigationSidebar = () => {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: "0px",
          left: "0px",
          bottom: "0px",
          borderRadius: "12px",
          borderRight: "1px solid rgba(0, 0, 0, 0.1)",
          width: "100px",
          minHeight: "100vh",
          alignItems: "center",
          background: "rgb(255, 255, 255)",
          padding: "20px 15px",
          display: "flex",
          boxSizing: "border-box",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", marginLeft: 0.5 }}
            >
              {" "}
              <Box
                component="img"
                sx={{ width: "44px" }}
                alt="Logo"
                src="logo-small.png"
              />
            </Box>
          </Box>

          <Box>
            <Box sx={{ margin: "24px 0px" }}>
              <hr />
            </Box>
            <Typography
              sx={{
                margin: "0px 0px 10px",
                fontSize: "10px",
                textAlign: "center",
              }}
            >
              GET JOBS
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <Box>
                {" "}
                <PersonOutlineOutlinedIcon size={20} />{" "}
              </Box>
              <Box>
                <SearchOutlinedIcon size={22} />
              </Box>
              <Box>
                <CurrencyRupeeOutlinedIcon size={22} />
              </Box>
              <Box>
                <PersonAddAltOutlinedIcon size={22} />
              </Box>
            </Box>
            <Box sx={{ margin: "24px 0px" }}>
              <hr />
            </Box>
            <Typography
              sx={{
                margin: "0px 0px 10px",
                fontSize: "10px",
                textAlign: "center",
              }}
            >
              REFER
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <Box>
                <RecommendOutlinedIcon size={22} />
              </Box>
              <Box>
                <FactCheckOutlinedIcon size={22} />
              </Box>
              <Box>
                <ShareOutlinedIcon size={22} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ alignItems: "center" }}>
          <AccountCircleRoundedIcon fontSize="large" />
        </Box>
      </Box>
    </>
  );
};

export default NavigationSidebar;
