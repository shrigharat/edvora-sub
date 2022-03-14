import React from "react";
import "./RideCard.styles.scss";
import MapImg from "../../assets/images/map.jpg";

const RideCard = ({ride}) => {
  return (
    <div className="ride-card">
      <div className="wrapper">
        <div className="image">
          <img src={MapImg} alt="" />
        </div>
        <div className="info">
          <span>Ride Id: {ride.id}</span>
          <span>Origin Station: {ride.origin_station_code}</span>
          <span>station_path: [...ride.station_path]</span>
          <span>Date: {new Date(ride.date).getTime()}</span>
          <span>Distance: 2</span>
        </div>
        <div className="location-info">
          <div className="city">City</div>
          <div className="state">State</div>
        </div>
      </div>
    </div>
  );
};

export default RideCard;
