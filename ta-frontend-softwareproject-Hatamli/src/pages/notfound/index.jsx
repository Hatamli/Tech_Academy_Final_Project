import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import robot from "../../assets/images/404.png";
import RouteHead from "../../components/navbar/RouteHead";
const NotFoundPage = () => {
  return (
    <div>
      <RouteHead main={"404"} page={"404"} additional={""}/>
      <div className="flex flex-col items-center bg-[#FAFAFA] pt-10 pb-28 max-md:px-5">
        <img src={robot} alt="robot404" />
        <h3 className="text-[40px] text-[#252B42] font-montserrat font-bold mt-10">
          Oops...
        </h3>
        <p className="text-[20px] text-[#737373] font-montserrat mt-5 ">
          We can’t seem to find the page you’re looking for.
        </p>
        <Button
          startIcon={<KeyboardArrowLeftIcon className="!text-[30px]" />}
          className="!h-[52px] !bg-[#2DC071] !text-white !py-0  !shadow-none !mt-5"
          variant="contained"
        >
          <span className="font-semibold font-montserrat !lowercase first-letter:!uppercase">
            Back to Home
          </span>
        </Button>
        <h4 className="text-[24px] text-[#252B42] font-montserrat font-bold my-10">
          Are you looking for...
        </h4>
        <ul>
          <li>
            <Link to="/" className="font-bold font-font-montserrat text-[#252B42]">
              <ChevronRightIcon className="text-[#B73225] me-3" />
              Home
            </Link>
          </li>
          <li className="py-2">
            <Link to="/blogs" className="font-bold font-font-montserrat text-[#252B42]">
              <ChevronRightIcon className="text-[#B73225] me-3" />
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-bold font-font-montserrat text-[#252B42]">
              <ChevronRightIcon className="text-[#B73225] me-3" />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NotFoundPage;
