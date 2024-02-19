import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import body from "../../assets/images/Frame 39.png";
import testimonials from "../../assets/images/testimonial-user-cover.png";
import image2 from "../../assets/images/hight.png";
import image1 from "../../assets/images/image1.png";
import React, { lazy, Suspense } from "react";

const BlogCard = lazy(() => import("../../components/cards/BlogCard"));
const BlogContent = lazy(() => import("../../components/cards/BlogContent"));
const BlogFooter = lazy(() => import("../../components/footer/BlogFooter"));
const MediaControlCard = lazy(() =>
  import("../../components/cards/ArticleFooterCard")
);

const ArticlePage = () => {
  return (
    <div>
      <div className="mt-16 text-center">
        <p className="text-[#252B42] text-[14px] font-libre text-center">
          Home{" "}
          <span className="text-[16px] text-[#BDBDBD]">
            <ChevronRightIcon />
          </span>{" "}
          Blog
        </p>
        <p className="text-[#B73225] font-libre text-[17px] font-bold mt-6">
          TUTORIAL
        </p>
        <h2 className="font-abril text-[44px] font-bold text-[#252B42] mt-3">
          Why is Figma crashing?
        </h2>
        <p className="text-[#737373] text-[17px] font-bold font-libre mt-3 max-md:px-10">
          We focus on ergonomics and meeting you where you work. <br />
          It's only a keystroke away.
        </p>
      </div>
      <div className="body max-w-[711px] m-auto mt-32">
        <img src={body} alt="" className="w-full" />
        <Suspense fallback={<div>Loading...</div>}>
          <BlogContent
            head={"1 - Temper ENIM consequent"}
            description={`
          Temper ENIM consequent excitation dolor et else desert labor painter 
          excitation venial consequent ex temper. Null labors Lore acute labor Nisei 
          labrum do sent. Labrum elite quiet sent Lore quit. Eu occaecat EU liquid sent 
          Fiat door magma official. ET minim excitation painter dolor Dolores. Dolor ad 
          else acute dolor nostrum quit also met Mollie Fiat elite official. Cilium ENIM 
          dolor labor venial labor in desert sit venial inure ex official.
            
          ###
          ENIM null voltage liquid door et ConnectEDU cilium est. Cuppa nostrum Nisei sent voltage ID. Else ConnectEDU sit UT reprehended desert labrum minim null et.Duis consequent met labors non acute elite ad cilium dolor inure ex ENIM excitation. Painter labors occaecat elite ex liquid quit Nisei official minim labor liquid official sit UT. Ali quip Nisei commodo door met cupidity UT magma venial magma door adipisicing painter. 
            
          `}
          />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <BlogContent
            head={"1 - Temper ENIM consequent"}
            description={`
          Temper ENIM consequent excitation dolor et else desert labor painter 
          excitation venial consequent ex temper. Null labors Lore acute labor Nisei 
          labrum do sent. Labrum elite quiet sent Lore quit. Eu occaecat EU liquid sent 
          Fiat door magma official. ET minim excitation painter dolor Dolores. Dolor ad 
          else acute dolor nostrum quit also met Mollie Fiat elite official. Cilium ENIM 
          dolor labor venial labor in desert sit venial inure ex official.
          ###
          ENIM null voltage liquid door et ConnectEDU cilium est. Cuppa nostrum Nisei sent voltage ID. Else ConnectEDU sit UT reprehended desert labrum minim null et.Duis consequent met labors non acute elite ad cilium dolor inure ex ENIM excitation. Painter labors occaecat elite ex liquid quit Nisei official minim labor liquid official sit UT. Ali quip Nisei commodo door met cupidity UT magma venial magma door adipisicing painter. 
          ###
          Temper ENIM consequent excitation dolor et else desert labor painter 
          excitation venial consequent ex temper. Null labors Lore acute labor Nisei 
          labrum do sent. Labrum elite quiet sent Lore quit. Eu occaecat EU liquid sent 
          Fiat door magma official. ET minim excitation painter dolor Dolores. Dolor ad 
          else acute dolor nostrum quit also met Mollie Fiat elite official. Cilium ENIM 
          dolor labor venial labor in desert sit venial inure ex official.
          `}
          />
        </Suspense>

        <h3 className="font-montserrat text-[24px] font-bold py-8 border-t-2 border-b-2 mt-8 mb-20 max-md:hidden">
          Nam libero temp ore, cum solute obis est legend option clique Nikhil
          imp edit quo minus id quo Maxime place at facere possums,
        </h3>
      </div>
      <div className="bg-[#FAFAFA] py-20 max-lg:px-10 max-md:mt-10">
        <div className="max-w-[1100px] m-auto justify-between grid grid-cols-5 gap-10 lg:flex items-center">
          <div className="max-w-[245px] max-h-[245px] rounded-full overflow-hidden max-lg:col-span-2">
            <img src={testimonials} alt="" className="w-full h-full" />
          </div>
          <div className="max-w-[800px] max-lg:col-span-3">
            <h3 className="font=montserrat font-bold text-[#252B42] text-[24px]">
              Kevin William
            </h3>
            <p
              className="font-libre text-[#737373] mt-3"
              style={{ letterSpacing: ".2px" }}
            >
              Ali qua id Fiat nostrum inure ex door ea quit id quit ad et. Sent
              quit else painter door desert Mollie Dolores cilium minim temper
              ENIM.{" "}
              <span className="max-lg:hidden">
                Elite acute inure temper cupidity incident sent desert UT
                voltage acute id desert Nisei. Ali qua id Fiat nostrum inure ex
                door ea quit id quit ad et. Sent quit else painter door desert
                Mollie Dolores cilium minim temper ENIM. Elite acute inure
                temper cupidity incident sent desert UT voltage acute id desert
                Nisei.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="pt-20 pb-10">
        <h2 className="font-abril text-[44px] text-center">Featured Posts</h2>
        <div className="hidden sm:grid md:grid-cols-2 max-w-[1050px] max-md:px-10 m-auto gap-8 mt-10">
          <Suspense fallback={<div>Loading...</div>}>
            <MediaControlCard image={image1} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <MediaControlCard image={image2} />
          </Suspense>
        </div>
        <div className="hidden max-sm:grid grid-cols-1 max-md:px-10 gap-8 mt-10">
          <div className="flex justify-center">
            <Suspense fallback={<div>Loading...</div>}>
              <BlogCard img={image1} />
            </Suspense>
          </div>
          <div className="flex justify-center">
            <Suspense fallback={<div>Loading...</div>}>
              <BlogCard img={image2} />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="bg-[#2A7CC7] pt-20 pb-16">
        <Suspense fallback={<div>Loading...</div>}>
          <BlogFooter />
        </Suspense>
      </div>
    </div>
  );
};

export default ArticlePage;
