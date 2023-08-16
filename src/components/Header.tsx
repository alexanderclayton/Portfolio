//import//
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export const Header: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header className="flex justify-between h-[60px]">
      <h1 className="text-4xl">A<span className="font-bold">C</span></h1>
      <div>
        <div className="hidden sm:block">
          <ul className="flex">
            <li className="px-4">
              <a href="#about">About</a>
            </li>
            <li className="px-4">
              <a href="#projects">Projects</a>
            </li>
            <li className="px-4">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        {!nav ? (
          <AiOutlineMenu
            size={40}
            className="hover:cursor-pointer z-10 sm:hidden mr-4"
            onClick={handleNav}
          />
        ) : (
          <AiOutlineClose
            size={40}
            className="hover:cursor-pointer z-10 sm:hidden mr-4"
            onClick={handleNav}
          />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-24 w-full max-h-[800px] h-full bg-primary-blue translate-x-0 transition duration-500 ease-in-out"
            : "fixed left-[-100%] translate-x-[-100%]"
        }
      >
        <div className="w-full h-full flex flex-col items-center">
          <a onClick={handleNav} className="text-4xl px-3 my-24" href="#about">
            About Me
          </a>
          <a onClick={handleNav} className="text-4xl px-3 my-24" href="">
            Projects
          </a>
          <a onClick={handleNav} className="text-4xl px-3 my-24" href="">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};
