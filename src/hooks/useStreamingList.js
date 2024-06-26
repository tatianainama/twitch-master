import { useState, useEffect } from "react";
import { ChipColors } from "../components/Chip";
import { getStreaming } from "../api";

const categorize = (data) => {
  const uniqueCategories = [...new Set(data.map((stream) => stream.game_name))];
  const colorPalette = uniqueCategories.reduce(
    (catalogue, game_name, index) => ({
      ...catalogue,
      [game_name]: ChipColors[index],
    }),
    {}
  );
  return data.map((stream) => ({
    ...stream,
    color: colorPalette[stream.game_name],
  }));
};

const useStreamingList = () => {
  const [streaming, setStreaming] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      getStreaming()
        .then((result) => {
          const data = categorize(result);
          setStreaming(data);
        })
        .catch((error) => setError(error));
    };

    fetchData();
    const getStreamingInterval = setInterval(() => fetchData(), 10000);
    return () => {
      clearInterval(getStreamingInterval);
    };
  }, []);

  return { streaming, setStreaming, error };
};

export default useStreamingList;
