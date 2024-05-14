import { useState, useEffect } from "react";
import { getCurrentlyCasted } from "../api";

const useCasted = () => {
  const [casting, setCasting] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      getCurrentlyCasted()
        .then((result) => {
          setCasting(result);
        })
        .catch((error) => setError(error));
    };
    fetchData();
    const getCastedInterval = setInterval(() => fetchData(), 10000);
    return () => {
      clearInterval(getCastedInterval);
    };
  }, []);

  return { casting, setCasting, error };
};

export default useCasted;
