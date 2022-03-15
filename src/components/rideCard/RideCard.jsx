import React from "react";
import "./RideCard.styles.scss";
import MapImg from "../../assets/images/map.jpg";
import moment from "moment";

const RideCard = ({ride}) => {
  const rideDate = new Date(ride.date);
  return (
    <div className="ride-card">
      <div className="wrapper">
        <div className="image">
          <img src={MapImg} alt="" />
        </div>
        <div className="info">
          <span>Ride Id: {ride.id}</span>
          <span>Origin Station: {ride.origin_station_code}</span>
          <span>station_path: [{[...ride.station_path].join(',')}]</span>
          <span>Date: {moment(rideDate).format("Do MMM YYYY hh:mm")}</span>
          <span>Distance: {ride.distance}</span>
        </div>
        <div className="location-info">
          <div className="city">{ride.city}</div>
          <div className="state">{ride.state}</div>
        </div>
      </div>
    </div>
  );
};

export default RideCard;
