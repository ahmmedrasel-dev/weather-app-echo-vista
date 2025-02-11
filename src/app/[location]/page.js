import React from "react";
import LocationInfo from "../components/LocationInfo";

const page = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  return <LocationInfo lat={latitude} lon={longitude} />;
};

export default page;
