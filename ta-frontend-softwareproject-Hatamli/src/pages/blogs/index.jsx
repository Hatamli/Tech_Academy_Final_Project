import RouteHead from "../../components/navbar/RouteHead";
import blog1 from "../../assets/images/unsplash_1-uaH3H8bNk.png";
import blog2 from "../../assets/images/unsplash_dEGu-oCuB1Y.png";
import blog3 from "../../assets/images/unsplash_hHdHCfAifHU.png";
import blog4 from "../../assets/images/unsplash_ruJm3dBXCqw.png";
import blog5 from "../../assets/images/unsplash_YZyYSeVQGmM.png";
import blog6 from "../../assets/images/unsplash_tVEqStC2uz8.png";
import React, { lazy, Suspense } from "react";

const BlogCard = lazy(() => import("../../components/cards/BlogCard"));
const BlogFooter = lazy(() => import("../../components/footer/BlogFooter"));

const BlogsPage = () => {
  return (
    <div>
      <RouteHead main={"The Blog"} additional={"LEARN WITH US"} page={"Blog"} />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="max-w-[1100px] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-20 pt-14 mb-28">
          <div className="col-span-1 max-md:flex max-md:justify-center">
            <BlogCard img={blog1} />
          </div>
          <div className="col-span-1 max-md:flex max-md:justify-center">
            <BlogCard img={blog2} />
          </div>
          <div className="col-span-1 max-md:flex max-md:justify-center">
            <BlogCard img={blog3} />
          </div>
          <div className="col-span-1 max-md:flex max-md:justify-center">
            <BlogCard img={blog4} />
          </div>
          <div className="col-span-1 max-md:flex max-md:justify-center">
            <BlogCard img={blog5} />
          </div>
          <div className="col-span-1 max-md:flex max-md:justify-center">
            <BlogCard img={blog6} />
          </div>
        </div>
      </Suspense>
      <div className="bg-[#2A7CC7] pt-20 pb-16">
        <Suspense fallback={<div>Loading...</div>}>
          <BlogFooter />
        </Suspense>
      </div>
    </div>
  );
};

export default BlogsPage;
