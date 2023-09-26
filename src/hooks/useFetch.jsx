import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setisPending(true)
      try {
        const req = await fetch(url);
        if (!req.ok) {
            throw new Error (req.statusText)
        }
        const data = await req.json();
        setData(data);
        setError(null)
        setisPending(false)
      } catch (error) {
        setError(error.message)
        setisPending(false)
        console.log(error.message)
      }
    };
    getData();
  }, [url]);
  return { data, isPending, error };
}

export { useFetch };
