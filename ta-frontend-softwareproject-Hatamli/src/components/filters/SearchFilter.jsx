import SearchIcon from "@mui/icons-material/Search";

export const SearchFilter = ({onChange}) => (
    <div className="relative">
      <SearchIcon className="absolute top-[10px] left-[10px]" />
      <input
        type="text"
        onChange={(e)=>onChange(e.target.value)}
        className="border border-[#E6E6E6] bg-[#FAFAFA] rounded-[5px] p-2 w-full ps-12"
        placeholder="Search"
      />
    </div>
  );