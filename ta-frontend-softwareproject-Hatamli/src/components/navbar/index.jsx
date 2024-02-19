import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import CartRedIcon from "../icons/CartRed";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CartIcon from "../icons/Cart";
import WhitePhoneIcon from "../icons/WhitePhone";
import WhiteEnvelopeIcon from "../icons/WhiteEnvelope";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import HamburgerIcon from "../icons/Hmaburger";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [likes, setLikes] = useState([]);
  useEffect(() => {
    setOrders(
      JSON.parse(
        localStorage.getItem("products")
          ? localStorage.getItem("products")
          : "[]"
      )
    );
    setLikes(
      JSON.parse(
        localStorage.getItem("likes") ? localStorage.getItem("likes") : "[]"
      )
    );
  }, []);
  const location = useLocation();
  const whiteList = ["/", "/about", "/team", "/contact", "/products", "/shop"];
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.setItem("signIn", "false");
    navigate("/");
    window.location.reload();
  };
  const [show, setShow] = useState(false);
  return (
    <>
      {/* {desktop navbar } */}
      {!whiteList.includes(location.pathname) ? (
        <>
          <header className="max-w-[1100px] h-[91px] max-md:hidden m-auto flex items-center justify-between">
            <nav className="flex gap-28 items-center">
              <Link
                className="font-libre text-[26px] font-bold text-[#252B42]"
                to={"/"}
              >
                Silverbin
              </Link>
              <ul className="flex gap-6">
                <li>
                  <Link
                    className="text-[14px] text-[#737373] font-libre"
                    to={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[14px] text-[#737373] font-libre"
                    to={"/shop"}
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[14px] text-[#737373] font-libre"
                    to={"/shop"}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[14px] text-[#737373] font-libre"
                    to={"/contact"}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            {localStorage.getItem("signIn") == "true" ? (
              <button onClick={logOut}>Log out</button>
            ) : (
              <LoginForm />
            )}
          </header>
          {/* {mobile navbar } */}
          <header className="flex md:hidden flex-col p-4 bg-[#F6F6F6]">
            <div className="flex justify-between items-center mb-4">
              <div className="text-[26px] font-bold font-libre">Silverbin</div>
              <div className="flex gap-4 items-center">
                <SearchIcon />
                {localStorage.getItem("signIn") == "true" && (
                  <>
                    <Link to={"/cart"} className="flex gap-2">
                      <CartRedIcon /> {orders?.length}
                    </Link>
                  </>
                )}
                <button onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? "✖" : <HamburgerIcon />}
                </button>
              </div>
            </div>
            {isOpen && (
              <ul className="flex flex-col gap-4 text-[30px] text-[#737373] font-libre text-center w-full">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/products"}>Product</Link>
                </li>
                <li>
                  <Link to={"/shop"}>Cart</Link>
                </li>
                <li>
                  <Link to={"/shop"}>Contact</Link>
                </li>
              </ul>
            )}
          </header>
        </>
      ) : (
        <>
          {(location.pathname == "/shop" ||
            location.pathname == "/products") && (
            <div className="max-md:hidden h-[58px] bg-[#004E7C] text-white w-full">
              <div className=" max-w-[1100px] m-auto md:flex items-center justify-between h-full">
                <div className="font-montserrat text-[12px] flex gap-2">
                  <WhitePhoneIcon /> (225) 555-0118
                </div>
                <div className="font-montserrat text-[12px] flex gap-2">
                  <WhiteEnvelopeIcon /> michelle.rivera@example.com
                </div>
                <h4 className="font-montserrat text-[14px] font-bold">
                  Follow Us and get a chance to win 80% off
                </h4>
                <div className="font-montserrat text-[14px] font-bold flex ">
                  Follow Us :{" "}
                  <div className="icons flex gap-2 text-white scale-75">
                    <InstagramIcon /> <YouTubeIcon /> <FacebookIcon />{" "}
                    <TwitterIcon />
                  </div>
                </div>
              </div>
            </div>
          )}
          <header className="hidden  max-w-[1100px] h-[91px] m-auto md:flex items-center justify-between">
            <div className="text-[26px] font-bold font-libre">
              <Link to={"/"}>Silverbin</Link>
            </div>
            <ul className="flex gap-4 font-libre text-[#737373]">
              <li>
                <Link
                  className="text-[14px] text-[#737373] font-libre"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-[14px] text-[#737373] font-libre"
                  to={"/shop"}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className="text-[14px] text-[#737373] font-libre"
                  to={"/about"}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-[14px] text-[#737373] font-libre"
                  to={"/blogs"}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  className="text-[14px] text-[#737373] font-libre"
                  to={"/contact"}
                >
                  Contact
                </Link>
              </li>
              <li
                className="relative"
                onMouseLeave={() => setShow(false)}
                onMouseEnter={() => setShow(true)}
              >
                <span className="text-[14px] text-[#737373] font-libre">
                  Pages
                </span>
                <ul
                  className={`absolute top-[100%] bg-white p-3 duration-300 ${
                    show ? "" : "opacity-0"
                  }`}
                >
                  <li>
                    <Link
                      className="text-[14px] text-[#737373] font-libre"
                      to={"/team"}
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[14px] text-[#737373] font-libre"
                      to={"/blogs/article"}
                    >
                      Article
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="flex gap-4 items-center">
              <button className="text-[#B73225] flex font-montserrat me-3">
                <PersonOutlineIcon />{" "}
                {localStorage.getItem("signIn") == "true" ? (
                  <button onClick={logOut}>Log out</button>
                ) : (
                  <Link to={"/auth/signin"} className="font-bold">
                    Login / Register
                  </Link>
                )}
              </button>
              <span className="text-[#B73225] flex gap-10 items-center">
                <SearchIcon />
                {localStorage.getItem("signIn") == "true" && (
                  <>
                    <Link to={"/cart"} className="flex gap-2">
                      <CartRedIcon /> {orders?.length}
                    </Link>
                    <Link to={"/likes"} className="flex gap-2">
                      <FavoriteBorderIcon /> {likes?.length}
                    </Link>
                  </>
                )}
              </span>
            </div>
          </header>
          {/* {mobile navbar } */}
          <header className="flex md:hidden flex-col p-4 bg-[#F6F6F6]">
            <div className="flex justify-between items-center mb-4">
              <div className="text-[26px] font-bold font-libre">Silverbin</div>
              <div className="flex gap-4 items-center">
                <button onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? "✖" : <HamburgerIcon />}
                </button>
              </div>
            </div>
            {isOpen && (
              <ul className="flex flex-col gap-4 text-[30px] text-[#737373] font-libre text-center w-full">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/shop"}>Shop</Link>
                </li>
                <li>
                  <Link to={"/shop"}>About</Link>
                </li>
                <li>
                  <Link to={"/blogs"}>Blogs</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                  <Link to={"/products"}>Products</Link>
                </li>
                <li className="text-[#B73225] flex items-center justify-center">
                  <PersonOutlineIcon className="scale-125" />{" "}
                  {localStorage.getItem("signIn") == "true" ? (
                    <button onClick={logOut}>Log out</button>
                  ) : (
                    <Link to={"/auth/signin"}>Login / Register</Link>
                  )}
                </li>
                <li className="text-[#B73225] flex items-center justify-center">
                  <SearchIcon />
                </li>
                <li className="text-[#B73225] flex items-center justify-center">
                  {localStorage.getItem("signIn") == "true" && (
                    <>
                      <Link to={"/cart"} className="flex gap-2">
                        <CartRedIcon /> {orders?.length}
                      </Link>
                    </>
                  )}
                </li>
                <li className="text-[#B73225] flex items-center justify-center">
                  {localStorage.getItem("signIn") == "true" && (
                    <>
                      <Link to={"/likes"} className="flex gap-2">
                        <FavoriteBorderIcon /> {likes?.length}
                      </Link>
                    </>
                  )}
                </li>
              </ul>
            )}
          </header>
        </>
      )}
    </>
  );
};

export default Navbar;
