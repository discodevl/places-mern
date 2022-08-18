import React from "react";
import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: "u1",
      name: "don",
      image:
        "https://preview.redd.it/3zazpr2zxz441.jpg?width=960&crop=smart&auto=webp&s=f5dadd6082aa4af78474e2d7d66a14ddf0f32482",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
}

export default Users;
