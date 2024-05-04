import React from "react";
import Box from "@mui/material/Box";
import NavigationSidebar from "../components/NavigationSidebar";
import MainSection from "../components/MainSection";
import ProfileSidebar from "../components/ProfileSidebar";

const Home = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Left navigation bar 
      NOTE: The section is not dynamic */}
      <NavigationSidebar />
      {/* Main section which contains header and job section */}
      <MainSection />
      {/* Profile side bar
      NOTE: The section is not dynamic */}
      <ProfileSidebar />
    </Box>
  );
};

export default Home;
