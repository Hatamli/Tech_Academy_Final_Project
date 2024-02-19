import React from "react";
import ProductGrid from "./ProductGrid";
import FilterOptions from "../filters/FilterOptions";
import ViewsIcons from "../icons/Views";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import Pagination from "../pagination";

const Body = () => {
  const [Popularity, setPopularity] = React.useState("");
  const [search, setSearch] = React.useState("");

  const handleChange = (event) => {
    setPopularity(event.target.value);
  };
  return (
    <div className="max-w-[1050px] max-md:px-10 m-auto mt-6 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-20">
        <FilterOptions onChange={setSearch}/>
        <div className="col-span-1 md:col-span-4">
          <div className="flex flex-wrap gap-5 sm:gap-10 justify-center sm:justify-between items-center text-[#737373] text-[14px] font-montserrat font-bold">
            <p>Showing all 12 results</p>
            <div className="flex gap-4 items-center">
              Views: <ViewsIcons />
            </div>
            <FormControl className="w-[143px] border-[#DDDDDD]">
              <InputLabel id="demo-simple-select-label">Popularity</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Popularity}
                label="Popularity"
                onChange={handleChange}
                className="text-[#F9F9F9]"
                IconComponent={KeyboardArrowDown}
                sx={{background:"#F9F9F9", color:"#DDDDDD", borderColor:"#DDDDDD",fontWeight:"700"}}
              >
                <MenuItem value={10}>Popularity 1</MenuItem>
                <MenuItem value={20}>Popularity 2</MenuItem>
                <MenuItem value={30}>Popularity 3</MenuItem>
              </Select>
            </FormControl>
          </div>
          <ProductGrid query={search} />
          <Pagination/>
        </div>
      </div>
    </div>
  );
};

export default Body;
