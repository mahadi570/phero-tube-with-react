import VideoCard from "./VideoCard";

const Content = (video) => {
  
  return (
    <div className="col-span-5 grid grid-cols-4 gap-4">
     {
      video.video.map(video => <VideoCard key={video.thumbnail} video={video}/>)
     }
    </div>
  );
};

export default Content;
