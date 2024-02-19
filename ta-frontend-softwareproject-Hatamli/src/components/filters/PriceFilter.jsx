import RedButton from "../buttons/RedButton";

export const PriceFilter = () => (
  <>
    <input type="range" className="accent-[#B73225]" />
    <div className="flex gap-4">
      <div className="border border-[#E6E6E6] bg-[#F9F9F9] rounded-[5px] py-4 px-5">
        0
      </div>
      <div className="border border-[#E6E6E6] bg-[#F9F9F9] rounded-[5px] py-4 px-5">
        1000
      </div>
    </div>
    <RedButton icon={null} text={"Filter"} />
  </>
);
