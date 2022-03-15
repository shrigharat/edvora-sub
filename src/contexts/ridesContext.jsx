import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const RidesContext = createContext();

const RidesProvider = ({ children }) => {
  const ridesURL = "https://assessment.api.vweb.app/rides";
  const userURL = "https://assessment.api.vweb.app/user";

  const [rides, setRides] = useState([]);
  const [pastRides, setPastRides] = useState([]);
  const [upcomingRides, setUpcomingRides] = useState([]);
  const [nearestRides, setNearestRides] = useState([]);
  const [states, setStates] = useState({});
  const [cities, setCities] = useState([]);
  const [user, setUser] = useState(undefined);

  const fetchData = async () => {
    try {
      const ridesRes = await axios.get(ridesURL);
      const userRes = await axios.get(userURL);
      setRides(ridesRes.data);
      setUser(userRes.data);
      const now = Date.now();
      const past = [],
        upcoming = [];
      let near = [];
      const paths = {};
      const statesObj = {};
      const citiesArr = [];
      ridesRes.data.forEach((ride) => {
        //set the ride at distance key
        let minDiff = Number.MAX_SAFE_INTEGER;
        ride.station_path.forEach((code) => {
          if (Math.abs(code - userRes.data.station_code) < minDiff) {
            minDiff = Math.abs(code - userRes.data.station_code);
          }
        });
        if (!paths.hasOwnProperty(minDiff)) {
          paths[minDiff] = [];
        }
        paths[minDiff].push({ ...ride, distance: minDiff });

        //logic for checking if ride was in past or will be in future
        if (Date.parse(ride.date) > now) {
          upcoming.push({ ...ride, distance: minDiff });
        } else {
          past.push({ ...ride, distance: minDiff });
        }

        //constructing states and cities
        if (!statesObj.hasOwnProperty(ride.state)) {
          statesObj[ride.state] = [];
        }
        statesObj[ride.state].push(ride.city);
        citiesArr.push(ride.city);
      });
      Object.keys(paths)
        .sort((a, b) => a - b)
        .forEach((key) => {
          // console.log({ key });
          near = [...near, ...paths[key]];
          // console.log("Near:", near)
        });
      console.log(paths);
      console.log(near);
      setStates(statesObj);
      setCities(citiesArr);
      setNearestRides(near);
      setPastRides(past);
      setUpcomingRides(upcoming);
    } catch (error) {
      console.log("Error while fetching data...");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <RidesContext.Provider
      value={{
        states,
        cities,
        rides: { nearestRides, pastRides, upcomingRides },
        user,
      }}
    >
      {children}
    </RidesContext.Provider>
  );
};

export default RidesProvider;
