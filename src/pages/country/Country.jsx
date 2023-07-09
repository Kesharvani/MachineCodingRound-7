import { useParams } from "react-router-dom";
import { data } from "../../db";
import { CommonCard } from "../../common/CommonCard";
import { useTravel } from "../../context/TravelContext";
import { useEffect } from "react";

export const Country = () => {
  const { continentId } = useParams();
  const filteredArrayContinent = data?.continents?.find(
    (item) => item.id === Number(continentId)
  );
  const { setCurrentContinentData } = useTravel();

  useEffect(() => {
    setCurrentContinentData({ ...filteredArrayContinent });
  }, [filteredArrayContinent]);

  return (
    <div className="continent_container">
      <h4>Top Country For {filteredArrayContinent?.name} in next Holiday</h4>
      <div className="card_container">
        {filteredArrayContinent?.countries?.map((item) => {
          return (
            <CommonCard
              imageUrl={item?.image}
              name={item?.name}
              id={item?.id}
              key={item?.id + item?.name}
              country
            />
          );
        })}
      </div>
    </div>
  );
};
