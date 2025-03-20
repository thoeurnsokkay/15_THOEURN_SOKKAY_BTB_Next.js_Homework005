"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavbarLink(item) {
  const pathname = usePathname();
  console.log("Pathname", pathname);
  return (
    <>
      <Link
        className={
          "group flex items-center px-2 py-2 text-base font-medium rounded-md bg-indigo-100 text-indigo-700 "
        }
        href={item.href}
      >
        {item.icon}
        {item.label}
      </Link>
    </>
  );
}
