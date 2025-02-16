import React from "react";
import ReactDOM from "react-dom/client";

// Component import
import Header from "./src/components/Header";

// Data imports
import { swiggyData } from "./constants";

let restaurantCounter = 0;

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, costForTwo, areaName } = resData?.info;

  return (
    <div className="restaurantcard">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
      ></img>
      <div className="restaurant-info">
        <h3>{name}</h3>
        <h4>{costForTwo}</h4>
        <h4>{areaName}</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {swiggyData?.data?.cards?.map((restaurant) => {
          restaurantCounter++;
          return (
            <RestaurantCard
              key={restaurantCounter}
              resData={restaurant?.card?.card}
            />
          );
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="applayout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
