import { useState, useEffect } from 'preact/hooks';

import { getPlayingOnServer } from '../api';

const usePlayingOnServer = () => {
  const [playingOnServer, setPlayingOnServer] = useState([]);

  useEffect(() => {
    getPlayingOnServer().then(setPlayingOnServer)
  }, []);

  return [ playingOnServer, setPlayingOnServer ];
};

export default usePlayingOnServer;
