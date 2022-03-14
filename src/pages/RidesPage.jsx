import React, { useState } from "react";
import { rides } from "../assets/dummyData/rides";
import RideCard from "../components/rideCard/RideCard";
import "./RidesPage.styles.scss";
import FilterIcon from "../assets/images/filters.svg"

const Rides = () => {
  const [activeTab, setactiveTab] = useState(0);
  const tabs = ["Nearest rides", "Upcoming rides", "Past rides"];

  return (
    <div className="rides-wrapper">
      <div className="rides-header">
        <div className="ride-tabs">
          {tabs.map((tab, index) => (
            <div
              className={`tab ${activeTab === index ? "active" : ""}`}
              onClick={() => setactiveTab(index)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="filters">
          <img src={FilterIcon} alt="" height={14} width={14}/>
          <span>Filters</span>
        </div>
      </div>
      <div className="rides-container">
        {rides.map((ride) => (
          <RideCard ride={ride} />
        ))}
      </div>
    </div>
  );
};

export default Rides;
