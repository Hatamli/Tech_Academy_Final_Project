import React from "react";
import { useLocation } from "react-router-dom";
import Subscribe from "../forms/Subscribe";
import SubscribeGreyBG from "../forms/SubscribeGreyBG";
import Contact from "../information/Contact";
import { FooterNavList } from "./FooterNavList";
import { FooterBrand } from "./FooterBrand";
import { FooterContact } from "./FooterContact";
import { FooterCopyRight } from "./FooterCopyRight";
const Footer = () => {
  const location = useLocation();
  const whiteList = [
    "/",
    "/about",
    "/team",
    "/contact",
    "/products",
    "/products/",
    "/shop",
  ];
  const companyInfo = [
    { path: "/about", text: "About Us" },
    { path: "/carrier", text: "Carrier" },
    { path: "/careers", text: "We are hiring" },
    { path: "/blogs", text: "Blog" },
  ];

  const legal = [
    { path: "/about", text: "About Us" },
    { path: "/legal/carrier", text: "Carrier" },
    { path: "/legal/careers", text: "We are hiring" },
    { path: "/blogs", text: "Blog" },
  ];

  const features = [
    { path: "/features/business-marketing", text: "Business Marketing" },
    { path: "/features/user-analytics", text: "User Analytic" },
    { path: "/features/live-chat", text: "Live Chat" },
    { path: "/features/unlimited-support", text: "Unlimited Support" },
  ];

  const resources = [
    { path: "/resources/ios-android", text: "IOS & Android" },
    { path: "/resources/watch-demo", text: "Watch a Demo" },
    { path: "/resources/customers", text: "Customers" },
    { path: "/resources/api", text: "API" },
  ];
  return (
    <>
      {!whiteList.includes(location.pathname) ? (
        <footer className="bg-[#252B42] py-8 !text-white w-full">
          <FooterBrand />
          <div className="max-w-[1100px] bg-[#E6E6E6] h-[1px] m-auto mt-9 mb-16 max-sm:bg-transparent"></div>
          <div className="max-w-[1100px] flex flex-wrap m-auto justify-start max-sm:flex-col max-md:px-10 max-sm:gap-6 max-lg:gap-20 md:justify-between">
            <FooterNavList title={"Company Info"} links={companyInfo} />
            <FooterNavList title={"Legal"} links={legal} />
            <FooterNavList title={"Features"} links={features} />
            <FooterNavList title={"Resources"} links={resources} />
            <FooterContact children={<Subscribe />} />
          </div>
          <FooterCopyRight className={"text-white"} text={"Made With Love By Finland All Right Reserved"}/>
        </footer>
      ) : (
        <>
          <footer className="bg-white py-8 !text-[#252B42] w-full">
            <FooterBrand />
            <div className="max-w-[1100px] bg-[#E6E6E6] h-[1px] m-auto mt-9 mb-16 max-sm:bg-transparent"></div>
            <div className="max-w-[1100px] flex flex-wrap m-auto justify-start max-sm:flex-col max-md:px-10 max-sm:gap-6 max-lg:gap-20 md:justify-between">
              <FooterNavList title={"Company Info"} links={companyInfo} />
              <FooterNavList title={"Legal"} links={legal} />
              <FooterNavList title={"Features"} links={features} />
              <FooterNavList title={"Resources"} links={resources} />
              <FooterContact children={<SubscribeGreyBG />} />
            </div>
          </footer>
          {location.pathname == "/" ? (
            <Contact />
          ) : (
            <div className="bg-[#FAFAFA] h-[74px] ">
              <FooterCopyRight className={"text-[#737373] translate-y-[30px]"} text={"Made With Love By Finland All Right Reserved"}/>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Footer;
