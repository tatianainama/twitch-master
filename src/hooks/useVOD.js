import { useState, useEffect } from "react";
import { getVODs } from "../api";

const useCasted = () => {
  const [vods, setVODs] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      getVODs()
        .then(setVODs)
        .catch((error) => setError(error));
    };
    fetchData();
  }, []);

  return { vods, error };
};

export default useCasted;
