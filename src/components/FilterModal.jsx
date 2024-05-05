import React from "react";
import Box from "@mui/material/Box";
import Select from "react-select";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";

const FilterModal = () => {
  const experienceOptions = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
  ];
  const [experience, setExperience] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "20px 20px 20px",
        gap: "10px",
        fontSize: "12px",
      }}
    >
      <Box>
        <Select
          placeholder="Experience"
          options={experienceOptions}
          isClearable
        />
      </Box>
      <Box sx={{ paddingTop: "0px" }}>
        <TextField
          sx={{
            width: { sm: 80, md: 170 },
            "& .MuiInputBase-root": {
              height: 37,
              textAlign: "center",
              justifyContent: "center",
              fontSize: "12px",
            },
          }}
          type="text"
          placeholder="Search Company Name"
          name="name"
        />
      </Box>
      <Box>
        {" "}
        <Select placeholder="Location" options={experienceOptions} />
      </Box>
      <Box>
        {" "}
        <Select placeholder="Remote" isMulti options={experienceOptions} />
      </Box>
      <Box>
        {" "}
        <Select placeholder="Tech Stack" options={experienceOptions} />
      </Box>
      <Box>
        {" "}
        <Select placeholder="Roles" isMulti options={experienceOptions} />
      </Box>
      <Box>
        {" "}
        <Select
          placeholder="Minimum Base Pay Salary"
          options={experienceOptions}
          isClearable
        />
      </Box>
    </Box>
  );
};

export default FilterModal;
