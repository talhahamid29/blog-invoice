import { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";

const VerticalNavbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => {
    if (isDrawerOpen) {
      toggleDrawer();
    }
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const drawerStyle = {
    width: isDrawerOpen ? "100%" : "30%",
    transition: "width 0.3s ease-in-out",
  };

  return (
    <>
      <div
        style={{ width: 70, height: 54 }}
        className={`fixed top-0 h-full ${
          isDrawerOpen ? "w-200" : "w-30"
        } bg-white transition-width overflow-x-hidden flex flex-col shadow`}
      >
        <button
          className="absolute top-4 left-4 text-2xl text-black"
          onClick={toggleDrawer}
        >
          ☰
        </button>
      </div>
      <div className="flex flex-col w-24 min-h-screen " style={drawerStyle}>
        {isDrawerOpen && (
          <div className="fixed card p-4 bg-white w-54 h-16">
            <h1 className=" text-2xl font-bold ml-11 text-gray-600">
              <a href="/oxcytech">Oxcytech</a>
              <button
                className="top-4 left-4 text-2xl text-black ml-4"
                onClick={toggleDrawer}
              >
                ☰
              </button>
            </h1>
          </div>
        )}
        <SimpleBar
          className="bg-white mt-8 shadow "
          style={{
            width: isDrawerOpen ? 230 : 70,
            height: "100vh",
            overflowX: "hidden",
            scrollbarWidth: "thin",
            scrollbarColor: "gray white",
          }}
        >
          <div className="flex items-center hover:bg-gray-900 hover:text-white mt-20 mb-1000">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 ml-5 text-gray-600"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>

              <a
                href="/dashboard"
                className="py-2 px-7 block rounded transition duration-300 text-gray-500 hover:text-white"
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "0.9375rem",
                }}
              >
                Dashboard
              </a>
            </div>
          </div>

          <div className="flex items-center hover:bg-gray-900 hover:text-white">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 ml-5 text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z"
                  clipRule="evenodd"
                />
              </svg>

              <a
                href="/table"
                className="py-2 px-7 block rounded transition duration-300 text-gray-500  hover:text-white"
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "0.9375rem",
                }}
              >
                Table
              </a>
            </div>
          </div>

          <div className="flex items-center hover:bg-gray-900 hover:text-white">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 ml-5 text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z"
                  clipRule="evenodd"
                />
                <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
              </svg>

              <a
                href="/form"
                className="py-2 px-7 block rounded transition duration-300 text-gray-500  hover:text-white"
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "0.9375rem",
                }}
              >
                Form
              </a>
            </div>
          </div>

          <div className="flex items-center hover:bg-gray-900 hover:text-white">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 ml-5 text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clipRule="evenodd"
                />
              </svg>

              <a
                href="/calendar"
                className="py-2 px-7 block rounded transition duration-300 text-gray-500  hover:text-white"
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "0.9375rem",
                }}
              >
                Calendar
              </a>
            </div>
          </div>

          <div className="flex items-center hover:bg-gray-900 hover:text-white">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 ml-5 text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                  clipRule="evenodd"
                />
                <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
              </svg>

              <a
                href="/signup"
                className="py-2 px-7 block rounded transition duration-300 text-gray-500 hover:text-white"
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "0.9375rem",
                }}
              >
                Register
              </a>
            </div>
          </div>

          <div className="flex items-center hover:bg-gray-900 hover:text-white">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 ml-5 text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                  clipRule="evenodd"
                />
                <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
              </svg>

              <a
                href="/auth"
                className="py-2 px-7 block rounded transition duration-300 text-gray-500  hover:text-white"
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "0.9375rem"
                }}
              >
                Login
              </a>
            </div>
          </div>

          <div className="flex items-center hover:bg-gray-900 hover:text-white">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 ml-5 text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>

              <a
                href="/faq"
                className="py-2 px-7 block rounded transition duration-300 text-gray-500  hover:text-white"
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "0.9375rem",
                }}
              >
                FAQ
              </a>
            </div>
          </div>

          <div className="flex items-center hover:bg-gray-900 hover:text-white">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 ml-5 text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>

              <a
                href="/useraccount"
                className="py-2 px-7 block rounded transition duration-300 text-gray-500  hover:text-white"
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "0.9375rem",
                }}
              >
                User Account
              </a>
            </div>
          </div>

          <div className="flex items-center hover:bg-gray-900 hover:text-white">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 ml-5 text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clipRule="evenodd"
                />
              </svg>

              <a
                href="/role&permissions"
                className="py-2 px-7 block rounded transition duration-300 text-gray-500  hover:text-white"
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "0.9375rem",
                }}
              >
                Roles&Permissions
              </a>
            </div>
          </div>

          <div className="flex items-center hover:bg-gray-900 hover:text-white">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 ml-5 text-gray-600"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
              </svg>

              <a
                href="/editor"
                className="py-2 px-7 block rounded transition duration-300 text-gray-500 hover:text-white"
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "0.9375rem",
                }}
              >
                Editors
              </a>
            </div>
          </div>

          <div className="flex items-center hover:bg-gray-900 hover:text-white">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 ml-5 text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>

              <a
                href="/kanban"
                className="py-2 px-7 block rounded transition duration-300 text-gray-500  hover:text-white"
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "0.9375rem",
                }}
              >
                Kanban
              </a>
            </div>
          </div>

          <div className="flex items-center hover:bg-gray-900 hover:text-white">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 ml-5 text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>

              <a
                href="/userprofile"
                className="py-2 px-7 block rounded transition duration-300 text-gray-500  hover:text-white"
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "0.9375rem",
                }}
              >
                User Profile
              </a>
            </div>
          </div>

          <div className="flex items-center hover:bg-gray-900 hover:text-white">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 ml-5 text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M17.303 5.197A7.5 7.5 0 006.697 15.803a.75.75 0 01-1.061 1.061A9 9 0 1121 10.5a.75.75 0 01-1.5 0c0-1.92-.732-3.839-2.197-5.303zm-2.121 2.121a4.5 4.5 0 00-6.364 6.364.75.75 0 11-1.06 1.06A6 6 0 1118 10.5a.75.75 0 01-1.5 0c0-1.153-.44-2.303-1.318-3.182zm-3.634 1.314a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68z"
                  clipRule="evenodd"
                />
              </svg>

              <a
                href="/drag&drop"
                className="py-2 px-7 block rounded transition duration-300 text-gray-500 hover:text-white"
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "0.9375rem",
                }}
              >
                Drag & Drop
              </a>
            </div>
          </div>
        </SimpleBar>
      </div>

      <div
        style={{ height: 60, width: isDrawerOpen ? 230 : 70 }}
        className={`fixed bottom-0 left-0 h-full p-4 bg-white shadow`}
      >
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 ml-5 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 21.35l1.428-2.142M7.037 2.37A10.05 10.05 0 0 1 12 2c5.523 0 10 4.477 10 10 0 5.524-4.477 10-10 10-4.264 0-7.92-2.68-9.32-6.455a.998.998 0 0 1 .252-1.096l1.935-1.936a2 2 0 0 1 2.81.005l2.781 2.781a1 1 0 0 1 0 1.415L5.015 20.986a1 1 0 0 1-1.414 0L1.218 18.78a1 1 0 0 1 0-1.415l8-8a.997.997 0 0 1 1.414 0l3.274 3.274a1 1 0 0 1 0 1.414l-1.373 1.373a2 2 0 0 1-2.828 0l-2.78-2.78a1 1 0 0 1-.005-1.415L7.036 2.37z"
            />
          </svg>
          <a
            href="/"
            className="py-2 px-7 block rounded transition duration-300 text-gray-700"
            style={{
              fontFamily: "sans-serif",
              fontSize: "0.9375rem",
              color: "rgba(47, 43, 61, 0.68)",
            }}
          >
            {isDrawerOpen ? (
              "Logout"
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 "
                  style={{ marginLeft: -45 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 21.35l1.428-2.142M7.037 2.37A10.05 10.05 0 0 1 12 2c5.523 0 10 4.477 10 10 0 5.524-4.477 10-10 10-4.264 0-7.92-2.68-9.32-6.455a.998.998 0 0 1 .252-1.096l1.935-1.936a2 2 0 0 1 2.81.005l2.781 2.781a1 1 0 0 1 0 1.415L5.015 20.986a1 1 0 0 1-1.414 0L1.218 18.78a1 1 0 0 1 0-1.415l8-8a.997.997 0 0 1 1.414 0l3.274 3.274a1 1 0 0 1 0 1.414l-1.373 1.373a2 2 0 0 1-2.828 0l-2.78-2.78a1 1 0 0 1-.005-1.415L7.036 2.37z"
                  />
                </svg>
              </>
            )}
          </a>
        </div>
      </div>
    </>
  );
};

export default VerticalNavbar;


