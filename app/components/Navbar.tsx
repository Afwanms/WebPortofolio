"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "WORK", href: "/work" },
    { name: "PROJECT", href: "/projects" },
    { name: "EXPERIENCE", href: "/experience" },
  ];

  return (
    <nav className="navbar">
      <Link href="/" className="navLogo">
        AMS.
      </Link>

      <div className="navLinks">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              href={item.href}
              key={item.name}
              className={isActive ? "active" : ""}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      <Link
        href="/recruiter"
        className={
          pathname.startsWith("/recruiter")
            ? "navRecruiter active"
            : "navRecruiter"
        }
      >
        RECRUITER VIEW
      </Link>
    </nav>
  );
}