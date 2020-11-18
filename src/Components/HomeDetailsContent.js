import React from "react";
import homeDetails from "../Images/house-image/house6.png";
import BookingForm from "./BookingForm";
const HomeDetailsContent = () => {
  return (
    <>
      <div className="home_details_main_area">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-8">
              <img className="w-100 mb-4" src={homeDetails} alt="image" />
              <h2 className="h2-responsive text-dark">
                Family Apartment Three
              </h2>
              <p className="text-secondary mb-4">
                3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing
                Apartment for Rent in Rangs Malancha, Melbourne.
              </p>
              <h4 className="h4-responsive text-dark">Price Details-</h4>
              <p className="text-secondary mb-1">
                Rent/Month: $550 (negotiable)
              </p>
              <p className="text-secondary mb-1">
                Service Charge : 8,000/= Tk per month, subject to change
              </p>
              <p className="text-secondary mb-1">
                Security Deposit : 3 month’s rent
              </p>
              <p className="text-secondary mb-4">
                Flat Release Policy : 3 months earlier notice required
              </p>
              <h4 className="h4-responsive text-dark">Property Details-</h4>
              <p className="text-secondary mb-1">
                Address & Area : Rangs Malancha, House-68, Road-6A (Dead End
                Road), Dhanmondi Residential Area.
              </p>
              <p className="text-secondary mb-1">Flat Size : 3000 Sq Feet.</p>
              <p className="text-secondary mb-1">
                Floor : A5 (5th Floor) (6 storied Building ) (South Facing Unit)
              </p>
              <p className="text-secondary mb-1">
                Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious
                Drawing, Dining & Family Living Room, Highly Decorated Kitchen
                with Store Room and Servant room with attached Toilet.
              </p>
              <p className="text-secondary mb-1">
                Facilities : 1 Modern Lift, All Modern Amenities & Semi
                Furnished. Additional Facilities : a. Electricity with full
                generator load, b. Central Gas Geyser, c. 2 Car Parking with 1
                Driver’s Accommodation, d. Community Conference Hall, e. Roof
                Top Beautified Garden and Grassy Ground, f. Cloth Hanging
                facility with CC camera
              </p>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDetailsContent;
