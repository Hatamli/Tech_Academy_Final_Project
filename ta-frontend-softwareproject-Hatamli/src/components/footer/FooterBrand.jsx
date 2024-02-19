import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

export const FooterBrand = () => (
  <div className="max-w-[1100px] h-[91px] m-auto flex items-center justify-between">
    <div className="flex items-center justify-between w-full max-sm:flex-col max-sm:items-start max-md:px-10">
      <Link className="font-libre text-[26px] font-bold" to={"/"}>
        Silverbin
      </Link>
      <div className="icons flex gap-3 pe-20 !text-[#B73225] max-sm:mt-5">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </div>
  </div>
);
