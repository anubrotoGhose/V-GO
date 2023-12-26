import React from 'react';
import LoginScreen from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from "./components/NavBar";
import LeaveApplicationFormScreen from './pages/LeaveApplicationFormScreen';
import LeaveApprovalPage from './pages/LeaveApprovalPage';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element = {<Home />} />
        <Route path = '/login' element = {<LoginScreen />} />
        <Route path = '/home' element = {<Home />} />
        <Route path = '/leaveapplication' element = {<LeaveApplicationFormScreen />} />
        <Route path="/leaveapproval" element={<LeaveApprovalPage />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;