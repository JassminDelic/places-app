import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [{
    id: "u1",
    name: "Meho Mali",
    image: "https://cdn.tatyanadeniz.com/wp-content/uploads/2020/05/kawaii-kitty-tutorial-cover.jpg",
    places: "3"
  }];

  return <UsersList items={USERS} />;
}

export default Users;