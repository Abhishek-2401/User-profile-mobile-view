import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faCalendarAlt, faCheck, faEdit } from '@fortawesome/free-solid-svg-icons'; // Changed faEdit to faCheck for the green tick icon
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FullProfileMobileView = () => {
  const [editMode, setEditMode] = useState(false);
  const [selectedGender, setSelectedGender] = useState('Male');
  const [selectedCountryCode, setSelectedCountryCode] = useState('+91');
  const [selectedDateOfBirth, setSelectedDateOfBirth] = useState(new Date('2001-07-16'));
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleCountryCodeChange = (e) => {
    setSelectedCountryCode(e.target.value);
  };

  const handleBackClick = () => {
    navigate('/'); // Navigate to MyProfileMobileView component
  };

  return (
    <div className="flex justify-center w-100% overflow-hidden items-center h-full">
      <div className=" w-full mt-2 bg-white">
        <div className="flex items-center p-2 justify-between mb-4">
          <button onClick={handleBackClick} className="text-xl  text-[#222222]">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <h1 className="text-base  font-medium text-[#222222]">Full Profile</h1>
          <div
            className={`h-10 w-10  rounded-full flex items-center justify-center cursor-pointer ${
              editMode ? '' : 'bg-transparent' // Change bg color or remove it based on editMode
            }`}
            onClick={handleEditClick}
          >
            <FontAwesomeIcon
              icon={editMode ? faCheck : faEdit} // Change icon based on editMode
              className={`text-[#000000] text-lg ${editMode ? 'text-[#1ED760] text-xl' : 'text-[#000000] '}`}
            />
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <img
            src="Myprofile.png" // Replace with your actual profile photo URL
            alt="Profile"
            className="w-[126px] h-[126px] rounded-full"
          />
        </div>


        <div className="p-4 mr-4">
          <div className="mb-4 ">
          
            <div className="mb-6 border-[1px] w-full  border-[#C2C2C2] rounded-xl h-14   relative flex items-center">
              <label
                htmlFor="First Name"
                className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]"
              >
                First Name
              </label>
              <input
                type="First Name"
                id="First Name"
                className="w-full p-2 border-none text-xs ml-3 font-medium text-[#222222] focus:outline-none bg-transparent "
                placeholder=""
                value="John"
                readOnly={!editMode}
                required
              />
            </div>
            <div className="mb-6 border-[1px] w-full border-[#C2C2C2] rounded-xl h-14  relative flex items-center">
              <label
                htmlFor="Last Name"
                className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]"
              >
                Last Name
              </label>
              <input
                type="Last Name"
                id="Last Name"
                className="w-full p-2 border-none text-xs ml-3 font-medium text-[#222222] focus:outline-none bg-transparent "
                placeholder=""
                value="Wick"
                readOnly={!editMode}
                required
              />
            </div>
            <div className="mb-6 border-[1px] w-full border-[#C2C2C2] rounded-xl h-14  relative flex items-center">
              <label
                htmlFor="Occupation"
                className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]"
              >
                Occupation
              </label>
              <input
                type="Occupation"
                id="Occupation"
                className="w-full p-2 border-none text-xs ml-3 font-medium text-[#222222] focus:outline-none bg-transparent "
                placeholder=""
                value="UI/UX Designer"
                readOnly={!editMode}
                required
              />
            </div>
            <div className="mb-6 border-[1px] w-full border-[#C2C2C2] rounded-xl h-14  relative flex items-center">
              <label
                htmlFor="Phone Number"
                className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]"
              >
                Phone Number
              </label>
              <div className="relative flex items-center">
                {editMode ? (
                  <select
                    value={selectedCountryCode}
                    onChange={handleCountryCodeChange}
                    className="w-18 p-2  border-none text-xs font-medium text-[#787878] focus:outline-none bg-transparent"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                  </select>
                ) : (
                  <p className="text-xs font-medium text-[#222222] ml-3">{selectedCountryCode}</p>
                )}
                <input
                  type="text"
                  id="Phone Number"
                  className="w-full p-2 border-none text-xs font-medium text-[#222222] focus:outline-none bg-transparent  "
                  placeholder=""
                  value="234 567 8901"
                  readOnly={!editMode} // ReadOnly when editMode is false
                  required
                />
              </div>
            </div>
            <div className="mb-6 border-[1px] w-full border-[#C2C2C2] rounded-xl h-14 w relative flex items-center">
              <label
                htmlFor="Email ID"
                className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]"
              >
                Email ID
              </label>
              <input
                type="Email ID"
                id="Email ID"
                className="w-full p-2 border-none text-xs ml-3 font-medium text-[#222222] focus:outline-none bg-transparent "
                placeholder=""
                value="johnwick@gmail.com"
                readOnly
                required
              />
            </div>
            <div className="mb-6 border-[1px] w-full border-[#C2C2C2] rounded-xl h-14  relative flex items-center">
              <label
                htmlFor="Location"
                className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]"
              >
                Location
              </label>
              <input
                type="Location"
                id="Location"
                className="w-full p-2 border-none text-xs ml-3 font-medium text-[#222222] focus:outline-none bg-transparent z-10"
                placeholder=""
                value="Kerala"
                readOnly
                required
              />
            </div>
            <div className="mb-6 border-[1px] w-full border-[#C2C2C2] rounded-xl h-14  relative flex items-center">
              <label
                htmlFor="Gender"
                className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]"
              >
                Gender
              </label>
              {editMode ? (
                <select
                  value={selectedGender}
                  onChange={handleGenderChange}
                  className="w-full p-2 border-none text-xs font-medium text-[#222222] mr-4 focus:outline-none bg-transparent z-10"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  {/* Add more gender options */}
                </select>
              ) : (
                <input
                  type="text"
                  id="Gender"
                  className="w-full p-4 border-none text-xs font-medium text-[#222222] focus:outline-none bg-transparent z-10"
                  placeholder=""
                  value={selectedGender}
                  readOnly
                  required
                />
              )}
            </div>
            <div className="mb-6 border-[1px] w-full border-[#C2C2C2] p-4 rounded-xl h-14 relative flex items-center">
              <label
                htmlFor="Date of birth"
                className="absolute left-4 text-xs -top-2 font-normal bg-white px-1 text-[#AEACAC]"
              >
                Date of birth
              </label>
              <div className="relative w-full flex items-center">
                {editMode ? (
                  <DatePicker
                    selected={selectedDateOfBirth}
                    onChange={(date) => setSelectedDateOfBirth(date)}
                    dateFormat="dd/MM/yyyy"
                    className="w-full p-2 mr-14 border-none text-xs  font-medium text-[#222222]  bg-white z-10"
                    placeholderText="DD/MM/YYYY"
                    required
                    locale="en-GB"
                    popperClassName="date-picker-popper"
                  />
                ) : (
                  <input
                    type="text"
                    id="Date of birth"
                    className="w-full  border-none text-xs font-medium text-[#222222] focus:outline-none bg-transparent z-10"
                    placeholder=""
                    value={selectedDateOfBirth.toLocaleDateString()}
                    readOnly
                    required
                    
                  />
                  
                  
                  
                )}
                {editMode && (
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="absolute right-0 text-gray-500 top-2 cursor-pointer"
                    onClick={handleEditClick}
                  />
                )}
              </div>
            </div>
            {/* Other input fields */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullProfileMobileView;
