import { useState } from "react";

export const useUserFish = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addFish = async (fishId) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://0d5948b2723b.ngrok.app/user/fish/${fishId}/add`,
        {
          method: "POST",
          // Add any necessary headers, body, or other options here
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Handle the response as needed
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const removeFish = async (fishId) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://0d5948b2723b.ngrok.app/user/fish/${fishId}/remove`,
        {
          method: "POST",
          // Add any necessary headers, body, or other options here
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Handle the response as needed
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { addFish, removeFish, isLoading, error };
};
