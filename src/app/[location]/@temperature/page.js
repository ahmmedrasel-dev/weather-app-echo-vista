import NoLocationFound from "@/app/components/NoLocationFound";
import TemperatureComponents from "@/app/components/TemperatureComponents";
import { getResolveLatLong } from "@/app/lib/location-api";
import React from "react";

const temperature = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  const resolve = await getResolveLatLong(location, latitude, longitude);
  if (resolve?.lat && resolve?.lon) {
    return <TemperatureComponents lat={resolve.lat} lon={resolve.lon} />;
  } else {
    return <NoLocationFound />;
  }
};

export default temperature;
