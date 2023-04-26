import { useState, useEffect } from "react";
import axios from "axios";

const useFetchDetail = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const { data: categoryData } = await axios(url);

      setData(categoryData.meals[0]);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, loading };
};
export default useFetchDetail;
