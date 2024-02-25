import { useCallback, useEffect, useState } from "react";

export const useFishByCountyHook = (county) => {
  const [fishByCounty, setFishByCounty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (countyName) => {
      setLoading(true);
      const url = `https://0d5948b2723b.ngrok.app/fish/${countyName}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setFishByCounty(data);
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

  return { fishByCounty, loading, error, refetch: fetchData };
};
