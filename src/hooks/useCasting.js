import { useState, useEffect } from 'preact/hooks';
import { getCurrentlyCasted } from '../api';

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

const useCasting = () => {
  const [casting, setCasting] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = () => {
    getCurrentlyCasted()
      .then(result => {
        setCasting(result);
      })
      .catch(error => setError(error));
  };

  useEffect(() => {
    fetchData();
    const getCastedInterval = setInterval(() => fetchData(), 10000);
    return () => {
      clearInterval(getCastedInterval);
    }
  }, []);

  return { casting, setCasting };
};

export default useCasting;
