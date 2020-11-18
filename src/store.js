import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import house1 from "./Images/house-image/house1.png";
import house2 from "./Images/house-image/house2.png";
import house3 from "./Images/house-image/house3.png";
import house4 from "./Images/house-image/house4.png";
import house5 from "./Images/house-image/house5.png";
import house6 from "./Images/house-image/house6.png";

const fakeData = {
  houseData: [
    {
      title: "Washington Avenue",
      address: "Nasirabad H/S, Chattogram",
      bedroom: 3,
      bathroom: 2,
      price: 194,
      img: house1,
    },
    {
      title: "Family Apartment Three",
      address: "Nasirabad H/S, Chattogram",
      bedroom: 3,
      bathroom: 2,
      price: 356,
      img: house2,
    },
    {
      title: "Gorgeous House",
      address: "Nasirabad H/S, Chattogram",
      bedroom: 3,
      bathroom: 2,
      price: 256,
      img: house3,
    },
    {
      title: "Luxury Villa",
      address: "Nasirabad H/S, Chattogram",
      bedroom: 3,
      bathroom: 2,
      price: 345,
      img: house4,
    },
    {
      title: "Epic Huda Palacio",
      address: "Nasirabad H/S, Chattogram",
      bedroom: 3,
      bathroom: 2,
      price: 536,
      img: house5,
    },
    {
      title: "Washington Avenue",
      address: "Nasirabad H/S, Chattogram",
      bedroom: 3,
      bathroom: 2,
      price: 283,
      img: house6,
    },
  ],
};
const houseReducer = (state = fakeData, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(houseReducer, composeWithDevTools());
export default store;
