import React from 'react';

const Profile = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Profile Information</h3>
        <p className="text-gray-500 text-sm">Manage your account details and preferences</p>
      </div>

      {/* Profile Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-gray-700 mb-4">Personal Information</h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="text-lg font-semibold text-gray-800">John Doe</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-lg font-semibold text-gray-800">john.doe@example.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="text-lg font-semibold text-gray-800">(123) 456-7890</p>
            </div>
          </div>
        </div>

        {/* Account Settings Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-gray-700 mb-4">Account Settings</h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Username</p>
              <p className="text-lg font-semibold text-gray-800">john_doe</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Account Status</p>
              <p className="text-lg font-semibold text-green-600">Active</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Join Date</p>
              <p className="text-lg font-semibold text-gray-800">January 5, 2020</p>
            </div>
          </div>
        </div>
      </div>

      {/* Change Password Section */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Change Password</h4>
        <form className="space-y-4">
          <div>
            <label htmlFor="current-password" className="block text-sm text-gray-500">Current Password</label>
            <input
              type="password"
              id="current-password"
              placeholder="Enter current password"
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="new-password" className="block text-sm text-gray-500">New Password</label>
            <input
              type="password"
              id="new-password"
              placeholder="Enter new password"
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm text-gray-500">Confirm New Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm new password"
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Update Password
          </button>
        </form>
      </div>

      {/* Delete Account Section */}
      <div className="mt-8 bg-red-100 p-6 rounded-lg shadow-md">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Delete Account</h4>
        <p className="text-sm text-gray-500">If you wish to permanently delete your account, please proceed with the action below. This is irreversible.</p>
        <button
          className="mt-4 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
        >
          Delete My Account
        </button>
      </div>
    </div>
  );
};

export default Profile;
