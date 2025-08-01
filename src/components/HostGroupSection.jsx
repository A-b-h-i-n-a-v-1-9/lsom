// src/components/HostGroupSection.jsx

import React from "react";

export default function HostGroupSection() {
  const title = import.meta.env.VITE_HOST_GROUP_TITLE;
  const imageUrl = import.meta.env.VITE_HOST_GROUP_IMAGE;
  const para1 = import.meta.env.VITE_HOST_GROUP_DESC1;
  const para2 = import.meta.env.VITE_HOST_GROUP_DESC2;
  const quote = import.meta.env.VITE_HOST_GROUP_QUOTE;

  // If nothing is provided in .env, do not render the section
  if (!title && !imageUrl && !para1 && !para2 && !quote) return null;

  return (
    <section className="py-16 bg-gray-50 dark:bg-[#111827] text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-4">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            {title}
          </h2>
        )}

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          {imageUrl && (
            <div className="w-full md:w-1/2">
              <img
                src={imageUrl}
                alt="Hosting Group"
                className="rounded-2xl shadow-lg object-cover w-full h-auto"
              />
            </div>
          )}

          {/* Description */}
          {(para1 || para2 || quote) && (
            <div className="w-full md:w-1/2 text-lg leading-relaxed">
              {para1 && <p className="mb-4">{para1}</p>}
              {para2 && <p className="mb-4">{para2}</p>}
              {quote && (
                <p className="italic text-sm text-gray-600 dark:text-gray-400">
                  “{quote}”
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
