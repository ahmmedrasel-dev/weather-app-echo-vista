import NoLocationFound from "@/app/components/NoLocationFound";
import WeatherComponets from "@/app/components/WeatherComponets";
import { getResolveLatLong } from "@/app/lib/location-api";
import React from "react";

const weather = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  const resolve = await getResolveLatLong(location, latitude, longitude);
  if (resolve?.lat && resolve?.lon) {
    return <WeatherComponets lat={resolve.lat} lon={resolve.lon} />;
  } else {
    return <NoLocationFound />;
  }
};

export default weather;
