import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const MyBookingsMobileView = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/"); // Redirect to MyProfileMobileView component
  };

  const handleFilterClick = () => {
    console.log("Filter button clicked");
    // Add logic for filter functionality here
  };

  // Sample booking cards data (replace with actual data)
  
    const cards = [
        {
          id: 1,
          title: "Munnar : Honeymoon Package",
          imageUrl: "card-1.png",
          bookingStatus: "Booked",
          tag1: "Premium",
          tag1Img: "premium-icon.png",
          price: "₹7500",
          tag1bg: "#53E80D",
        },
        {
          id: 2,
          title: "Munnar : Honeymoon Package",
          imageUrl: "card-2.png",
          bookingStatus: "Cancelled",
          tag1: "Midrange",
          tag1Img: "midrange-icon.png",
          price: "₹7500",
          tag1bg: "#E8AB0D9C",
        },
        {
          id: 3,
          title: "Munnar : Honeymoon Package",
          imageUrl: "card-3.png",
          bookingStatus: "Booked",
          tag1: "Premium",
          tag1Img: "premium-icon.png",
          price: "₹7500",
          tag1bg: "#53E80D",
        },
        {
          id: 4,
          title: "Munnar : Honeymoon Package",
          imageUrl: "card-4.png",
          bookingStatus: "Refunded",
          tag1: "Premium",
          tag1Img: "premium-icon.png",
          price: "₹7500",
          tag1bg: "#53E80D",
        },
        {
          id: 5,
          title: "Munnar : Honeymoon Package",
          imageUrl: "card-5.png",
          bookingStatus: "Booked",
          tag1: "Budget",
          tag1Img: "Budget-icon.png",
          price: "₹7500",
          tag1bg: "#0DC1E859",

        },
        {
          id: 6,
          title: "Munnar : Honeymoon Package",
          imageUrl: "card-5.png",
          bookingStatus: "Booked",
          tag1: "Budget",
          tag1Img: "budget-icon.png",
          price: "₹7500",
          tag1bg: "#0DC1E859",

        },
    // Add more booking card objects as needed
  ];

  return (
    <div className="p-4 bg-white h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <button onClick={handleBackClick} className="text-xl text-[#222222] ">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <h1 className="text-base text-[#222222] font-medium">My Bookings</h1>
        <div></div> {/* Add any additional right-side content if needed */}
      </div>

      {/* Booking Cards */}
      <div className="flex flex-col w-full h-[1070px] items-center justify-center flex-grow">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white m-1 rounded-3xl border border-gray-300 relative flex w-full overflow-hidden"
          >
            <div className="relative rounded-lg overflow-hidden p-2 w-[401px] h-[243px] ">
              <img
                src={card.imageUrl}
                alt={`Package ${card.id}`}
                className="object-cover rounded-tl-2xl rounded-bl-2xl w-full h-[150px]"
              />
            </div>

            <div className="flex flex-col ml-2 w-full">
              <div className="flex items-center mt-[17px] justify-between">
                <h4 className="text-sm font-medium text-[#000000] tracking-normal ">
                  {card.title}
                </h4>
              </div>

              <div className="flex items-center text-[#000000] mt-2">
                <div className="flex items-center">
                  {card.bookingStatus === "Booked" ? (
                    <div className="w-3 h-3 bg-[#26A541] rounded-full mr-1" />
                  ) : card.bookingStatus === "Cancelled" ? (
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-1" />
                  ) : card.bookingStatus === "Refunded" ? (
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1" />
                  ) : null}
                  <span className="text-[10px] font-normal text-[#000000] ">
                    {card.bookingStatus} on Jan 22, 2023
                  </span>
                </div>
              </div>
              <div className=" text-[10px] font-normal text-[#787878]">
                Booking ID CMP 23456
              </div>
              {card.id === 1 || card.id === 3 ? (
                <div className="text-[10px] text-[#000000] font-normal ">
                  Upcoming Journey with Our Package
                </div>
              ) : card.id === 2 ? (
                <div className="text-[10px] text-[#000000] font-normal ">
                  Journey Cancellation for our package completed
                </div>
              ) : card.id === 4 ? (
                <div className="text-[10px] text-[#000000] font-normal ">
                  Refund Process Completed for Our Package
                </div>
              ) : (
                <div className="text-[10px] text-[#000000] font-normal ">
                  Journey Completed with Our Package
                </div>
              )}
              {card.id === 5 || card.id === 6 ? (
                <div className="flex items-center ">
                  <img
                    src="blue-star-icon.png"
                    alt="Star Icon"
                    className="w-3 h-3 mr-1"
                  />
                  <a
                    href="#"
                    className="text-[#2874F0] text-[10px] font-medium underline "
                  >
                    Rate and review the package
                  </a>
                </div>
              ) : null}
              {card.id === 1 ? (
                <a
                  href="#"
                  className="text-[#787878] underline text-[10px] font-medium "
                >
                  Click here to cancel
                </a>
              ) : card.id === 3 ? (
                <a
                  href="#"
                  className="text-[#FF9F00] underline text-[10px] font-medium "
                >
                  Click here to cancel and refund
                </a>
              ) : null}

              {/* Tag and Price in One Line */}
              <div className="flex items-center mr-2">
                <div
                  style={{ backgroundColor: card.tag1bg }}
                  className="rounded-full w-4 h-4 flex items-center justify-center mr-1"
                >
                  <img
                    src={card.tag1Img}
                    alt={`Tag Icon 1 for ${card.tag1}`}
                    className="w-2 h-3"
                  />
                </div>
                <span className="text-[10px] font-normal text-[#787878]">
                  {card.tag1}
                </span>
                <span className="text-[#000000] font-medium text-[15px] ml-auto">
                  {card.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed z-10 bottom-0 left-0 right-0 bg-[#F2F2F2] p-4 flex justify-around">
      <div className="button flex items-center cursor-pointer" >
        <img src="filters-vector.png" alt="Filters Icon" className="w-[16px] h-[16px] mr-1" />
        <p className="text-[#222222]">Filters</p> 
      </div>
    </div>
    </div>
  );
};

export default MyBookingsMobileView;
