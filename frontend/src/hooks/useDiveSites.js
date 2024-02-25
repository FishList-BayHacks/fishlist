import { useState, useEffect, useCallback } from "react";

export const useDiveSites = (county) => {
  const [diveSites, setDiveSites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (countyName) => {
      setLoading(true);
      const url = `https://0d5948b2723b.ngrok.app/divesites/${countyName}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setDiveSites(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [county]
  );

  useEffect(() => {
    if (county) {
      fetchData(county);
    }
  }, [county, fetchData]);

  return { diveSites, loading, error, refetch: fetchData };
};
