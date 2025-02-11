import AQIComponents from "@/app/components/AQIComponents";
import NoLocationFound from "@/app/components/NoLocationFound";
import { getResolveLatLong } from "@/app/lib/location-api";
import React from "react";

const AQIPage = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  const resolve = await getResolveLatLong(location, latitude, longitude);

  if (resolve?.lat && resolve?.lon) {
    return <AQIComponents lat={resolve.lat} lon={resolve.lon} />;
  } else {
    return <NoLocationFound />;
  }
};

export default AQIPage;
