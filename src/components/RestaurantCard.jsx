import { swiggyURL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, costForTwo, areaName } = resData.info;

  return (
    <div className="restaurantcard">
      <img src={swiggyURL + `${cloudinaryImageId}`}></img>
      <div className="restaurant-info">
        <h3>{name}</h3>
        <h4>{costForTwo}</h4>
        <h4>{areaName}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
