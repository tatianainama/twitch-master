import { useState, useEffect } from "preact/hooks";
import { getDotaFromCurrentlyCasting } from "../api";

const useDotaInfo = (chan_id) => {
  const [dotaInfo, setDotaInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      getDotaFromCurrentlyCasting({ game_name: "Dota 2", user_id: chan_id })
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
