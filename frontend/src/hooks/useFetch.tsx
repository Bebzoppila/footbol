import { useState, useEffect, Dispatch, SetStateAction } from "react";

function useFetch<T>(propsUrl: string, defaultState: T): [T, (url: string) => void] {
  const [data, setData] = useState<T>(defaultState);
  const [url, setUrl] = useState(propsUrl);

  const urlUpdate = (newUrl: string) => {
    setUrl(newUrl);
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);

  return [data, urlUpdate];
}

export default useFetch;
