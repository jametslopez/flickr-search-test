import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export const HeadSearch = () => {
  const { keyword, dispatch } = useContext(SearchContext);

  const onChangeSearch = (event) => {
    dispatch({
      type: "search",
      value: event.target.value,
    });
  };

  return (
    <header>
      <p className="text-center text-red-500 font-bold my-5">
        Flickr Search Test
      </p>
      <div className="flex">
        <input
          type="text"
          className="px-3 py-2 w-full rounded-lg border border-gray-300 text-sm text-gray-400 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Please enter a keyword to search"
          value={keyword.value}
          onChange={onChangeSearch}
        />
        <button className="ml-2 p-2 pl-5 pr-5 bg-red-500 text-gray-100 text-sm rounded-lg">
          Search
        </button>
      </div>
    </header>
  );
};
