import React from "react";

const VideoCard = (video) => {
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-40"
            src={video.video.thumbnail}
            alt="video"
          />
        </figure>
        <div className="flex flex-row gap-3 p-4">

          <div id="authors">
            <img className="rounded-full h-12 w-12" src={video.video.authors[0].profile_picture} alt="" />
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold cursor-pointer">{video.video.title.length < 15 ? video.video.title : video.video.title.slice(0,16)+'...'}</h3>
            <p className="cursor-pointer">{video.video.authors[0].profile_name} <span className="font-bold">{video.video.authors[0].verified && 'verified'}</span></p>
            <p>{video.video.others.views} Views</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
