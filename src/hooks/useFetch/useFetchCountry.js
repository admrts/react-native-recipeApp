import { useState, useEffect } from "react";
import axios from "axios";

const useFetchCountry = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const { data: countryData } = await axios(url);
      setData(countryData.meals);
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
export default useFetchCountry;
