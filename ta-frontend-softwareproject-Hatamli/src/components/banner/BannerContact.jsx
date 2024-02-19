import image from "../../assets/images/contactbg.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Banner = () => {
  return (
    <div className="w-full grid md:grid-cols-2 bg-[white]">
      <div className="col-span-1 flex justify-center items-center">
        <div className="max-md:flex max-md:flex-col max-md:items-center max-md:text-center">
          <p className="font-libre text-[17px] font-bold text-[#252B42]">
            CONTACT US
          </p>
          <h1 className="font-abril text-[44px] max-w-[255px] text-[#252B42] leading-tight my-8">
            Get in touch today!
          </h1>
          <p
            className="font-libre text-[20px] font-bold text-[#737373] max-w-[376px]"
            style={{ letterSpacing: "1px" }}
          >
            We know how large objects will act, but things on a small scale
          </p>

          <p className="font-libre text-[26px] font-bold text-[#252B42] mt-8">
            Phone ; +451 215 215 <br />
            Fax : +451 215 215
          </p>
          <div className="icons flex gap-5 scale-150 translate-x-[25%] mt-8 pe-20 !text-[#252B42]">
            <TwitterIcon />
            <FacebookIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <img alt="" src={image} />
      </div>
    </div>
  );
};

export default Banner;
