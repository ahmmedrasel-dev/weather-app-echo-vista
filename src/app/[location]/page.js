import React from "react";
import LocationInfo from "../components/LocationInfo";
import { getResolveLatLong } from "../lib/location-api";
import NoLocationFound from "../components/NoLocationFound";

const page = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  const resolve = await getResolveLatLong(location, latitude, longitude);
  if (resolve.lat && resolve.lon) {
    return <LocationInfo lat={resolve.lat} lon={resolve.lon} />;
  } else {
    return <NoLocationFound />;
  }
};

export default page;
