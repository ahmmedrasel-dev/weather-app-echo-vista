import AQIComponents from "@/app/components/AQIComponents";
import React from "react";

const AQIPage = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  return <AQIComponents lat={latitude} lon={longitude} />;
};

export default AQIPage;
