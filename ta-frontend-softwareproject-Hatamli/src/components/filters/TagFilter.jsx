export const TagFilter = ({ tags }) => (
    <ul className="flex max-md:w-full max-md:flex-row max-lg:flex-col !flex-wrap lg:max-w-[190px] w-max gap-4 font-montserrat font-bold text-[14px] text-[#B73225] cursor-pointer">
      {tags.map((tag, index) => (
        <li key={index} className="py-[10px] px-[15px] rounded-[5px] border border-[#B73225] w-max">
          {tag}
        </li>
      ))}
    </ul>
  );