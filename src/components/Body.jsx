// Component import
import RestaurantCard from "./RestaurantCard";

// Constant important
import { swiggyData } from "../../src/utils/mockData";
import { useState, useEffect } from "react";

// Key for the props
let restaurantCounter = 0;

const Body = () => {
  // Writing useState hook
  const [listOfRestaurants, setListOfRestaurants] = useState(
    swiggyData?.data?.cards
  );

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log(listOfRestaurants);
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.card.card.info.avgRating < 4.0
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Filter Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => {
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

export default Body;
