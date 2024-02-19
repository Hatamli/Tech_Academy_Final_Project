import React from "react";
import RouteHead from "../../components/navbar/RouteHead";
import Galery from "../../components/media/Galery";
import Team from "../../components/teamGroups/TeamPageTeam";
import FreeTrial from "../../components/information/FreeTrial";

const TeamPage = () => {
  return (
    <div>
      <RouteHead
        main={"Innovation tailored for you"}
        page={"Team"}
        additional={"WHAT WE DO"}
      />
      <Galery/>
      <Team/>
      <FreeTrial/>
    </div>
  );
};

export default TeamPage;
