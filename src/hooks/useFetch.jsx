import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await req.json();
        setData(data.data);

        setIsPending(false);
        setError(null);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending, error };
};
