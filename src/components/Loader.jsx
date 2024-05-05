import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
const Loader = () => {
  return (
    <Box
      sx={{
        paddingTop: "-150px",
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
