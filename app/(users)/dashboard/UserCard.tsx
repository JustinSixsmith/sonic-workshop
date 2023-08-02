import Image from "next/image";
import React from "react";

function UserCard() {
  // Replace with actual data
  const user = {
    name: "User Name",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    status: "Online",
  };

  return (
    <div className="rounded bg-gray-200 p-4">
      <Image
        width={64}
        height={64}
        src={user.avatar}
        alt={user.name}
        className="h-16 w-16 rounded-full"
      />
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>Status: {user.status}</p>
    </div>
  );
}

export default UserCard;
