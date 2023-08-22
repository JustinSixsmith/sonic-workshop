import Image from "next/image";
import React from "react";

// Placeholder user data - replace with real data eventually
const user = {
  name: "User Name",
  role: "Contributor",
  about: "I'm a music enthusiast and love collaborating on new projects!",
  status: "Online",
  projects: 12,
  tracks: 24,
  collaborators: 15,
  lookingForCollaboration: true,
  avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
};

export default function UserCard() {
  // Placeholder user data

  return (
    <div className="rounded bg-white p-4 shadow">
      <div className="mb-4 flex items-center">
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
            {user.role} | Status: {user.status}
          </div>
        </div>
      </div>
      <div className="mb-4 text-sm text-gray-500">{user.about}</div>
      <div className="text-sm leading-5 text-gray-500">
        Projects: {user.projects} | Tracks: {user.tracks} | Collaborators:{" "}
        {user.collaborators}
      </div>
      <div className="mt-4">
        {user.lookingForCollaboration ? (
          <span className="text-green-500">Looking for collaborations</span>
        ) : (
          <span className="text-red-500">
            Not currently looking for collaborations
          </span>
        )}
      </div>
    </div>
  );
}
