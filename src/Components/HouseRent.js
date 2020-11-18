import React from "react";
import { useSelector } from "react-redux";
import HouseRentCard from "./HouseRentCard";

const HouseRent = () => {
  const houseData = useSelector((state) => state.houseData);
  //   console.log(houseData);
  return (
    <>
      <div style={{ background: " #f1f6f4" }}>
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-12 col-sm-12 col-12 text-center">
              <p className="text-primary mb-0">House Rent</p>
              <h1>
                Discover the latest Rent <br />
                available today
              </h1>
            </div>
          </div>
          <div className="row py-5">
            {houseData.map((data, index) => (
              <HouseRentCard data={data} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseRent;
