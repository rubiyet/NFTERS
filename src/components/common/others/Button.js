const Button = ({ children, variant }) => {
  const baseClasses = "px-8 h-[50px] rounded-full whitespace-nowrap font-dmsans hover:shadow-md hover:scale-105 tracking-wider transform transition-all duration-300 ease-in-out";
  
  const variantClasses = {
    primary: "text-white bg-violet-800 text-sm font-bold",
    secondary: "text-violet-800 border-2 border-violet-800 text-sm font-bold",
    tertiary: "text-white bg-blue-700 border-2 border-white text-xs font-normal",
    placeabid: "w-36 text-white bg-violet-800 text-sm font-bold",
    catagory: "flex gap-2.5 justify-center font-bold items-center px-5 py-2.5 text-[#371C87] text-lg font-dmsans bg-zinc-300 bg-opacity-20 rounded-[100px] tracking-normal",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
};

export default Button;