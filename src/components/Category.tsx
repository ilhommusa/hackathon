import React from "react";

export default function Category() {
  return (
    <div className="sticky top-0">
      <div
        className="hidden lg:block h-screen shrink-0 w-60 border-r overflow-y-auto scrollbar-thin"
        data-turbo-permanent=""
        id="categories_vertical"
      >
        <div
          data-controller="category-links"
          data-category-links-active-className="bg-gray-50 text-gray-700"
          data-category-links-inactive-className="hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
          className="grid gap-1 p-4"
        >
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 bg-gray-50 text-gray-700"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="/"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🏠
            </div>
            <div className="text-sm font-medium line-clamp-1">All</div>
          </a>
        </div>
      </div>
    </div>
  );
}
