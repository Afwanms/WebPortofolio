"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Project", href: "/projects" },
    { name: "Experience", href: "/experience" },
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