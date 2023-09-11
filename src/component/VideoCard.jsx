function VideoCard({ video, tags, heading }) {
  return (
    <div className="flex flex-col shadow-md hover:shadow-lg items-center py-5 space-y-4 h-[300px] rounded-md group relative">
      <video
        src={video}
        width={350}
        controls={false}
        className="absolute w-full h-full bg-black pointer-events-none z-0"
      />
      <div className="trnsition-all duration-200 bg-black/50 p-5 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full flex flex-col items-center justify-between text-white ">
        <h1 className="text-xl uppercase font-bold">{heading}</h1>
        <div className="p-2"></div>
        <div className="flex gap-4">
          {tags.map((tag) => (
            <span className="border-2 py-1 px-5 border-white  rounded-md text-[14px]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
