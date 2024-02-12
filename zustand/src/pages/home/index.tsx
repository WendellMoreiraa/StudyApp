import React from "react";

import { useUserStore } from "../../stores/user";

const Home = () => {
  const users = useUserStore((state) => state.state.users);
  return (
    <div>
      {users?.map((user) => (
        <div key={Math.random()}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.adress}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
