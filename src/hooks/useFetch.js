import { useEffect, useState } from 'react';
import http from '@/http';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState('process');

  useEffect(() => {
    const fetchData = async () => {
      setLoading('pending');
      setData(null);
      setError(null);
      try {
        const response = await http.get(url);
        setData(response.data);
        setLoading('success');
      } catch (err) {
        setError(err);
        setLoading('rejected');
      }
    };
    fetchData();
  }, [url]);

  return { loading, data, error };
};

export default useFetch;
