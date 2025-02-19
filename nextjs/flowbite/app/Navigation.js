"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" as={Link} active={usePathname() === '/'}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about" as={Link} active={usePathname() === '/about'}>
          About
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
