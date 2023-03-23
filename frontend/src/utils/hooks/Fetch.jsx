import { useEffect, useState } from "react";

/**
 * This function will fetch data from an API, if the API fails, it fetches data from mocked data.
 * Also return a boolean indicating whether the data is loading
 *
 * @category Custom Hooks
 * @param {string} url - The url of the API.
 * @returns An object with the following properties: data, isLoading, error
 */

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    setLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(url);
        const dataApi = await response.json();
        setData((current) => (current = dataApi));
        console.log(dataApi);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return { data, isLoading, error };
}
