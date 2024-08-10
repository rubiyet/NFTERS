const Button = ({ children, variant }) => {
  const baseClasses = "px-8 h-[50px] rounded-full whitespace-nowrap font-dmsans tracking-wider transform transition-all duration-300 ease-in-out";
  
  const variantClasses = {
    primary: "text-white bg-violet-800 text-sm font-bold hover:shadow-md hover:scale-105",
    secondary: "text-violet-800 border-2 border-violet-800 text-sm font-bold",
    tertiary: "text-white bg-blue-700 border-2 border-white text-xs font-normal",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
};

export default Button;