import React from "react";

const Subscribe = () => {
  return (
    <form className="flex max-md:flex-col max-md:gap-5">
      <input
        className="border max-md:w-full border-white max-md:rounded-e-[5px] rounded-s-[5px] h-[58px] w-[204px] text-[#737373] bg-white text-[14px] ps-5"
        type="email"
        placeholder="Your Email"
      />
      <button className="bg-[#B73225] max-md:w-full border border-white !text-white max-md:rounded-s-[5px] rounded-e-[5px] text-[14px] w-[117px] h-[58px] flex justify-center items-center">
        Subscribe
      </button>
    </form>
  );
};

export default Subscribe;
