import "./App.css";
import Hero from "./component/Hero";
import Navrbar from "./component/Navbar";
import { useState, useRef, useEffect } from "react";
import { useSearch } from "./context/context";
import gif from "./assets/loading-gif.gif";
import VideoCard from "./component/VideoCard";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const requestController = useRef(new AbortController());
  const {
    appState: { q },
  } = useSearch();

  const getData = async () => {
    if (requestController.current) {
      requestController.current.abort();
    }

    requestController.current = new AbortController();

    if (q.trim() === "") {
      setLoading(false);
      setData([]);
      return;
    }
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos`,
        {
          params: {
            q,
            numResults: 5,
            tags: q,
          },
          signal: requestController.current.signal,
        }
      );

      setData(data.results);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [q]);

  return (
    <div className="App">
      <Navrbar />
      {data.length ? (
        loading ? (
          <div className="flex justify-center items-center text-4xl font-bold mt-5 ">
            <img src={gif} alt="loading" className="w-14 h-14" />
          </div>
        ) : (
          <div className="w-full bg-white relative">
            <div className="container mx-auto mt-10 px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {data.map((item) => (
                  <VideoCard {...item} />
                ))}
              </div>
            </div>
          </div>
        )
      ) : (
        <Hero />
      )}
    </div>
  );
}

export default App;
