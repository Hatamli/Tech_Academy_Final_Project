import StarIcon from "@mui/icons-material/Star";
import DownloadIcon from "../icons/Download";
import ClockIcon from "../icons/Clock";
import LessonIcon from "../icons/Lesson";
import CommentIcon from "../icons/COmment";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Colors from "../common/Colors";
import IconsGroup from "../common/IconsGroup";

export default function MediaControlCard({image}) {
  return (
      <div className="col-span-1 flex">
        <div className="relative w-max">
          <div className="absolute top-[20px] left-[20px] bg-[#E74040] px-[10px] font-montserrat font-bold text-[14px] rounded-[3px] text-white">
            Sale
          </div>
          <img src={image} alt="image" />
          <div className="icons absolute flex gap-3 bottom-[30px] left-[50%] -translate-x-[50%]">
            <IconsGroup/>
          </div>
        </div>
        <div className="w-[292px]" style={{ padding: "25px 25px 35px 25px" }}>
          <div className="flex justify-between items-center w-full ">
            <h3 className="text-[#B73225] font-montserrat font-bold text-[14px]">
              English Department
            </h3>{" "}
            <div className="rounded-[20px] bg-[#252B42] flex gap-1 p-[5px] text-white text-[12px] font-montserrat items-center">
              <StarIcon className="text-[#FFCE31] scale-90" /> 4.9
            </div>
          </div>
          <h2 className="text-[#252B42] font-montserrat font-bold my-3">
            Graphic Design
          </h2>
          <p className="text-[#737373] text-[14px] font-montserrat">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <p className="flex font-bold font-montserrat items-center text-[#737373] mt-3 gap-2">
            <DownloadIcon /> 15 Sales
          </p>
          <div className="flex gap-2 mt-2">
            <div className="w-[52px] text-center text-[#BDBDBD] font-montserrat font-bold">
              $16.4 <br />8
            </div>
            <div className="w-[52px] text-center text-[#23856D] font-montserrat font-bold">
              $6.4 <br />8
            </div>
          </div>
          <Colors/>
          <div className="flex items-center justify-between w-full mt-6">
            <p className="flex items-center text-[12px] font-montserrat text-[#737373] gap-1"><ClockIcon/> 22h...</p>
            <p className="flex items-center text-[12px] font-montserrat text-[#737373] gap-1"><LessonIcon/> 64 Lessons</p>
            <p className="flex items-center text-[12px] font-montserrat text-[#737373] gap-1"><CommentIcon/> Progress</p>
          </div>
          <button className="text-[#B73225] font-montserrat text-[14px] font-bold flex gap-2 items-center justify-center w-[144px] h-[44px] rounded-[37px] border-2 border-[#B73225] mt-5"><span>Learn More</span> <ChevronRightIcon/></button>
        </div>
      </div>
  );
}
