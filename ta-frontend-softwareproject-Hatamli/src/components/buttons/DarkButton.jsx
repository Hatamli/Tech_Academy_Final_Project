import { Button } from "@mui/material";
import React from "react";

const DarkButton = ({ text, icon }) => {
  return (
    <Button
      endIcon={icon ? icon : null}
      className="!h-[52px] !bg-[#252B42] !text-white !text-[14px] !py-0 !px-[25px] !shadow-none"
      variant="contained"
    >
      <span className="font-montserrat !capitalize">{text}</span>
    </Button>
  );
};

export default DarkButton;
