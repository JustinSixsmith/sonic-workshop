import Image from "next/image";
import React from "react";

// Placeholder user data - replace with real data eventually
const user = {
  name: "User Name",
  avatar:
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80 ",
  status: "Online",
};

export default function UserCard() {
  return (
    <div className="rounded-lg bg-white p-4 shadow">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Image
            className="h-12 w-12 rounded-full"
            src={user.avatar}
            width={64}
            height={64}
            alt=""
          />
        </div>
        <div className="ml-4">
          <div className="text-lg font-medium leading-6 text-gray-900">
            {user.name}
          </div>
          <div className="text-sm leading-5 text-gray-500">
            Status: {user.status}
          </div>
        </div>
      </div>
    </div>
  );
}
