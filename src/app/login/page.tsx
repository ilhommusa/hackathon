import React from "react";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="w-[400px] mx-auto">
          <h1 className="text-center font-semibold mb-4">Welcome back</h1>

          <form method="post" className="space-y-4">
            <div>
              <input
                type="email"
                required={true}
                className="form-control form-control w-full border bg-gray-50 rounded-lg py-2 px-5"
                id="email"
                name="email"
                placeholder="Your email address..."
              />
            </div>

            <div className="grid gap-2">
              <button className="btn btn-primary bg-black py-2 px-5 w-full text-white rounded-full hover:bg-black/80 duration-150">
                Log in
              </button>

              <div className="w-full space-x-3 text-center mt-3 items-center">
                <span>Don't have an account?</span>
                <a
                  className="text-center w-full text-blue-500"
                  href="/signup"
                >
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </div>

        <div className="fixed left-4 top-4">
          <a
            className="gap-1 border bg-gray-100 py-2 px-5 rounded-full text-gray-600 text-md btn btn-gray"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path
                fill-rule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Back
          </a>
        </div>
      </div>
    </div>
  );
}
