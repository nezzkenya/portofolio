import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Themecontext } from "./context/ThemeContext";
import { IoMdSunny } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Navbar() {
  function IconClose(props) {
    return (
      <svg
        className=" text-slate-400"
        viewBox="0 0 1024 1024"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
      </svg>
    );
  }
  function IconMenuRight(props) {
    return (
      <svg
        className="  text-slate-400"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        {...props}
      >
        <path
          fill="gray"
          d="M22 18.005c0 .55-.446.995-.995.995h-8.01a.995.995 0 010-1.99h8.01c.55 0 .995.445.995.995zM22 12c0 .55-.446.995-.995.995H2.995a.995.995 0 110-1.99h18.01c.55 0 .995.446.995.995zM21.005 6.99a.995.995 0 000-1.99H8.995a.995.995 0 100 1.99h12.01z"
        />
      </svg>
    );
  }

  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useContext(Themecontext);
  return (
    <div className="flex justify-between items-centre mb-6">
      <div className="flex gap-4 items-center justify-center ">
        <NavLink to="/">
          <div>
            <h1 className="font-sans overline text-xl md:text-2xl sm:text-xl xl:text-3xl font-bold dark:text-slate-50 m-auto pb-6">
              NEHEMIAH <span className="text-blue-700">MOGAMBI</span>
            </h1>
          </div>
        </NavLink>
      </div>
      <div className="hidden mx:flex gap-x-5">
        <AnchorLink href="#">
          <div>
            <button className=" rounded-3xl px-3 py-1 font-righteous dark:text-slate-50 border-2 text-xs  lg:text-lg h-10">
              Home
            </button>
          </div>
        </AnchorLink>
        <AnchorLink href="#skills">
          <div>
            <button className=" rounded-3xl px-3 py-1 font-righteous dark:text-slate-50 border-2 text-xs  lg:text-lg h-10">
              my skills
            </button>
          </div>
        </AnchorLink>
        <AnchorLink href="#projects">
          <div>
            <button className=" rounded-3xl px-3 py-1 font-righteous dark:text-slate-50 border-2 text-xs  lg:text-lg h-10">
              projects
            </button>
          </div>
        </AnchorLink>
        <AnchorLink href="#contact">
          <button className="w-full rounded-3xl px-3 py-1 font-righteous dark:text-slate-50 border-2 text-xs  lg:text-lg h-10">
            Contact
          </button>
        </AnchorLink>
      </div>
      <div className=" mx:hidden">
        {open && (
          <div className=" shadow-1 absolute right-4 top-16 border-4 p-4 rounded-lg  dark:border-slate-200 bg-slate-900 text-slate-50">
            <div className="grid gap-2 w-full">
              <AnchorLink href="#">
                <div>
                  <button className=" w-full rounded-3xl px-3 py-1 font-righteous dark:text-slate-50 border-2 text-xs  lg:text-lg h-10">
                    Home
                  </button>
                </div>
              </AnchorLink>
              <AnchorLink href="#skills">
                <div>
                  <button className=" rounded-3xl px-3 py-1 font-righteous dark:text-slate-50 border-2 text-xs  lg:text-lg h-10">
                    Skills
                  </button>
                </div>
              </AnchorLink>
              <AnchorLink href="#projects">
                <button className="w-full rounded-3xl px-3 py-1 font-righteous dark:text-slate-50 border-2 text-xs  lg:text-lg h-10">
                  projects
                </button>
              </AnchorLink>
              <AnchorLink href="#contact">
                <button className="w-full rounded-3xl px-3 py-1 font-righteous dark:text-slate-50 border-2 text-xs  lg:text-lg h-10">
                  Contact
                </button>
              </AnchorLink>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center gap-4 pb-8">
        <div className="h-8 w-8 dark:bg-transparent bg-black rounded-full flex justify-center items-center">
          {theme === "dark" ? (
            <FaRegMoon
              onClick={() => setTheme("light")}
              className="text-white h-5 w-5  bg-transparent"
            />
          ) : (
            <IoMdSunny
              onClick={() => setTheme("dark")}
              className="text-white h-5 w-5 bg-transparent"
            />
          )}
        </div>
        <div>
          <button
            className="relative "
            onClick={() => {
              if (!open) {
                setOpen(!false);
              } else {
                setOpen(false);
              }
            }}
          >
            <div className="ring-1 rounded-full p-2 mx:hidden">
              {!open ? IconMenuRight() : IconClose()}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
