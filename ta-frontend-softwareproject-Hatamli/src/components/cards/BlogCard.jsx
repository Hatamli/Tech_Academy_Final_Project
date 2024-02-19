import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";
import ClockIcon from "../icons/Clock";
import CommentIcon from "../icons/COmment";
import New from "../common/New";

const BlogCard = ({ img }) => {
  return (
    <Card sx={{ maxWidth: 348 }} className="relative">
      <New/>
      <CardMedia sx={{ height: 300 }} image={img} title="green iguana" />
      <div className="px-4">
        <CardContent>
          <p className="font-montserrat text-[12px] text-[#737373] flex gap-3 mb-2">
            <span className="text-[#8EC2F2]">Google</span>
            <span>Trending</span>
            <span>New</span>
          </p>
          <Typography
            className="font-montserrat text-[20px] leading-5 text-[#252B42]"
            gutterBottom
            variant="h5"
            component="div"
          >
            Loudest à la Madison #1 (L'integral)
          </Typography>
          <Typography
            className="text-[#737373] text-[14px] font-montserrat leading-5"
            sx={{ letterSpacing: "1px" }}
            variant="body2"
          >
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </Typography>
          <div className="text-[#737373] text-[12px] flex justify-between mt-6">
            <span className="flex gap-1">
              <ClockIcon /> 22 April 2021
            </span>
            <span className="flex gap-1">
              <CommentIcon /> 10 comments
            </span>
          </div>
        </CardContent>
        <CardActions>
          <Button className="!font-bold !text-[#737373]" size="small">
            Learn More{" "}
            <ChevronRightIcon className="text-[#B73225] text-[20px]" />
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default BlogCard;
