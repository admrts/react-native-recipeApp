import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const { data: categoryData } = await axios(url);

      if (categoryData.categories) {
        setData(categoryData.categories);
      } else if (categoryData.meals) {
        if (categoryData.meals.length > 1) {
          setData(categoryData.meals);
        } else {
          setData(categoryData.meals[0]);
        }
      }
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
export default useFetch;
