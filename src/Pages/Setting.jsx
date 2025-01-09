import React, { useState } from 'react';

const Setting = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Settings</h3>
        <p className="text-gray-500 text-sm">Customize your account and app preferences.</p>
      </div>

      {/* Theme Settings */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Theme</h4>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Enable Dark Mode</p>
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
            className="w-6 h-6 rounded-full bg-blue-600 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Notifications</h4>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Enable Email Notifications</p>
          <input
            type="checkbox"
            checked={isNotificationsEnabled}
            onChange={() => setIsNotificationsEnabled(!isNotificationsEnabled)}
            className="w-6 h-6 rounded-full bg-green-600 focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Language Settings */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Language</h4>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Select Preferred Language</p>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="w-36 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>
      </div>

      {/* Account Privacy Settings */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Account Privacy</h4>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Make Account Private</p>
          <input
            type="checkbox"
            className="w-6 h-6 rounded-full bg-purple-600 focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-500">Allow Search Engines to Index Profile</p>
          <input
            type="checkbox"
            className="w-6 h-6 rounded-full bg-purple-600 focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Save Settings Button */}
      <div className="mt-8 flex justify-end">
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Setting;
