import React from "react";

const BlogContent = ({ head, description }) => {
  return (
    <div className="max-md:px-10">
      <h3 className="font-montserrat text-[24px] font-bold mt-10">{head}</h3>
      <p className="font-libre mt-6">
        {description.split("###").map((desc, index) => (
          <span key={index}>
            {desc}{" "}
            {index < description.split("###").length - 1 && (
              <>
                <br />
                <br />
                <br />
              </>
            )}{" "}
          </span>
        ))}
      </p>
    </div>
  );
};

export default BlogContent;
