import { type UserProps } from "@/interfaces";
import React from "react";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div>
      <div className="border p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700 mb-4">{email}</p>
        <p className="text-sm text-gray-500">Address: {address}</p>
      </div>
    </div>
  );
};
export default UserCard;
