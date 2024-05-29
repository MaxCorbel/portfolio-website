'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaceSmileIcon } from '@heroicons/react/24/solid';

type NavLink = {
  id: number,
  href: string,
  title: string,
}

const links = [
  {
    id: 1,
    href: '/about',
    title: 'About'
  },
  {
    id: 2,
    href: '/contact',
    title: 'Contact',
  },
  {
    id: 3,
    href: '/testing',
    title: 'Testing',
  }
];

export default function NavBar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="flex justify-between items-center w-full h-24 px-4 bg-black text-white sticky nav shadow-2xl">
      
      {/* HOME BUTTON */}
      <div className="flex-none md:flex-1">
        <Link href="/">
          <FaceSmileIcon className="h-10 w-10 rotate-[20deg] hover:scale-105 hover:text-fuchsia-500 duration-200" />
        </Link>
      </div>

      {/* TITLE */}
      <div className="flex-auto md:flex-1 text-center">
        <h1 className="font-inter font-medium text-5xl bg-clip-text text-transparent bg-gradient-to-br from-fuchsia-500 via-violet-500 to-blue-500">Max Corbel</h1>
      </div>

      {/* NAV BUTTONS */}
      <div className="hidden md:flex md:flex-1 justify-end">
        <ul className="flex flex-row">
          {links.map((link: NavLink) => (
            <li
              key={link.id}
              className="nav-links px-4 cursor-pointer capitalize font-medium hover:scale-105 hover:text-fuchsia-500 duration-200 link-underline"
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* TOGGLE NAVBAR BUTTON FOR SMALL SCREEN */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden hover:scale-105 hover:text-fuchsia-500 duration-200"
      >
        {nav ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
      </div>

      {/* NAVBAR FOR SMALL SCREEN */}
      {nav && (
        <ul className="md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-fuchsia-500 via-violet-500 to-blue-500 text-white">
          {links.map((link: NavLink) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:text-fuchsia-500 duration-200"
            >
              <Link onClick={() => setNav(!nav)} href={link.href}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}