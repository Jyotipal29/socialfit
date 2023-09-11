function VideoCard({ video, tags, heading }) {
  return (
    <div className=" rounded-lg flex flex-col justify-center items-center space-y-2 py-4 shadow-md ">
      <h1 className="text-xl uppercase font-bold">{heading}</h1>

      <video
        src={video}
        width={350}
        controls
        className=" w-full h-full bg-black  "
      />
      <div>
        <div className="p-2"></div>
        <div className="flex gap-4">
          {tags.map((tag) => (
            <span className="border-2 border-gray-600 py-1 px-5   rounded-md text-[14px]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
