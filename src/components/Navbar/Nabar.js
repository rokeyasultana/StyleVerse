"use client";

import { adminNavOptions, navOptions, styles } from "@/utils";
import { Fragment } from "react";

const isAdminView = false;
const isAuthUser = false;
const user = {
  role: "admin",
};

function NavItems() {
  return (
    <div
      className="items-center justify-between w-full md:flex md:w-auto"
      id="nav-items"
    >
      <ul className="flex flex-xol p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white ">
        {isAdminView
          ? adminNavOptions.map((item) => (
              <li
                className="cursor-pointer block block py-2 pl-3 pr-4 text-gray-900 rounded md:p-01"
                key={item.id}
              >
                {item.label}
              </li>
            ))
          : navOptions.map((item) => (
              <li
                className="cursor-pointer block block py-2 pl-3 pr-4 text-gray-900 rounded md:p-01"
                key={item.id}
              >
                {item.label}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default function Navbar() {
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center cursor-pointer">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
            StyleVerse
            </span>
          </div>
          <div className="flex md:order-2 gap-2">
            {!isAdminView && isAuthUser ? (
              <Fragment>
                <button className="mt-1.5 inline-block px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Account
                </button>
                <button className="mt-1.5 inline-block px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Cart
                </button>
              </Fragment>
            ) : null}
            {user?.role === "admin" ? (
              isAdminView ? (
                <button className={styles.button}>Client View</button>
              ) : (
                <button className={styles.button}>Admin View</button>
              )
            ) : null}
            {isAuthUser ? (
              <button className={styles.button}>Log out</button>
            ) : (
              <button className={styles.button}>Login</button>
            )}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="md:hidden inline-flex items-center p-2 text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 md:hidden hover:bg-gary-100 focus:outline-one focus:ring-2"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <NavItems></NavItems>
        </div>
      </nav>
    </>
  );
}
