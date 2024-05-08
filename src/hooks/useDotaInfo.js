import { useState, useEffect } from "preact/hooks";
import { getDotaFromChannel } from "../api";

const useDotaInfo = (chan_name) => {
  const [dotaInfo, setDotaInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      getDotaFromChannel({ user_name: chan_name })
        .then((result) => {
          setDotaInfo(result);
        })
        .catch((error) => setError(error));
    };
    fetchData();
    const _int = setInterval(() => fetchData(), 10000);
    return () => {
      clearInterval(_int);
    };
  }, []);

  return { dotaInfo, setDotaInfo, error };
};

export default useDotaInfo;
