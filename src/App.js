import React from "react";
import { HeadSearch } from "./components/HeadSearch";
import { SectionList } from "./components/SectionList";
import SearchContextProvider from "./context/SearchContext";

import "./App.css";

function App() {
  return (
    <div className="sm:container sm:mx-auto mx-4">
      <SearchContextProvider>
        <HeadSearch />
        <SectionList />
      </SearchContextProvider>
    </div>
  );
}

export default App;
