import React from "react";
import TeamCard from "../cards/TeamCard";
import user1 from "../../assets/images/media.png"
import user2 from "../../assets/images/team-1-user-2.jpg"
import user3 from "../../assets/images/team-1-user-3.jpg"

const Team = () => {
  return (
    <div className="max-w-[1050px] max-md:px-10 m-auto font-montserrat text-center my-32">
      <h3 className="text-[40px] text-[#252B42] font-bold">Meet Our Team</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-20 gap-10 gap-y-28">
        <TeamCard image={user1}/>
        <TeamCard image={user2}/>
        <TeamCard image={user2}/>
        <TeamCard image={user3}/>
        <TeamCard image={user3}/>
        <TeamCard image={user3}/>
        <TeamCard image={user3}/>
        <TeamCard image={user3}/>
        <TeamCard image={user3}/>
      </div>
    </div>
  );
};

export default Team;
