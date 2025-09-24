import { type UserProps } from "@/interfaces";
import React from "react";
import UserCard from "@/components/common/UserCard";

export interface UsersPageProps {
  users: UserProps[];
}
const User: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <h1>Welcome to users page</h1>
      <div>
        {users.length === 0 ? (
          <p>users loading ....</p>
        ) : (
          users.map((user, idx) => (
            <UserCard
              key={idx}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default User;
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const users: UserProps[] = data.map((user: any) => ({
    name: user.name,
    email: user.email,
    address: `${user.address.street}, ${user.address.city}`,
  }));
  return {
    props: {
      users,
    },
  };
}
