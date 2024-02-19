import { FormControl, FormLabel, Input } from "@mui/material";
import React from "react";

const AuthInput = ({type,placeholder,label, onChange}) => {
  return (
    <FormControl className="w-full border-b-none">
      <label className="text-[#252B42] mt-5 text-[14px] font-bold font=montserrat">{label}</label>
      <input required onChange={onChange} className="!border bg-[#F9F9F9] text-[#737373] p-2 mt-2 rounded-[5px]" type={type} placeholder={placeholder} />
    </FormControl>
  );
};

export default AuthInput;
