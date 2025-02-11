import WeatherComponets from "@/app/components/WeatherComponets";
import React from "react";

const weather = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  return <WeatherComponets lat={latitude} lon={longitude} />;
};

export default weather;
