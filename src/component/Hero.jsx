import hero from "../assets/jyofit-bg.avif";
const Hero = () => {
  return (
    <div className="h-[calc(100vh-70px)] w-full sticky top-[70px]">
      <div className="h-full w-full relative">
        <img
          src={hero}
          alt="hero"
          className="w-full h-full absolute z-0 object-cover object-top "
        />
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex justify-center items-center w-full h-full bg-black/50">
          <p className="absolute left-5 w-full text-white text-center text-3xl md:text-6xl">
            No <strong>Pain</strong> No <strong>Gain</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero; //Continue Jyoti?? Are you there
