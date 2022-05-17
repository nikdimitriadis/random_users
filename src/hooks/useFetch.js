import { useEffect, useState } from "react";

const useFetch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://randomuser.me/api/?inc=picture&results=9"
        );

        if (!response.ok) {
          throw new Error("Fail to fetch data");
        }

        const responseData = await response.json();
        setUsers(responseData.results);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(e.message);
        console.error(e);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};

export default useFetch;
