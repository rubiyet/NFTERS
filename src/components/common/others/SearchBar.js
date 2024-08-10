import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-4 px-4 h-[50px] bg-white border-2 border-zinc-100 rounded-full">
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent border-none outline-none flex-1 font-medium font-dmsans text-[#C0C0C0]"
        aria-label="Search"
      />
      <CiSearch className="text-[#757575] w-6 h-6" />
    </div>
  );
};

export default SearchBar;
