import { useEffect, useState } from "react";

const useUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/register`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log("user user hook", data);
        setUsers(data);
      });
  }, [users]);
  return [users];
};

export default useUser;
