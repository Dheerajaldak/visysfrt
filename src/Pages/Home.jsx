import React from 'react';

const Home = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-2xl font-bold text-gray-800 ">Welcome to Your Dashboard</h3>
        <div className="text-sm text-gray-500">
          <p>Last login: <span className="font-semibold">2 hours ago</span></p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-gray-700">Total Users</h4>
          <p className="text-2xl font-bold text-blue-600">1,250</p>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-gray-700">Active Projects</h4>
          <p className="text-2xl font-bold text-green-600">42</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-gray-700">Pending Tasks</h4>
          <p className="text-2xl font-bold text-red-600">15</p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="mt-8">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Overview</h4>
        <p className="text-gray-600">
          This is your personal dashboard. Here you can manage your projects, monitor active users, and check pending tasks. Everything you need is just a few clicks away.
        </p>
      </div>

      {/* Latest Activity */}
      <div className="mt-8">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Latest Activity</h4>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4">
            <div className="bg-green-500 text-white p-2 rounded-full">
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M7 8V5a3 3 0 016 0v3h4v10H3V8h4z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Project 'X' completed</p>
              <p className="text-sm text-gray-500">Completed by John Doe</p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="bg-blue-500 text-white p-2 rounded-full">
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 4a6 6 0 016 6v4a6 6 0 01-12 0V10a6 6 0 016-6z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-800">New User Registered</p>
              <p className="text-sm text-gray-500">Anna Johnson has joined</p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="bg-yellow-500 text-white p-2 rounded-full">
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 4a6 6 0 016 6v4a6 6 0 01-12 0V10a6 6 0 016-6z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Task Due in 2 days</p>
              <p className="text-sm text-gray-500">Task 'Z' is due soon</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
