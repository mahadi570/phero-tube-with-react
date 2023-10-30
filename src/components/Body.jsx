import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Content from "./Content";

const Body = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/videos/category/1000")
      .then((res) => res.json())
      .then((data) => setVideo(data.data));
  }, []);
  return (
    <div className="max-w-[95%] mx-auto pt-10 grid  grid-cols-6 gap-2">
      <Menu video={video} />
      <Content video={video} />
    </div>
  );
};

export default Body;
