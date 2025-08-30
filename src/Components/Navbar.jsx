import React, { useEffect, useState } from "react";
import logo from "../assets/Imgs/logo-real estate.png";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      scrollY >= 100 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    console.log(toggle);
    setToggle(!toggle);
  };

  return (
    <>
      <nav
        className={`${
          scroll ? "bg-gradient-to-b from-slate-950" : "bg-transparent"
        }   text-white fixed left-0 right-0 top-0 z-50  transition-all duration-500 ease-in-out`}
      >
        <div className="container w-full flex justify-between items-center py-4 px-4 md:px-0">
          <h2>
            <a href="/">
              <img src={logo} alt="Logo Home Page of Real Estate" />
            </a>
          </h2>

          {/* Menu burger */}
          <div onClick={toggleMenu} className="md:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>

          {toggle && (
            <div className="text-white text-center absolute top-[70px] left-0 w-full bg-slate-800 flex flex-col items-center gap-5 md:static md:bg-transparent py-4 md:py-0 md:flex-row md:ms-auto md:w-[65%] md:justify-between transition-all duration-500 ease-in-out ">
              <ul className="space-y-2 md:space-y-0 md:flex md:gap-4">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Listings </a>
                </li>
                <li>
                  <a href="/">Members </a>
                </li>
                <li>
                  <a href="/">Blog </a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>

              <ul className="space-y-2 md:space-y-0 md:flex md:gap-4">
                <li className="flex items-center gap-2  text-nowrap ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  +68 685 88666
                </li>

                <li>
                  <a
                    className="block border p-2 rounded-full text-nowrap hover:bg-[#E7C873] transition duration-300 ease-in-out"
                    href="/"
                  >
                    Add Property
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* Menu desktop */}
          <div className="max-md:hidden text-white text-center absolute top-[70px] left-0 w-full bg-slate-800 flex flex-col items-center gap-5 md:static md:bg-transparent py-4 md:py-0 md:flex-row md:ms-auto md:w-[65%] md:justify-between transition-all duration-500 ease-in-out ">
            <ul className="space-y-2 md:space-y-0 md:flex md:gap-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Listings </a>
              </li>
              <li>
                <a href="/">Members </a>
              </li>
              <li>
                <a href="/">Blog </a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>

            <ul className="space-y-2 md:space-y-0 md:flex md:gap-4">
              <li className="flex items-center gap-2  text-nowrap ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                +68 685 88666
              </li>

              <li>
                <a
                  className="block border p-2 rounded-full text-nowrap hover:bg-[#E7C873] transition duration-300 ease-in-out"
                  href="/"
                >
                  Add Property
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
