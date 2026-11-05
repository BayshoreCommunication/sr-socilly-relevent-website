import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  as: Component = "div",
}) => {
  return (
    <Component
      className={`max-w-[1320px] mx-auto w-full px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Component>
  );
};

export default Container;

