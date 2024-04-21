import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyProfileMobile from './components/My-profile-mobile-view';
import FullProfileMobileView from './components/Full-profile-mobile-view';
import MyBookingsMobileView from './components/My-bookings-mobile-view' 
import SavedPackagesMobileView from './components/Saved-packages-mobile-view';
import './styles.css'// Import your FullProfileMobileView component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/full-profile" element={<FullProfileMobileView />} />
        <Route path="/" element={<MyProfileMobile />} />
        <Route path ="/my-bookings" element={<MyBookingsMobileView/>} />
        <Route path="/saved-packages" element ={<SavedPackagesMobileView/>} />
      </Routes>
    </Router>
  );
};

export default App;
