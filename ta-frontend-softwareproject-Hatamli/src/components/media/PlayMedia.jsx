import React from "react";
import play from "../../assets/images/playbtn.png";
import media from "../../assets/images/aboytMeida.png";

const PlayMedia = () => {
  return (
    <div className="max-w-[1050px] max-md:px-10 m-auto relative rounded-lg overflow-hidden my-32">
      <img src={media} alt="video" className="w-full rounded-lg"  />
      <img
        src={play}
        alt="play"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-md:scale-50"
      />
    </div>
  );
};

export default PlayMedia;
