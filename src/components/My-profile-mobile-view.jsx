// MyProfileMobile.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faChevronLeft, faChevronRight, faPhone, faEnvelope, faMapMarkerAlt, faEye, faBriefcase, faBookmark, faEdit, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const MyProfileMobile = () => {
  return (
    <div className="p-4 bg-white">
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => console.log('Go back')} className="text-xl text-[#222222]">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <h1 className="text-base text-[#222222] font-medium">My Profile</h1>
        <div></div> {/* Add any additional right-side content if needed */}
      </div>
      <div className="flex flex-col items-center mt-8 mb-4">
        <img
          src="Myprofile.png" // Replace with your actual profile photo URL
          alt="Profile"
          className="w-[126px] h-[126px] rounded-full"
        />
        <h2 className="text-xl text-[#222222] font-medium mt-6">John wick</h2>
        <p className="text-sm text-[#404040] font-light">UI/UX designer</p>
      </div>
      <div className="flex flex-col items-center mb-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faPhone} className="text-[#404040] mr-2" />
          <p className="text-sm font-light text-[#404040] mr-4">+91 9087 6543 21</p>
          <FontAwesomeIcon icon={faEnvelope} className="text-[#404040] mr-2" />
          <p className="text-sm font-light text-[#404040] mr-4">johnwick@gmail.com</p>
        </div>
        <div className="flex items-center mt-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#404040] mr-2" />
          <p className="text-sm font-light text-[#404040] mr-4">Thiruvananthapuram, Kerala</p>
        </div>
      </div>
      {/* Horizontal line */}
      <hr className="my-4 mt-8 border-[#E6E6E6]" />
      {/* Buttons */}
      <div className="flex flex-col mt-8 items-start">
        <Link to="/full-profile" className="flex items-center mb-2 w-full justify-start">
          <FontAwesomeIcon icon={faEye} className="text-[#222222] mr-2" />
          <span className=" text-[#222222] text-base font-normal">View Full Profile</span>
          <FontAwesomeIcon icon={faChevronRight} className="text-[#222222] ml-auto" />
        </Link>
        <Link to="/my-bookings" className="flex items-center mb-2 mt-6 w-full justify-start">
          <FontAwesomeIcon icon={faBriefcase} className="text-[#222222] mr-2" />
          <span className=" text-[#222222] text-base font-normal">My Bookings</span>
          <FontAwesomeIcon icon={faChevronRight} className="text-[#222222] ml-auto" />
        </Link>
        < Link to="/saved-packages" className="flex items-center mt-6 w-full justify-start">
          <FontAwesomeIcon icon={faBookmark} className="text-[#222222] mr-2" />
          <span className=" text-[#222222] text-base font-normal">Saved Packages</span>
          <FontAwesomeIcon icon={faChevronRight} className="text-[#222222] ml-auto" />
        </Link>
      </div>
      {/* Additional horizontal line */}
      <hr className="my-4 mt-6 border-[#E6E6E6]" />
      {/* Edit Profile and Exit buttons */}
      <div className="flex flex-col mt-6 items-start">
        <button className="flex items-center mb-2 w-full justify-start">
          <FontAwesomeIcon icon={faEdit} className="text-[#222222] mr-2" />
          <span className=" text-[#222222] text-base font-normal">Edit Profile</span>
          <FontAwesomeIcon icon={faChevronRight} className="text-[#222222] ml-auto" />
        </button>
        <button className="flex items-center mt-6 w-full justify-start">
          <FontAwesomeIcon icon={faSignOutAlt} className="text-[#222222] mr-2" />
          <span className=" text-[#222222] text-base font-normal">Exit</span>
          <FontAwesomeIcon icon={faChevronRight} className="text-[#222222] ml-auto" />
        </button>
      </div>
    </div>
  );
};

export default MyProfileMobile;
