'use client';

import React from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaItchIo,
  FaLinkedin,
  FaSpotify,
} from "react-icons/fa6";
import { IconContext } from 'react-icons';

// TODO: Figure out and link my itch.io account to the button below

export default function Footer() {
  return (
    <div className="flex justify-evenly items-center w-full h-24 px-4 bg-black text-white sticky nav">
      <IconContext.Provider value={{ className: "h-8 w-8 hover:animate-spin" }}>
        <a href="https://www.linkedin.com/in/max-corbel-a268991a2">
          <FaLinkedin className="text-[#0077b5]" />
        </a>
        <a href="https://www.github.com/MaxCorbel">
          <FaGithub />
        </a>
        <a href="https://www.itch.io">
          <FaItchIo className="text-[#fa5c5c]"/>
        </a>
        <a href="mailto:maxpcorbel@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://open.spotify.com/user/maxxycorbs7">
          <FaSpotify className="text-[#1db954]"/>
        </a>
      </IconContext.Provider>
    </div>
  )
}

