import { useEffect, useState } from "react";

/**
 * This function will fetch data from an API, if the API fails, it fetches data from mocked data.
 * Also return a boolean indicating whether the data is loading
 *
 * @category Custom Hooks
 * @param {string} url - The url of the API.
 * @param {string} mockedDataUrl - The url of the mocked data
 * @param {string} id - the id of the user from the mocked data
 * @returns An object with the following properties: data, isLoading, error
 */

export function useFetch(url, mockedDataUrl, id) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    setLoading(true);

    async function fetchData() {
      try {
        if (process.env.REACT_APP_DEV_MODE === "live") {
          const response = await fetch(url).catch((err) => console.log("err"));
          const dataApi = await response.json();
          dataApi &&
            dataApi.data &&
            setData((current) => (current = dataApi.data));
        } else if (process.env.REACT_APP_DEV_MODE === "dev") {
          const response = await fetch(mockedDataUrl);
          const mockedData = await response.json();
          const item = mockedData.find(
            (obj) => obj.userId === id || obj.id === id
          );
          item && setData((current) => (current = item));
        }
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, mockedDataUrl, id]);
  return { data, isLoading, error };
}
