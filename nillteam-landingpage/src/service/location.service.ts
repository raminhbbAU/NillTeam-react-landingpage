import { useState, useEffect } from "react";

const useGeoLocation = (options = {}) => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const api =  "https://api.country.is";

  useEffect(() => {
    let isCancelled = false;

    if (country || country === false) return;
    async function fetchAPI() {
      setIsLoading(true);
      await fetch(api)
        .then(res => {
          if (!res.ok) {
            throw Error(res.statusText);
            return null;
          }
          return res.json();
        })
        .then(res => {
          if (res && res.country && !isCancelled) setCountry(res.country);
        })
        .catch(err => setError(err))
        .finally(() => setIsLoading(false));
    }
    fetchAPI();
    return () => {
      isCancelled = true;
    };
  }, []);

  return { country, error, isLoading };
};

export default useGeoLocation;
