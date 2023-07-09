import "./Continent.css";
import { data } from "../../db";
import { CommonCard } from "../../common/CommonCard";
export const Continent = () => {
  return (
    <div className="continent_container">
      <h2>Welcome to Trip Advisor</h2>
      <h4>To Continent For Your Next Holiday</h4>
      <div className="card_container">
        {data?.continents?.map((item) => {
          return (
            <CommonCard
              imageUrl={item?.image}
              name={item?.name}
              id={item?.id}
              key={item.id}
              continent
            />
          );
        })}
      </div>
    </div>
  );
};
