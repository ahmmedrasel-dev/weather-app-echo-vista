import NoLocationFound from "@/app/components/NoLocationFound";
import WindComponents from "@/app/components/WindComponents";
import { getResolveLatLong } from "@/app/lib/location-api";
import React from "react";

const wind = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  const resolve = await getResolveLatLong(location, latitude, longitude);
  if (resolve.lat && resolve.lon) {
    return <WindComponents lat={resolve.lat} lon={resolve.lon} />;
  } else {
    return <NoLocationFound />;
  }
};

export default wind;
