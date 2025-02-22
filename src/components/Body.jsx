const cors = require("cors");

// Component import
import RestaurantCard from "./RestaurantCard";

// Constant important
import { swiggyData } from "../../src/utils/mockData";
import { useState, useEffect } from "react";

// Key for the props
let restaurantCounter = 0;

const Body = () => {
  // Writing useState hook
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalRestaurants, setOriginalRestaurants] = useState([]);

  // writing useEffect hook, we use this, for any information to be loaded after the page is loaded.
  useEffect(() => {
    fetchData();
  }, []);

  // writing a fetch call to swiggy's public api
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setOriginalRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant?.info?.avgRating > 4.0
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Filter Restaurants
        </button>
        <button
          className="reset-btn"
          onClick={() => {
            setListOfRestaurants(originalRestaurants);
          }}
        >
          Reset Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => {
          restaurantCounter = 0;
          return (
            <RestaurantCard key={restaurantCounter++} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
