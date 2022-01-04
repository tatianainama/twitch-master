import { useState, useEffect } from 'preact/hooks';

import { getPlayingOnServer } from '../api';

const usePlayingOnServer = () => {
  const [playingOnServer, setPlayingOnServer] = useState([]);

  const fetchData = () => getPlayingOnServer().then(setPlayingOnServer);

  useEffect(() => {
    fetchData();
    const getPlayingInterval = setInterval(() => fetchData(), 10000);
    return () => {
      clearInterval(getPlayingInterval);
    }
  }, []);
  return [playingOnServer, setPlayingOnServer];
};

export default usePlayingOnServer;
