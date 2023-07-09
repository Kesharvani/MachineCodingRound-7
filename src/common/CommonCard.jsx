import "./CommonCard.css";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
export const CommonCard = ({
  name,
  imageUrl,
  id,
  continent,
  country,
  destination
}) => {
  const navigate = useNavigate();
  const imageHandler = (id) => {
    if (continent) {
      navigate(`continent/${id}`);
    }
    if (country) {
      navigate(`/country/${id}`);
    }
    if (destination) {
      navigate(`/destination${id}`);
    }
  };
  return (
    <div className="card">
      <img
        src={imageUrl}
        alt="continentImage"
        width="200px"
        height="170px"
        onClick={() => imageHandler(id)}
      />
      <div className="name_location">
        <CiLocationOn size={22} className="location" />
        <span className="name">{name}</span>
      </div>
    </div>
  );
};
