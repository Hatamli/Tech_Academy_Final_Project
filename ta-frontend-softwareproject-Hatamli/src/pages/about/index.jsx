import React from "react";
import Partners from "../../components/common/Partners";
import PlayMedia from "../../components/media/PlayMedia";
import AboutFooter from "../../components/footer/AboutFooter";
import Banner from "../../components/banner/BannerAbout";
import Team from "../../components/teamGroups/AboutPageTeam";
import Problems from "../../components/information/Problems";
import Statistics from "../../components/information/Statistics";

const AboutPage = () => {
  return (
    <div>
      <Banner />
      <Problems />
      <Statistics />
      <PlayMedia />
      <Team />
      <div className="text-center bg-[#FAFAFA] py-20 max-md:px-10">
        <h2 className="font-abril text-[#252B42] text-[44px]">
          Big Companies Are Here
        </h2>
        <p className="text-[#737373] font-libre mt-10">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics{" "}
        </p>
        <Partners />
      </div>
      <AboutFooter />
    </div>
  );
};

export default AboutPage;
