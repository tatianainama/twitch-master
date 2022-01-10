import { useState, useEffect } from 'preact/hooks';
import { getCurrentlyCasted } from '../api';

const useCasted = () => {
  const [casted, setCasted] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = () => {
    getCurrentlyCasted()
      .then(result => {
        setCasted(result);
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

  return { casted, setCasted };
};

export default useCasted;
