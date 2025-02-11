import WindComponents from "@/app/components/WindComponents";
import React from "react";

const wind = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  return <WindComponents lan={latitude} lon={longitude} />;
};

export default wind;
