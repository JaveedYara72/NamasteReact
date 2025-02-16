// Component import
import RestaurantCard from "./RestaurantCard";

// Constant important
import { swiggyData } from "../../src/utils/mockData";

// Key for the props
let restaurantCounter = 0;

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

export default Body;
