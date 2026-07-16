import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axiosIntance";

type User = {
  id: string;
  email: string;
  password:string;
};

export default function User() {
  const [users, setUsers] = useState<User[]>([]);

  async function getUsers() {
    try {
      const response = await axiosInstance.get("/user");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.email}</h2>
        </div>
      ))}
    </div>
  );
}