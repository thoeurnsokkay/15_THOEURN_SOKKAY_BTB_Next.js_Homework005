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
          'group flex hover:bg-indigo-100 items-center px-10 py-2 text-base font-medium rounded-md  text-indigo-700 ${ pathname === item.href ? "bg-gray-300 : "bg-none" } '
        }
        href={item.href}
      >
        {item.icon}
        {item.label}
      </Link>
    </>
  );
}
