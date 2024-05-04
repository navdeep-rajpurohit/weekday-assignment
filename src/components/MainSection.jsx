import Box from "@mui/material/Box";
import Header from "./Header";
import JobSection from "./JobSection";

const MainSection = () => {
  return (
    <>
      <Box sx={{ width: "calc(100% - 200px)", marginLeft: "100px" }}>
        {/* Top Header */}
        <Header />
        {/* Job section contains sorting fields and job cards */}
        <JobSection />
      </Box>
    </>
  );
};

export default MainSection;
