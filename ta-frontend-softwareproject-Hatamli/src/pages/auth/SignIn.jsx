import { Button } from "@mui/material";
import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import AuthInput from "../../components/inputs/AuthInput";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [validateText, setValidateText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    const emails = JSON.parse(
      localStorage.getItem("emails") ? localStorage.getItem("emails") : "[]"
    );
    if (
      email != "" &&
      localStorage.getItem("signUp") == "true" &&
      email.includes("@") &&
      emails.includes(email)
    ) {
      localStorage.setItem("signIn", "true");
      navigate("/");
      window.location.reload();
    } else {
      setValidateText("Wrong email adress!");
    }
  };
  return (
    <form className="py-[100px] max-md:px-10 max-w-[434px] m-auto flex flex-col items-center">
      <h2 className="font-montserrat text-[40px] text-[#252B42] font-bold">
        Welcome Back
      </h2>
      <Button
        startIcon={<FacebookIcon className="!text-[30px]" />}
        className="!h-[52px] w-full !bg-[#2A7CC7] !text-white !py-0  !shadow-none !mt-16"
        variant="contained"
      >
        <span className="font-semibold font-montserrat !lowercase first-letter:!uppercase">
          Facebook
        </span>
      </Button>
      <div className="text-[#737373] font-montserrat text-[14px] or relative mt-5 mb-2 font-medium">
        OR
      </div>
      <AuthInput
        type={"email"}
        label={"Email address *"}
        placeholder={"example@gmail.com "}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br />
      <span className="text-red-500">{validateText}</span>
      <Button
        className="!h-[52px] w-full !bg-[#2DC071] !text-white !py-0 !mt-5 !shadow-none"
        variant="contained"
        onClick={handleSubmit}
      >
        <span className="font-montserrat !capitalize font-semibold">
          Get started
        </span>
      </Button>
      <p className="mt-7 text-[16px] text-[#252B42] font-montserrat font-bold">
        Don't have an account?{" "}
        <Link className="text-[#B73225]" to={"/auth/signup"}>
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default SignIn;
