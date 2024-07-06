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
            href="https://1000.tools"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🏠
            </div>
            <div className="text-sm font-medium line-clamp-1">All</div>
          </a>

          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/artificial-intelligence"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🤖
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Artificial intelligence
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/productivity"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📈
            </div>
            <div className="text-sm font-medium line-clamp-1">Productivity</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/marketing"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📣
            </div>
            <div className="text-sm font-medium line-clamp-1">Marketing</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/developer-tools"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              💻
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Developer tools
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/design"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🎨
            </div>
            <div className="text-sm font-medium line-clamp-1">Design</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/seo"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🔍
            </div>
            <div className="text-sm font-medium line-clamp-1">SEO</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/chatbots"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🤖
            </div>
            <div className="text-sm font-medium line-clamp-1">Chatbots</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/social-media"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📱
            </div>
            <div className="text-sm font-medium line-clamp-1">Social media</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/customer-support"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🤝
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Customer support
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/no-code"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🚫
            </div>
            <div className="text-sm font-medium line-clamp-1">No code</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/content-creation"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              👨‍🎨
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Content creation
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/blogging"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📝
            </div>
            <div className="text-sm font-medium line-clamp-1">Blogging</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/writing"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              ✍️
            </div>
            <div className="text-sm font-medium line-clamp-1">Writing</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/productized-services"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🛠️
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Productized services
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/sales"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              💰
            </div>
            <div className="text-sm font-medium line-clamp-1">Sales</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/ios"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📱
            </div>
            <div className="text-sm font-medium line-clamp-1">iOS</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/website-builders"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              👷
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Website builders
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/developer-apis"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              👩‍💻
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Developer APIs
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/analytics"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📊
            </div>
            <div className="text-sm font-medium line-clamp-1">Analytics</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/building-products"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🏗️
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Building products
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/video"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🎬
            </div>
            <div className="text-sm font-medium line-clamp-1">Video</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/feedback-tools"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📣
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Feedback tools
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/education"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🎓
            </div>
            <div className="text-sm font-medium line-clamp-1">Education</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/chrome-extensions"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🔌
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Chrome extensions
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/knowledge-management"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📚
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Knowledge management
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/mac"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🍎
            </div>
            <div className="text-sm font-medium line-clamp-1">Mac</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/email"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              ✉️
            </div>
            <div className="text-sm font-medium line-clamp-1">Email</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/market-research"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📊
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Market research
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/video-editing"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🎥
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Video editing
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/e-commerce"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              💳
            </div>
            <div className="text-sm font-medium line-clamp-1">E-commerce</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/note-taking"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📝
            </div>
            <div className="text-sm font-medium line-clamp-1">Note taking</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/voice"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🗣️
            </div>
            <div className="text-sm font-medium line-clamp-1">Voice</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/business-intelligence"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🕵️
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Business intelligence
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/audio"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🔊
            </div>
            <div className="text-sm font-medium line-clamp-1">Audio</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/ship-fast"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🚀
            </div>
            <div className="text-sm font-medium line-clamp-1">Ship fast</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/finance"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              💰
            </div>
            <div className="text-sm font-medium line-clamp-1">Finance</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/reading"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📚
            </div>
            <div className="text-sm font-medium line-clamp-1">Reading</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/lead-generation"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📈
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Lead generation
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/marketplaces"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🛒
            </div>
            <div className="text-sm font-medium line-clamp-1">Marketplaces</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/collaboration"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🤝
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Collaboration
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/task-management"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📋
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Task management
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/saas-boilerplates"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              💻
            </div>
            <div className="text-sm font-medium line-clamp-1">
              SaaS boilerplates
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/notion"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📝
            </div>
            <div className="text-sm font-medium line-clamp-1">Notion</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/data-visualization"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📊
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Data visualization
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/monitoring"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              👀
            </div>
            <div className="text-sm font-medium line-clamp-1">Monitoring</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/books"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📚
            </div>
            <div className="text-sm font-medium line-clamp-1">Books</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/freelancers"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              👩‍💻
            </div>
            <div className="text-sm font-medium line-clamp-1">Freelancers</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/photography"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📷
            </div>
            <div className="text-sm font-medium line-clamp-1">Photography</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/project-management"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📊
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Project management
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/speech-recognition"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🗣️
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Speech recognition
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/databases"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🔍
            </div>
            <div className="text-sm font-medium line-clamp-1">Databases</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/screenshots"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📸
            </div>
            <div className="text-sm font-medium line-clamp-1">Screenshots</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/optimization"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🔍
            </div>
            <div className="text-sm font-medium line-clamp-1">Optimization</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/bots"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🤖
            </div>
            <div className="text-sm font-medium line-clamp-1">Bots</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/web-hosting"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🌐
            </div>
            <div className="text-sm font-medium line-clamp-1">Web hosting</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/machine-learning"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🤖
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Machine learning
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/advertising"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📢
            </div>
            <div className="text-sm font-medium line-clamp-1">Advertising</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/careers"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              💼
            </div>
            <div className="text-sm font-medium line-clamp-1">Careers</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/podcasting"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🎙️
            </div>
            <div className="text-sm font-medium line-clamp-1">Podcasting</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/form-builders"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📋
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Form builders
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/open-source"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🐧
            </div>
            <div className="text-sm font-medium line-clamp-1">Open source</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/remote-work"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🏡
            </div>
            <div className="text-sm font-medium line-clamp-1">Remote work</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/branding"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🏷️
            </div>
            <div className="text-sm font-medium line-clamp-1">Branding</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/jobs"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              👨‍💼
            </div>
            <div className="text-sm font-medium line-clamp-1">Jobs</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/cloud-computing"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              ☁️
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Cloud computing
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/to-do-lists"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📝
            </div>
            <div className="text-sm font-medium line-clamp-1">To do lists</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/browser-extensions"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🧩
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Browser extensions
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/accounting"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📑
            </div>
            <div className="text-sm font-medium line-clamp-1">Accounting</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/cms"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📄
            </div>
            <div className="text-sm font-medium line-clamp-1">CMS</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/communities"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🏘️
            </div>
            <div className="text-sm font-medium line-clamp-1">Communities</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/news"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📰
            </div>
            <div className="text-sm font-medium line-clamp-1">News</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/privacy"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🔒
            </div>
            <div className="text-sm font-medium line-clamp-1">Privacy</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/cloud-infrastructure"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              ☁️
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Cloud infrastructure
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/language-learning"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🗣️
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Language learning
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/job-boards"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📋
            </div>
            <div className="text-sm font-medium line-clamp-1">Job boards</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/journaling"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📔
            </div>
            <div className="text-sm font-medium line-clamp-1">Journaling</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/scrapers"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🔨
            </div>
            <div className="text-sm font-medium line-clamp-1">Scrapers</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/interior-design"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🛋️
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Interior design
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/fintech"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              💰
            </div>
            <div className="text-sm font-medium line-clamp-1">Fintech</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/search"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🔍
            </div>
            <div className="text-sm font-medium line-clamp-1">Search</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/payments"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              💸
            </div>
            <div className="text-sm font-medium line-clamp-1">Payments</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/translation"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🌍
            </div>
            <div className="text-sm font-medium line-clamp-1">Translation</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/performance-monitoring"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📈
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Performance monitoring
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/reduce-costs"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🤑
            </div>
            <div className="text-sm font-medium line-clamp-1">Reduce costs</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/mental-health"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🧠
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Mental health
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/motion-design"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🎥
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Motion design
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/online-scheduling"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🗓️
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Online scheduling
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/recruiting"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              👥
            </div>
            <div className="text-sm font-medium line-clamp-1">Recruiting</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/journalism"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📰
            </div>
            <div className="text-sm font-medium line-clamp-1">Journalism</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/security"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🔒
            </div>
            <div className="text-sm font-medium line-clamp-1">Security</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/fundraising"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              💸
            </div>
            <div className="text-sm font-medium line-clamp-1">Fundraising</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/angel-investing"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              👼
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Angel investing
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/image-recognition"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📷
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Image recognition
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/fitness"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              💪
            </div>
            <div className="text-sm font-medium line-clamp-1">Fitness</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/storage"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🗄️
            </div>
            <div className="text-sm font-medium line-clamp-1">Storage</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/file-sharing"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📁
            </div>
            <div className="text-sm font-medium line-clamp-1">File sharing</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/messaging"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              💬
            </div>
            <div className="text-sm font-medium line-clamp-1">Messaging</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/parenting"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              👨‍👩‍👧‍👦
            </div>
            <div className="text-sm font-medium line-clamp-1">Parenting</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/venture-capital"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              💰
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Venture capital
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/stable-diffusion"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🖼️
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Stable diffusion
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/music"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🎵
            </div>
            <div className="text-sm font-medium line-clamp-1">Music</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/meeting-software"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              💻
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Meeting software
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/families"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              👨‍👩‍👧‍👦
            </div>
            <div className="text-sm font-medium line-clamp-1">Families</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/apple-watch"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              ⌚
            </div>
            <div className="text-sm font-medium line-clamp-1">Apple watch</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/affiliate-tracking"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              💰
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Affiliate tracking
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/tourism"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🌍
            </div>
            <div className="text-sm font-medium line-clamp-1">Tourism</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/big-data"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📊
            </div>
            <div className="text-sm font-medium line-clamp-1">Big data</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/google-cloud"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              ☁️
            </div>
            <div className="text-sm font-medium line-clamp-1">Google cloud</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/investment-management"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              💼
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Investment management
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/ab-testing"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📊
            </div>
            <div className="text-sm font-medium line-clamp-1">A/B testing</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/testimonials"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🌟
            </div>
            <div className="text-sm font-medium line-clamp-1">Testimonials</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/legal"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              ⚖️
            </div>
            <div className="text-sm font-medium line-clamp-1">Legal</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/trading"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              💱
            </div>
            <div className="text-sm font-medium line-clamp-1">Trading</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/web3"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🌐
            </div>
            <div className="text-sm font-medium line-clamp-1">Web3</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/jira"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📋
            </div>
            <div className="text-sm font-medium line-clamp-1">Jira</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/restaurants"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              👨‍🍳
            </div>
            <div className="text-sm font-medium line-clamp-1">Restaurants</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/dating"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              💑
            </div>
            <div className="text-sm font-medium line-clamp-1">Dating</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/billing"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              💸
            </div>
            <div className="text-sm font-medium line-clamp-1">Billing</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/home-inventory"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🏡
            </div>
            <div className="text-sm font-medium line-clamp-1">
              Home inventory
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/guides"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              📚
            </div>
            <div className="text-sm font-medium line-clamp-1">Guides</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/travel"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              ✈️
            </div>
            <div className="text-sm font-medium line-clamp-1">Travel</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/waitlist"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              ✉️
            </div>
            <div className="text-sm font-medium line-clamp-1">Waitlist</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/3d-technology"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🖥️
            </div>
            <div className="text-sm font-medium line-clamp-1">
              3D technology
            </div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/banking"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              💵
            </div>
            <div className="text-sm font-medium line-clamp-1">Banking</div>
          </a>
          <a
            className="h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500"
            data-category-links-target="link"
            data-action="click->category-links#clicked"
            href="https://1000.tools/categories/nutrition"
          >
            <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2">
              🥦
            </div>
            <div className="text-sm font-medium line-clamp-1">Nutrition</div>
          </a>
        </div>
      </div>
    </div>
  );
}
