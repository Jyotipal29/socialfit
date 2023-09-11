import { useSearch } from "../context/context";

const Navrbar = () => {
  const {
    appState: { q },
    dispatch,
  } = useSearch();
  return (
    <div className="bg-black h-[70px] sticky top-0 z-[1000]">
      <nav className="container mx-auto h-16 px-8 flex  justify-between items-center">
        <div className="cursor-pointer uppercase text-2xl md:text-4xl font-bold  text-white italic">
          jyofit
        </div>
        <div className=" w-1/2 sm:w-1/3 flex">
          <input
            placeholder="search.."
            className="rounded-full py-1 w-full px-4 outline-none "
            value={q}
            onChange={(e) =>
              dispatch({ type: "SEARCH", payload: e.target.value })
            }
          />
        </div>

        <div className="flex space-x-5">
          <img
            src="https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
            alt="profile"
            className="w-10 h-10 rounded-full cursor-pointer object-contain"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navrbar;
