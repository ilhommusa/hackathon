import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="h-16 max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6 mb-8">
        <div className="flex items-center space-x-4">
          <a className="shrink-0" href="/">
            Ilkhom Tool&apos;s
          </a>

          {/* <div className="hidden lg:flex items-center space-x-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>

            <p className="text-sm leading-none text-gray-400">125 spots left</p>
          </div> */}
        </div>

        <div className="flex items-center space-x-2 lg:space-x-4">
          <a className="text-sm text-gray-500 leading-none" href="/signup">
            Submit
          </a>

          <a className="text-sm text-gray-500 leading-none" href="/my-tools">
            My tools
          </a>

          <a className="text-sm text-gray-500 leading-none" href="/account">
            Account
          </a>

          <a className="text-sm text-gray-500 leading-none" href="/login">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
