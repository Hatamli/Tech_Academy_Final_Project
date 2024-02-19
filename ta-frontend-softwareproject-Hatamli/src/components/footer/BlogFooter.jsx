import React from "react";
import RedButton from "../buttons/RedButton";

const BlogFooter = () => {
  return (
    <div className="max-w-[1100px] m-auto flex max-md:flex-col justify-between items-center">
      <div className="max-md:text-center max-md:px-10">
        <h3 className="max-w-[500px] text-[24px] font-abril md:text-[44px] font-bold text-white">
          Subscribe For Latest Newsletter
        </h3>
        <p className="max-w-[500px] text-[16px] font-librel text-white max-md:my-5">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th{" "}
        </p>
      </div>
      <RedButton icon={null} text={"Get Started"}/>
    </div>
  );
};

export default BlogFooter;
