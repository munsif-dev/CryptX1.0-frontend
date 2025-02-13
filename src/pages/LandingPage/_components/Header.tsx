import React from "react";
import { Link } from "react-router-dom"; // Use react-router-dom for routing

type HeaderProps = object;

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="bg-purple-100">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link
              to="#"
              className="text-teal-600 flex items-center justify-center"
            >
              <img
                src="/"
                alt="Logo"
                width={56} // corresponds to "w-14" in Tailwind (14 * 4 = 56)
                height={56} // corresponds to "h-14" in Tailwind (14 * 4 = 56)
              />
              <div className="w-auto text-[#894799] text-lg font-extrabold font-['Montserrat']">
                Project Name
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    to="/dashboard"
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    Get Started
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    Projects
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                to="/sign-in"
                className="rounded-full bg-red-300 px-5 py-2.5 text-sm font-medium text-white shadow"
              >
                Login
              </Link>

              <div className="hidden sm:flex">
                <Link
                  to="/sign-up"
                  className="rounded-full bg-pink-300 px-5 py-2.5 text-sm font-medium text-light-2"
                >
                  Register
                </Link>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
