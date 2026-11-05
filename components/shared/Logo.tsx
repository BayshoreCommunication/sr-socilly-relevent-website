import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  width = 220,
  height = 55,
  priority = true,
}) => {
  return (
    <Image
      src="/images/logo/SR-promo-Logo-1.png"
      alt="Socially Relevant Promo Logo"
      width={width}
      height={height}
      priority={priority}
      className={`h-auto w-auto max-h-12 object-contain ${className}`}
    />
  );
};

export default Logo;

