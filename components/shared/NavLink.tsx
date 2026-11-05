"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItem {
  label: string;
  href: string;
}

interface NavLinkProps {
  item: NavItem;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  item,
  className = "",
  activeClassName = "",
  onClick,
}) => {
  const pathname = usePathname();
  const isActive =
    pathname === item.href ||
    (item.href !== "/" && pathname?.startsWith(item.href));

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`font-lora text-base font-semibold transition-all duration-200 tracking-wide text-[#761318] hover:text-[#4d0c0f] ${
        isActive
          ? `font-bold text-[#550c10] ${activeClassName}`
          : ""
      } ${className}`}
    >
      {item.label}
    </Link>
  );
};

export default NavLink;

