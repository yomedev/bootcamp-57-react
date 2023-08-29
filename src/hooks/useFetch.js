import { useEffect } from "react";
import { useState } from "react";

const fetchStatus = {
  Idle: "idle",
  Loading: "loading",
  Success: "success",
  Error: "error",
};

export const useFetch = (callback) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(fetchStatus.Idle);

  useEffect(() => {
    const fetch = async () => {
      setStatus(fetchStatus.Loading);
      try {
        const data = await callback();
        setData(data);
        setStatus(fetchStatus.Success);
      } catch (error) {
        setStatus(fetchStatus.Error);
      }
    };
    fetch();
  }, [callback]);

  return { data, status };
};
