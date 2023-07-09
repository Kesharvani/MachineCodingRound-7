import { CommonCard } from "../../common/CommonCard";
import { useParams } from "react-router-dom";
import { useTravel } from "../../context/TravelContext";
export const Destinations = () => {
  const { countryId } = useParams();
  const { currentContinentData } = useTravel();

  const filteredCountryData = currentContinentData.countries?.find(
    (item) => item.id === Number(countryId)
  );
  return (
    <div className="continent_container">
      <h4>Top Country in {} for next holiday</h4>
      <div className="card_container">
        {filteredCountryData?.destinations?.map((item) => {
          return (
            <CommonCard
              imageUrl={item?.image}
              name={item?.name}
              id={item?.id}
              key={item?.id}
            />
          );
        })}
      </div>
    </div>
  );
};
