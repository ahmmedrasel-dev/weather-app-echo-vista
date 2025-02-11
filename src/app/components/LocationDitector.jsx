"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const LocationDitector = () => {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParams);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((postion) => {
        params.set("latitude", postion.coords.latitude);
        params.set("longitude", postion.coords.longitude);
        setLoading(false);
        router.push(`/courrent?${params.toString()}`);
      });
    }
  }, [pathname, searchParams]);

  return (
    <div className="flex flex-col justify-center items-center bg-slate-700 h-screen">
      {loading && (
        <>
          <Image
            src={"/location.gif"}
            width={500}
            height={500}
            alt="loading image"
          />
          <p className="text-4xl text-center text-white">Location Detector</p>
        </>
      )}
    </div>
  );
};

export default LocationDitector;
