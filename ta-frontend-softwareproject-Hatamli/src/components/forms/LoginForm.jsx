import React from "react";
import RedButton from "../buttons/RedButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const LoginForm = () => {
  return (
    <form className="flex items-center gap-12">
      <span className="text-[#B73225] font-bold text-[14px] font-libre">
        Login
      </span>
      <RedButton text="Become a member" icon={<ArrowForwardIcon />} />
    </form>
  );
};

export default LoginForm;
