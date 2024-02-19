import { Button } from "@mui/material";
import React from "react";

const RedButton = ({ text, icon }) => {
  return (
    <Button
      endIcon={icon ? icon : null}
      className="!h-[52px] !bg-[#B73225] !text-white !py-0 !px-[25px] !shadow-none"
      variant="contained"
    >
      <span className="font-libre !lowercase first-letter:!uppercase">{text}</span>
    </Button>
  );
};

export default RedButton;
