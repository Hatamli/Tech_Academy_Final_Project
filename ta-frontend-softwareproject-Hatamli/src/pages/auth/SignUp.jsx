import { Button } from "@mui/material";
import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import AuthInput from "../../components/inputs/AuthInput";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [validateText, setValidateText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (email != "" && password != "" && name != "" && email.includes("@")) {
      localStorage.setItem("signUp", "true");
      const emails = JSON.parse(
        localStorage.getItem("emails") ? localStorage.getItem("emails") : "[]"
      );
      emails.push(email);
      localStorage.setItem("emails", JSON.stringify(emails));
      navigate("/auth/signin");
    } else {
      setValidateText("Fill infoirmations!");
    }
  };

  return (
    <form className="py-[100px] max-md:px-10 max-w-[434px] m-auto flex flex-col items-center">
      <h2 className="font-montserrat text-[40px] text-[#252B42] font-bold text-center">
        Sign up for free
      </h2>
      <p className="text-center max-w-[364px] leading-6 text-[#737373] font-bold ">
        Try everything free for 30 days, no payment details required
      </p>
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
        onChange={(e) => setName(e.target.value)}
        type={"text"}
        label={"Name *"}
        placeholder={"Full Name *"}
      />
      <AuthInput
        onChange={(e) => setEmail(e.target.value)}
        type={"email"}
        label={"Email address *"}
        placeholder={"example@gmail.com "}
      />
      <AuthInput
        onChange={(e) => setPassword(e.target.value)}
        type={"password"}
        label={"Password *"}
        placeholder={"Password"}
      />
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
      <p
        className="mt-5 text-[12px] text-[#737373] font-medium"
        style={{ letterSpacing: ".5px" }}
      >
        By filling in the form above and clicking the “Get Started” button, you
        accept and agree to Terms of Service and Privacy Policy.
      </p>
      <p className="mt-7 text-[16px] text-[#252B42] font-montserrat font-bold">
        Already have an account?{" "}
        <Link className="text-[#B73225]" to={"/auth/signin"}>
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default SignUp;
