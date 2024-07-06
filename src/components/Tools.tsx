import React from "react";

export default function Tools() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 lg:px-6 mb-6">
        <form method="GET" action="https://1000.tools" data-turbo-stream="">
          <div className="w-full bg-gray-100 rounded-full flex items-center">
            <input
              name="query"
              className="w-full form-control h-12 px-6 rounded-full bg-gray-100"
              type="text"
              placeholder="Search..."
            />
          </div>
        </form>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 mb-32">
        <div
          id="results"
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-4 mb-4"
        >
          <a
            className="relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg"
            href="https://1000.tools/podifyio"
            target="_top"
          >
            <div className="flex-none mr-3 rounded-none w-16 h-16 overflow-hidden">
              <img
                className="w-16 h-16"
                src="https://cdn.1000.tools/logos/jI5LcAur8dqBgTWF5TXF3Ld2qxyDALOr5UwOZNzW.png?width=128"
                alt="Logo of Podify.io: LinkedIn growth tool combining the power of content, community and newsletters"
                loading="lazy"
              />{" "}
            </div>

            <div className="flex-grow">
              <div className="flex items-center justify-between mb-0.5">
                <h3 className="font-bold line-clamp-1 text-ellipsis overflow-hidden">
                  Podify.io
                </h3>

                <div className="shrink-0 flex md:hidden items-center space-x-1"></div>
              </div>

              <p className="text-sm md:text-xs text-gray-600 line-clamp-2">
                LinkedIn growth tool combining the power of content, community
                and newsletters
              </p>
            </div>

            <div className="absolute -top-2 right-3 hidden md:flex items-center space-x-1"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
