import { useState, useEffect } from "preact/hooks";
import { getTargets } from "../api";

const useTargetList = () => {
  const [targets, setTargets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      getTargets()
        .then((result) => {
          setTargets(result);
        })
        .catch((error) => setError(error));
    };

    fetchData();
    const getTargetInterval = setInterval(() => fetchData(), 10000);
    return () => {
      clearInterval(getTargetInterval);
    };
  }, []);

  return { targets, setTargets, error };
};

export default useTargetList;
