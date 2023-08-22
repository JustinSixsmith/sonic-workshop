export default function SettingsPage() {
  return (
    <div className="bg-#212936 text-#ebebeb p-8">
      <div className="bg-#337180 mx-auto w-full rounded-lg p-6 shadow-lg md:w-3/4">
        {/* Account Settings */}
        <div className="mt-6">
          <h2 className="mb-2 text-xl font-bold">Account Settings:</h2>
          <button className="text-#d64933">Update Email</button>
          <button className="text-#d64933 ml-4">Change Password</button>
          <button className="text-#d64933 ml-4">Delete Account</button>
        </div>

        {/* Privacy Settings */}
        <div className="mt-6">
          <h2 className="mb-2 text-xl font-bold">Privacy Settings:</h2>
          <p>
            Account Visibility, Activity Visibility, Contact Preferences, etc.
          </p>
        </div>

        {/* Notification Settings */}
        <div className="mt-6">
          <h2 className="mb-2 text-xl font-bold">Notification Settings:</h2>
          <p>
            Email Notifications, App Notifications, Notification Preferences,
            etc.
          </p>
        </div>

        {/* Theme and Display */}
        <div className="mt-6">
          <h2 className="mb-2 text-xl font-bold">Theme & Display:</h2>
          <p>Light/Dark Mode, Font Size, etc.</p>
        </div>

        {/* Integrations */}
        <div className="mt-6">
          <h2 className="mb-2 text-xl font-bold">Integrations:</h2>
          <p>Connect with other platforms, API settings, etc.</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-between">
          <button className="bg-#d64933 rounded px-4 py-2 text-white">
            Save Changes
          </button>
          <button className="bg-#cad2c5 text-#212936 rounded px-4 py-2">
            Reset to Default
          </button>
        </div>
      </div>
    </div>
  );
}
