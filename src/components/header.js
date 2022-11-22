import React from "react";

const Header = ({ user }) => {
  console.log(user);
  return (
    <div>
      <div className="bg-white ">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <header className="flex justify-between items-center py-4">
            {/* logo - start */}
            <a
              href="/"
              className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
              aria-label="logo"
            >
              <svg
                width={95}
                height={94}
                viewBox="0 0 95 94"
                className="w-6 h-auto text-indigo-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
              </svg>
              MOM EXPERTS
            </a>
            {/* logo - end */}
            {/* nav - start */}
            <nav className="hidden lg:flex gap-12">
              <a href="#" className="text-indigo-500 text-lg font-semibold">
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
              >
                About
              </a>
            </nav>
            {/* nav - end */}
            {/* buttons - start */}
            <a
              href="/register"
              className="hidden lg:inline-block bg-blue-600 hover:bg-blue-700 focus-visible:ring ring-indigo-800 text-white active:text-black text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
             {user ?` Welcome Back ${user?.name} ` :  'Register Now'}
            </a>
            <button
              type="button"
              className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Menu
            </button>
            {/* buttons - end */}
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
