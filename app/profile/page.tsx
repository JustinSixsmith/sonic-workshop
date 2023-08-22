import Image from "next/image";

export default function ProfilePage() {
  const user = {
    name: "User Name",
    email: "user@example.com",
    phone: "123-456-7890",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80 ",
    bio: "Passionate about music and technology. Working at Sonic Workshop.",
  };

  return (
    <div className="bg-#212936 text-#ebebeb p-8">
      <div className="bg-#337180 mx-auto w-full rounded-lg p-6 shadow-lg md:w-1/2">
        {/* Profile Image */}
        <div className="text-center">
          <Image
            className="border-#cad2c5 rounded-full border-4"
            src={user.avatar}
            width={150}
            height={150}
            alt="Profile Picture"
          />
          <button className="text-#d64933 mt-2">Change Picture</button>
        </div>

        {/* Personal Details */}
        <div className="mt-6">
          <h2 className="mb-2 text-xl font-bold">Personal Details:</h2>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Bio:</strong> {user.bio}
          </p>
        </div>

        {/* Settings & Preferences (Placeholder) */}
        <div className="mt-6">
          <h2 className="mb-2 text-xl font-bold">Settings & Preferences:</h2>
          <p>Theme Preferences, Notification settings, etc.</p>
        </div>

        {/* Activity (Placeholder) */}
        <div className="mt-6">
          <h2 className="mb-2 text-xl font-bold">Recent Activity:</h2>
          <p>Recent uploads, projects, etc.</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-between">
          <button className="bg-#d64933 rounded px-4 py-2 text-white">
            Edit Profile
          </button>
          <button className="text-#d64933">Logout</button>
        </div>
      </div>
    </div>
  );
}
