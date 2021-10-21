import React from "react";

export const SectionItem = ({
  title,
  author,
  tags,
  imageLarge,
  imageThumbnail,
  dateTaken,
}) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <a target="_blank" rel="noreferrer " href={imageLarge}>
        <img class="w-full" src={imageThumbnail} alt="" />
      </a>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p class="text-gray-700 text-sm">- By {author}</p>
        <p class="text-gray-700 text-sm">- {dateTaken}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => {
          return (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};
