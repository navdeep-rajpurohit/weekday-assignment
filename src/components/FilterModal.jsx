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
    const filteredList = toFilter.filter((job) => job.minExp < minExp);
    dispatch(filteredData(filteredList));
  };

  // Company name Filter function
  const filterCompanyName = (e) => {
    const name = e.target.value;
    const filteredList = toFilter.filter((job) =>
      job.companyName.toUpperCase().includes(name.toUpperCase())
    );
    dispatch(filteredData(filteredList));
  };

  // Location Filter function
  const filterLocation = (e) => {
    if (!e) {
      e = {
        value: "",
      };
    }
    const location = e.value;
    let filteredList = toFilter.filter(
      (job) => job.location.toUpperCase() == location.toUpperCase()
    );
    filteredList = filteredList == 0 ? toFilter : filteredList;
    dispatch(filteredData(filteredList));
  };

  // Remote/Onsite Filter function
  const filterRemoteOnsite = (e) => {
    if (!e) {
      e = {
        value: "",
      };
    }
    const remoteOnsite = e.value;
    let filteredList = [];
    if (remoteOnsite === "remote") {
      filteredList = toFilter.filter((job) => job.location === "remote");
    } else if (remoteOnsite === "onsite") {
      filteredList = toFilter.filter((job) => job.location !== "remote");
    } else {
      return toFilter;
    }

    dispatch(filteredData(filteredList));
  };

  // Stack/Role Filter function
  const filterRole = (e) => {
    if (!e) {
      e = {
        value: "",
      };
    }
    const role = e.value;
    let filteredList = toFilter.filter(
      (job) => job.jobRole.toUpperCase() == role.toUpperCase()
    );
    filteredList = filteredList == 0 ? toFilter : filteredList;
    dispatch(filteredData(filteredList));
  };

  // Minimum oay Filter function
  const filterPay = (e) => {
    if (!e) {
      e = {
        value: "",
      };
    }
    const pay = e.value;
    let filteredList = toFilter.filter((job) => job.minJdSalary > pay);
    filteredList = filteredList == 0 ? toFilter : filteredList;
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
      {/* Location */}
      <Box>
        {" "}
        <Select
          placeholder="Location"
          options={locationOptions}
          isClearable
          onChange={filterLocation}
        />
      </Box>
      <Box>
        {" "}
        <Select
          placeholder="Remote"
          options={remoteOnsiteOptions}
          onChange={filterRemoteOnsite}
          isClearable
        />
      </Box>
      <Box>
        {" "}
        <Select
          placeholder="Tech Stack"
          options={techStackOptions}
          onChange={filterRole}
          isClearable
        />
      </Box>
      <Box>
        {" "}
        <Select
          placeholder="Roles"
          options={techStackOptions}
          onChange={filterRole}
          isClearable
        />
      </Box>
      <Box>
        {" "}
        <Select
          placeholder="Minimum Base Pay Salary"
          options={payOptions}
          isClearable
          onChange={filterPay}
        />
      </Box>
    </Box>
  );
};

export default FilterModal;
