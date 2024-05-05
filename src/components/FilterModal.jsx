/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Select from "react-select";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { filteredData } from "../redux/slice/jobsSlice";
import { capitalize } from "@mui/material";
import {
  experienceOptions,
  remoteOnsiteOptions,
  payOptions,
} from "../utils/constants";

const FilterModal = () => {
  const state = useSelector((state) => state);
  const toFilter = state.jobs.data.jdList;
  const [locationOptions, setLocationOptions] = useState([]);
  const [techStackOptions, setTechStackOptions] = useState([]);
  const dispatch = useDispatch();

  // Experience Filter function
  const filterMinExperience = (e) => {
    if (!e) {
      e = {
        value: 10,
      };
    }
    const minExp = e.value;
    const filteredList = toFilter.filter((x) => x.minExp < minExp);
    dispatch(filteredData(filteredList));
  };

  // Company name Filter function
  const filterCompanyName = (e) => {
    const name = e.target.value;
    const filteredList = toFilter.filter((x) =>
      x.companyName.toUpperCase().includes(name.toUpperCase())
    );
    dispatch(filteredData(filteredList));
  };

  // To fetch options from the api once the promise is resolved
  const resolved = async () => {
    var location = await toFilter.map((item) => capitalize(item.location));
    location = [...new Set(location)];
    location = location.map((value) => ({
      value: value,
      label: value,
    }));
    setLocationOptions(location);

    var stack = await toFilter.map((item) => capitalize(item.jobRole));
    stack = [...new Set(stack)];
    stack = stack.map((value) => ({
      value: value,
      label: value,
    }));
    setTechStackOptions(stack);
  };

  useEffect(() => {
    resolved();
  }, [toFilter]);

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
      {/* Experience */}
      <Box>
        <Select
          placeholder="Experience"
          options={experienceOptions}
          isClearable
          onChange={filterMinExperience}
        />
      </Box>
      {/* Company name */}
      <Box sx={{ paddingTop: "0px" }}>
        <TextField
          id="company"
          sx={{
            width: { sm: 80, md: 170 },
            "& .MuiInputBase-root": {
              height: 37,
              textAlign: "center",
              justifyContent: "center",
              fontSize: "12px",
            },
          }}
          onChange={filterCompanyName}
          type="text"
          placeholder="Search Company Name"
          name="name"
        />
      </Box>
      <Box>
        {" "}
        <Select placeholder="Location" options={locationOptions} isClearable />
      </Box>
      <Box>
        {" "}
        <Select placeholder="Remote" options={remoteOnsiteOptions} />
      </Box>
      <Box>
        {" "}
        <Select placeholder="Tech Stack" options={techStackOptions} />
      </Box>
      <Box>
        {" "}
        <Select placeholder="Roles" isMulti options={techStackOptions} />
      </Box>
      <Box>
        {" "}
        <Select
          placeholder="Minimum Base Pay Salary"
          options={payOptions}
          isClearable
        />
      </Box>
    </Box>
  );
};

export default FilterModal;
