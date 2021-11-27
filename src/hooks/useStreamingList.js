import { useState, useEffect } from 'preact/hooks';
import { ChipColors } from '../components/Chip';
import { getStreaming } from '../api';

const categorize = (data) => {
  const uniqueCategories = [...new Set(data.map(stream => stream.category))];
  const colorPalette = uniqueCategories.reduce(
    (catalogue, category, index) => (
      {
        ...catalogue,
        [category]: ChipColors[index],
      }
    ),
  {});
  return data.map(stream => ({
    ...stream,
    color: colorPalette[stream.category],
  }));
};

const useStreamingList = () => {
  const [streaming, setStreaming] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = () => getStreaming()
  .then(result => {
    const data = categorize(result);
    setStreaming(data);
  })
  .catch(error => setError(error));
  
  useEffect(() => {
    fetchData();
    const getStreamingInterval = setInterval(() => fetchData(), 10000);
    return () => {
      clearInterval(getStreamingInterval);
    }
  }, []);

  return { streaming, error };
};

export default useStreamingList;
