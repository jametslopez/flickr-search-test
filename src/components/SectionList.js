import React, { useContext, useEffect, useState } from "react";
import { Loading } from "../common/Loading";
import { SearchContext } from "../context/SearchContext";
import { flickrData } from "../services/flickr";
import { SectionItem } from "./SectionItem";

import "./SectionList.css";

export const SectionList = () => {
  const { keyword } = useContext(SearchContext);

  const [images, setImages] = useState({
    data: [],
    loading: 0,
  });

  useEffect(() => {
    setImages({
      data: [],
      loading: 1,
    });

    flickrData(keyword.value).then((images) => {
      setImages({
        data: images,
        loading:0,
      });
    });
  }, [keyword.value]);

  return (
    <div className="section-list mt-6">
      <Loading show={images.loading} />
      <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white">
        {images.data.map((item, index) => {
          return <SectionItem key={index} {...item} />;
        })}
      </div>
    </div>
  );
};
