import React from "react";
import RedButton from "../buttons/RedButton";
import twitter from "../../assets/images/Vector (1).png"
import facebook from "../../assets/images/logos_facebook.png"
import instagram from "../../assets/images/ant-design_instagram-outlined.png"
import linkedin from "../../assets/images/logos_linkedin-icon.png"
import { Link } from "react-router-dom";

const FreeTrial = () => {
  return (
    <div className="text-center bg-[#FAFAFA] py-20 max-md:px-10">
      <h2 className="font-abril text-[#252B42] text-[44px]">
        Start your 14 days free trial
      </h2>
      <p className="text-[#737373] font-libre my-5">
        Met minim Mollie non desert Alamo est sit cliquey dolor <br className="max-md:hidden" />
        do met sent. RELIT official consequent.
      </p>
      <RedButton icon={null} text={"Try it free now"}/>
      <div className="social-icons flex gap-8 justify-center mt-8">
        <Link to={"/"}><img src={twitter}/></Link>
        <Link to={"/"}><img src={facebook}/></Link>
        <Link to={"/"}><img src={instagram}/></Link>
        <Link to={"/"}><img src={linkedin}/></Link>
      </div>
    </div>
  );
};

export default FreeTrial;
