import React from "react";

function getHostFromEnv() {
  const title = import.meta.env.VITE_HOST_GROUP_TITLE;
  const imageUrl = import.meta.env.VITE_HOST_GROUP_IMAGE;
  const para1 = import.meta.env.VITE_HOST_GROUP_DESC1;
  const para2 = import.meta.env.VITE_HOST_GROUP_DESC2;
  const quote = import.meta.env.VITE_HOST_GROUP_QUOTE;
  if (!title && !imageUrl && !para1 && !para2 && !quote) return null;
  return { title, imageUrl, para1, para2, quote };
}

export default function HostGroupSection({ event: eventProp }) {
  const host =
    eventProp?.hostGroup != null
      ? {
        title: eventProp.hostGroup.title,
        imageUrl: eventProp.hostGroup.image,
        para1: eventProp.hostGroup.desc1,
        para2: eventProp.hostGroup.desc2,
        quote: eventProp.hostGroup.quote,
      }
      : getHostFromEnv();

  if (!host || (!host.title && !host.imageUrl && !host.para1 && !host.para2 && !host.quote))
    return null;

  const { title, imageUrl, para1, para2, quote } = host;

  return (
    <section className="py-16 bg-gray-50 dark:bg-[#111827] text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Host Title */}
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            {title}
          </h2>
        )}

        {/* Host Content */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {imageUrl && (
            <div className="w-full md:w-1/2">
              <img
                src={imageUrl}
                alt="Hosting Group"
                className="rounded-2xl shadow-lg object-cover w-full h-auto"
              />
            </div>
          )}

          {(para1 || para2 || quote) && (
            <div className="w-full md:w-1/2 text-lg leading-relaxed">
              {para1 && <p className="mb-4">{para1}</p>}
              {para2 && <p className="mb-4">{para2}</p>}
              {quote && (
                <p className="italic text-sm text-gray-600 dark:text-gray-400">
                  "{quote}"
                </p>
              )}
            </div>
          )}
        </div>

        {/* ⭐ Fit Nation Section — ONLY for Pashan LSOM */}
        {eventProp?.id === "pashan-2026-03" && (
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">In Association With</h3>

            <div className="flex flex-col items-center">
              <img
                src="/assets/fitnation.jpeg"
                alt="Fit Nation Gym"
                className="h-40 w-auto object-contain mb-3"  
              />
              <p className="text-lg font-semibold">Fit Nation Gym – Pashan</p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}