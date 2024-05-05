import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { username } from "../utils/user"

const Header = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        padding: "10px 30px",
        width: "calc(100% - 200px)",
        height: "40px",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "8px",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 4px 0px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Typography sx={{ fontSize: "20px", fontFamily: "Lexend, sans-serif" }}>
        👋 {username}  {/* Using static text as the field is not returned by api  */}
      </Typography>
    </Box>
  );
};

export default Header;
