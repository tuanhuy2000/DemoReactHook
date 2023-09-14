import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, isDoubleData) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ourRequest = axios.CancelToken.source();

    async function fetchData() {
      try {
        let res = await axios.get(url, { cancelToken: ourRequest.token });
        isDoubleData ? setList(res.data.data) : setList(res.data);
        setLoading(false);
      } catch (e) {
        if (axios.isCancel(e)) {
          console.log("request cancel", e.message);
        } else {
        }
      }
    }

    setTimeout(() => {
      fetchData();
    }, 1000);

    return () => {
      ourRequest.cancel("cancel by user ");
    };
  }, [url]);

  return {
    list,
    loading,
  };
};

export default useFetch;
