import React from "react";
import house1 from "../Images/house-image/house1.png";
import {
  faLocationArrow,
  faBed,
  faBath,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

const HouseRentCard = ({ data }) => {
  const { title, address, bedroom, bathroom, price, img } = data;
  const history = useHistory();
  const handleClick = () => {
    history.push("/homeDetails");
  };
  return (
    <>
      <div className="col-md-4 col-sm-6 col-12 mb-4">
        <div className="bg-white card border-0">
          <img className="w-100" src={img} alt="image" />
          <div className="p-4">
            <h6 className="text-primary mb-2">{title}</h6>
            <div className="mb-4">
              <p className="text-secondary mb-2">
                <small>
                  <FontAwesomeIcon className="mr-2" icon={faLocationArrow} />
                  {address}
                </small>
              </p>
              <div className="d-flex">
                <p className="text-secondary mr-5">
                  <small>
                    <FontAwesomeIcon className="mr-2" icon={faBed} />
                    {bedroom} Bedrooms
                  </small>
                </p>
                <p className="text-secondary">
                  <small>
                    <FontAwesomeIcon className="mr-2" icon={faBath} />
                    {bathroom} Bathroom
                  </small>
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <h3 className="text-primary">${price}</h3>
              <button onClick={handleClick} className="btn btn-primary">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseRentCard;
