import { useState, useEffect } from "react";
import axios from "axios";

export default function CustomGetFunction(url, depend) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(false);
        const response = await axios.get(`${process.env.VITE_APP_DOMAIN}${url}`);
        if (response.data.status === "success") {
          setData(response.data.data);
          setPagination(response.data);
          setLoading(true);
          return;
        }
        if (response.data.status === "error") {
          console.log(response.data.message);
          setLoading(true);
          return;
        }
      } catch (error) {
        console.log(error.response.data.message);
        setLoading(true);
      }
    })();

    return () => {
      setData([]);
    };
  }, [url, ...depend]);

  return { data, pagination, loading };
}
