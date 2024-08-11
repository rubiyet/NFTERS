import Button from "@/components/common/others/Button";
import { IoFilter } from "react-icons/io5";

const CategoryFilter = ({ categories }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between mt-9 w-full text-sm leading-none max-md:mr-1.5 max-md:max-w-full">
      <div className="flex flex-wrap gap-3 items-start my-auto text-black max-md:max-w-full">
        {categories.map((category, index) => (
          <Button variant="primary" key={index}>
            {category}
          </Button>
        ))}
      </div>
      <Button variant="catagory">
        <IoFilter className="w-6 h-6" />
        All Filters
      </Button>
    </div>
  );
};

export default CategoryFilter;
