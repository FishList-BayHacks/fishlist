import { useState, useEffect } from "react";

export const useFish = () => {
  const [fishData, setFishData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFish = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://0d5948b2723b.ngrok.app/fish");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setFishData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFish();
  }, []);

  return { fishData, loading, error };
};
