import React from "react";
import { FilterTitle } from "./FilterTitle";
import { SearchFilter } from "./SearchFilter";
import { FilterList } from "./FilterList";
import { CheckBoxFilter } from "./CheckboxFilter";
import { RadioButtonFilter } from "./RadioButtonFilter";
import { TagFilter } from "./TagFilter";
import { PriceFilter } from "./PriceFilter";
import { ColorFilter } from "./ColorFilter";



const FilterOptions = ({onChange}) => (
  <div className="space-y-16 col-span-1">
    <div className="space-y-4">
      <FilterTitle>Filter :</FilterTitle>
      <SearchFilter onChange={onChange}/>
    </div>
    <div className="space-y-10 font-libre text-[14px] text-[#737373] px-6">
      <div className="space-y-5">
        <FilterTitle>Accessories</FilterTitle>
        <FilterList items={["View All", "Bags", "Belts", "Cosmetics", "Hats"]} />
      </div>
      <div className="space-y-5">
        <FilterTitle>Bags</FilterTitle>
        <FilterList items={["View All", "Product"]} />
      </div>
      <div className="space-y-5">
        <FilterTitle>Clothing</FilterTitle>
        <FilterList items={["View All", "Features"]} />
      </div>
      <div className="h-[1px] bg-[#E7E7E7] w-full"></div>
      <div className="space-y-5">
        <FilterTitle>Brands</FilterTitle>
        <CheckBoxFilter items={["Bedroom", "Decor", "Decoration", "Kitchen", "Lamp", "Lighting"]} />
      </div>
      <div className="h-[1px] bg-[#E7E7E7] w-full"></div>
      <div className="space-y-5">
        <FilterTitle>Color</FilterTitle>
        <ColorFilter colors={[{ name: "Black", code: "#000000" }, { name: "Red", code: "#B73225" }]} />
      </div>
      <div className="h-[1px] bg-[#E7E7E7] w-full"></div>
      <div className="space-y-5">
        <FilterTitle>Category</FilterTitle>
        <RadioButtonFilter items={["Classic", "Sporty", "Casual", "Luxury"]} />
      </div>
      <div className="h-[1px] bg-[#E7E7E7] w-full"></div>
      <div className="space-y-5">
        <FilterTitle>Popular Tags</FilterTitle>
        <TagFilter tags={["Minimal", "Modern", "Classic", "Trendy", "Youth"]} />
      </div>
      <div className="h-[1px] bg-[#E7E7E7] w-full"></div>
      <div className="space-y-5">
        <FilterTitle>Filter By Price</FilterTitle>
        <PriceFilter />
      </div>
    </div>
  </div>
);

export default FilterOptions;
