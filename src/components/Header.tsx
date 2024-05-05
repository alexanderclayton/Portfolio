import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useTheme } from "../context/ThemeContext";

export const Header = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header
      className={
        !nav
          ? "flex justify-between h-[60px] sm:static font-Quicksand fixed w-full bg-primary-blue sm:bg-transparent"
          : "bg-primary-blue flex justify-between font-Quicksand fixed w-full"
      }
    >
      <h1 className="pl-4 text-4xl bg-gradient-to-r from-accent to-primary text-transparent bg-clip-text font-SIL font-bold">
        Alex Clayton
      </h1>
      <div className="sm:w-[40%]">
        <div className="hidden sm:flex pt-3">
          <ul className="flex w-full justify-around">
            <li>
              <button
                className="px-4 py-1 border border-text rounded-full text-xl text-text"
                onClick={toggleTheme}
              >
                {!darkMode ? "Dark" : "Light"}
              </button>
            </li>
            <li className="px-4 py-1 text-xl text-text hover:bg-accent rounded-full hover:cursor-pointer">
              <a href="/#about">About</a>
            </li>
            <li className="px-4 py-1 text-xl text-text hover:bg-accent rounded-full hover:cursor-pointer">
              <a href="/#projects">Projects</a>
            </li>
            <li className="px-4 py-1 text-xl text-text hover:bg-accent rounded-full hover:cursor-pointer">
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
        {!nav ? (
          <AiOutlineMenu
            size={50}
            className="hover:cursor-pointer z-10 sm:hidden mr-4 pt-2"
            onClick={handleNav}
          />
        ) : (
          <AiOutlineClose
            size={50}
            className="hover:cursor-pointer z-10 sm:hidden mr-4 pt-2"
            onClick={handleNav}
          />
        )}
      </div>
      <div
        className={
          nav
            ? "z-10 fixed left-0 top-12 w-full max-h-[calc(100vh - 60px)] bg-primary-blue translate-x-0 transition duration-500 ease-in-out"
            : "z-10 fixed left-[-100%] translate-x-[-100%]"
        }
      >
        <div className="w-full h-full flex flex-col items-center pb-32">
          <a
            onClick={handleNav}
            className="text-4xl px-3 my-20 w-full text-center hover:bg-gradient-to-r from-primary-blue via-primary-purple to-primary-blue hover:text-white"
            href="/#about"
          >
            About Me
          </a>
          <a
            onClick={handleNav}
            className="text-4xl px-3 my-20 w-full text-center hover:bg-gradient-to-r from-primary-blue via-primary-purple to-primary-blue hover:text-white"
            href="/#projects"
          >
            Projects
          </a>
          <a
            onClick={handleNav}
            className="text-4xl px-3 my-20 w-full text-center hover:bg-gradient-to-r from-primary-blue via-primary-purple to-primary-blue hover:text-white"
            href="/#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};
