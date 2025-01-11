// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Setting from './Pages/Setting';
import PageNotFound from './components/PageNotFound'; // Import the PageNotFound component
import Form1 from './forms/Form1';
import Form2 from './forms/Form2';
import Form3 from './forms/Form3';
import Form4 from './forms/Form4';
import Form5 from './forms/Form5';
import Form6 from './forms/Form6';
import Form7 from './forms/Form7';

// Protected Route component to protect dashboard and nested routes
const ProtectedRoute = ({ element }) => {
  const { authToken } = useAuth();
  return authToken ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Redirect to login if path is / */}
          <Route path="/" element={<Navigate to="/login" />} />
          
          {/* Public routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected routes */}
          <Route 
            path="/dashboard" 
            element={<ProtectedRoute element={<Dashboard />} />} 
          >
            {/* Nested routes inside the Dashboard layout */}
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Setting />} />
            <Route path="forms1" element={<Form1/>}/>
            <Route path="forms2" element={<Form2/>}/>
            <Route path="forms3" element={<Form3/>}/>
            <Route path="forms4" element={<Form4/>}/>
            <Route path="forms5" element={<Form5/>}/>
            <Route path="forms6" element={<Form6/>}/>
            <Route path="forms7" element={<Form7/>}/>
            
          </Route>
          
          {/* Catch-all route for undefined pages */}
          <Route path="*" element={<PageNotFound />} /> 
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
