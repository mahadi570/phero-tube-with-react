import React from "react";

const Menu = (video) => {
  console.log(video.video);
  return (
    <div className="col-span-1 row-span-4">
      <ul>
        {video.video.map((e) => (
          <li className="list-style-none my-4 flex gap-4 shadow-md p-4 rounded-lg justify-start items-center cursor-pointer hover:shadow-xl" key={e.thumbnail}>
            <img className="rounded-full h-14 w-14" src={e.authors[0].profile_picture} alt="" />
            <h3 className="font-semibold text-2xl">{e.authors[0].profile_name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
