"use client";
import React, { useState } from "react";

export default function SignUp() {
  const [plan, setPlan] = useState<string>("monthly");

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.url.value);
    console.log(e.target.plan.value);
  };

  return (
    <div>
      <div className="h-screen w-full ">
        <div className="h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-100 scrollbar-track-transparent">
          <div className="h-screen w-full max-w-lg mx-auto flex items-center py-20 px-4">
            <div className="w-full lg:max-w-md mx-auto">
              <h1 className="text-center text-2xl font-semibold mb-4">
                Submit
              </h1>

              <form
                method="post"
                className="space-y-3"
                data-turbo="false"
                onSubmit={onSubmit}
              >
                <div>
                  <input
                    className="form-control"
                    type="text"
                    name="url"
                    placeholder="Tool URL..."
                    required={true}
                  />
                </div>

                <div>
                  <input
                    id="email"
                    className="form-control"
                    type="text"
                    name="email"
                    placeholder="Your email address..."
                    required={true}
                  />
                </div>

                <div className="p-4 border rounded-xl">
                  <div className="mb-4">Price</div>
                  <div data-controller="select">
                    <div className="relative group mb-2">
                      <div className="absolute -top-2.5 left-4">
                        <div className="h-5 px-2 rounded-full bg-purple-500 text-white text-xs flex items-center">
                          Early Bird Deal
                        </div>
                      </div>
                      <label data-action="click->select#clicked">
                        <input
                          type="radio"
                          className="hidden peer"
                          name="plan"
                          value="monthly"
                          checked={plan === "monthly"}
                          onChange={() => setPlan("monthly")}
                        />
                        <div className="cursor-pointer block p-4 rounded-xl border peer-checked:border-purple-500">
                          <div className="flex space-x-1 items-baseline mb-0.5">
                            <span className="">
                              <span className="text-gray-400 line-through">
                                $5.99
                              </span>
                            </span>
                            <span className="text-gray-500">/</span>
                            <span className="text-gray-500">month</span>
                          </div>
                          <div className="text-xs text-gray-500">
                            * $1 first month, then $5.99/month.
                          </div>
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 right-4 rounded-full border peer-checked:border-purple-500 w-5 h-5 flex items-center justify-center peer-checked:bg-purple-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="text-white w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </label>
                    </div>
                    <div className="relative group">
                      <label data-action="click->select#clicked">
                        <input
                          type="radio"
                          className="hidden peer"
                          name="plan"
                          value="annual"
                          checked={plan === "annual"}
                          onChange={() => setPlan("annual")}
                        />
                        <div className="cursor-pointer block p-4 rounded-xl border peer-checked:border-purple-500">
                          <div className="flex space-x-1 items-baseline mb-0.5">
                            <span className="">
                              $59.99{" "}
                              <span className="text-gray-400 line-through">
                                $69.99
                              </span>
                            </span>
                            <span className="text-gray-500">/</span>
                            <span className="text-gray-500">year</span>
                          </div>
                          <div className="text-xs text-gray-500">
                            * You save $10.
                          </div>
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 right-4 rounded-full border peer-checked:border-purple-500 w-5 h-5 flex items-center justify-center peer-checked:bg-purple-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="text-white w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border">
                  <h3 className="mb-2">Checklist</h3>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-3.5 h-3.5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>

                      <p className="text-sm text-gray-500">
                        Your tool is functional
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-3.5 h-3.5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>

                      <p className="text-sm text-gray-500">
                        It delivers what it promises
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-3.5 h-3.5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>

                      <p className="text-sm text-gray-500">
                        Is not an infoproduct
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-2">
                  <button type="submit" className="btn btn-primary w-full">
                    Next
                  </button>

                  <a className="hidden btn btn-gray w-full" href="/login">
                    Log in
                  </a>
                </div>
              </form>
            </div>

            <div className="fixed left-4 top-4">
              <a className="btn btn-gray" href="/">
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
      </div>
    </div>
  );
}
