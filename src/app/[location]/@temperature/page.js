import TemperatureComponents from "@/app/components/TemperatureComponents";
import React from "react";

const temperature = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  return <TemperatureComponents lat={latitude} lon={longitude} />;
};

export default temperature;
