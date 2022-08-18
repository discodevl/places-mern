import React from "react";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";
import styles from "./UserList.module.css";

function UsersList({ items }) {
  if (items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className={styles["users-list"]}>
      {items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
}

export default UsersList;
