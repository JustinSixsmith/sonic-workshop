import React from "react";

function QuickActions() {
  return (
    <div className="mt-4 rounded bg-gray-200 p-4">
      <h2 className="text-xl font-bold">Quick Actions</h2>
      {/* Replace these with actual actions or links */}
      <button className="mt-2 w-full rounded bg-blue-500 p-2 text-white">
        New Project
      </button>
      <button className="mt-2 w-full rounded bg-blue-500 p-2 text-white">
        Join Group
      </button>
      <button className="mt-2 w-full rounded bg-blue-500 p-2 text-white">
        Settings
      </button>
    </div>
  );
}

export default QuickActions;
