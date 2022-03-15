import React, { useContext, useState } from "react";
import RideCard from "../components/rideCard/RideCard";
import "./RidesPage.styles.scss";
import FilterIcon from "../assets/images/filters.svg";
import { RidesContext } from "../contexts/ridesContext";
import FilterPopup from "../components/filter/FilterPopup";

const Rides = () => {
  const [activeTab, setactiveTab] = useState(0);
  const tabs = ["Nearest rides", "Upcoming rides", "Past rides"];
  const [showFilter, setShowFilter] = useState(false);
  const {
    rides: ridesData,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
  } = useContext(RidesContext);
  const ridesArray = [
    ridesData.nearestRides,
    ridesData.upcomingRides,
    ridesData.pastRides,
  ];
  // const

  console.log({ selectedState, selectedCity });

  return (
    <div className="rides-wrapper">
      <div className="rides-header">
        <div className="ride-tabs">
          {tabs.map((tab, index) => (
            <div
              className={`tab ${activeTab === index ? "active" : ""}`}
              onClick={() => setactiveTab(index)}
              key={tab}
            >
              {tab} {index !== 0 && `(${ridesArray[index].length})`}
            </div>
          ))}
        </div>
        <div className="filters">
          <img
            onClick={() => setShowFilter((prev) => !prev)}
            src={FilterIcon}
            alt=""
            height={14}
            width={14}
          />
          <span onClick={() => setShowFilter((prev) => !prev)}>Filters</span>
          {showFilter && <FilterPopup />}
        </div>
      </div>
      <div className="rides-container">
        {!selectedState && selectedCity
          ? React.Children.toArray(
              ridesArray[activeTab]
                .filter((ride) => ride.city === selectedCity)
                .map((ride) => <RideCard ride={ride} />)
            )
          : selectedState
          ? selectedCity
            ? React.Children.toArray(
                ridesArray[activeTab]
                  .filter(
                    (ride) =>
                      ride.state === selectedState && ride.city === selectedCity
                  )
                  .map((ride) => <RideCard ride={ride} />)
              )
            : React.Children.toArray(
                ridesArray[activeTab]
                  .filter((ride) => ride.state === selectedState)
                  .map((ride) => <RideCard ride={ride} />)
              )
          : React.Children.toArray(
              ridesArray[activeTab].map((ride) => <RideCard ride={ride} />)
            )}
      </div>
    </div>
  );
};

export default Rides;
