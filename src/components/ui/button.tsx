import React from "react";

type ButtonProps = {
  variation?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  variation = "primary",
  size = "medium",
  onClick,
  children,
  className,
}) => {
  const buttonClasses = `relative font-bold text-xs py-3 px-5 hover:scale-105 duration-200 ${className}`;
  const buttonAfterClasses = `after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:border after:border-primary after:hover:top-1 after:hover:left-1 after:duration-200 after:-z-10`;

  let variationClasses = `bg-primary text-body-dark`;
  switch (variation) {
    case "secondary":
      variationClasses = `bg-white text-body-dark`;
      break;
    case "outline":
      variationClasses = `bg-transparent border border-primary text-primary`;
      break;
    default:
      break;
  }

  const finalClasses = `${buttonClasses} ${buttonAfterClasses} ${variationClasses}`;

  return (
    <button className={finalClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
