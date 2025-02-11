"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getLatAndLonList } from "../lib/location-api";
import Link from "next/link";

const LocationSwitcher = () => {
  const [showLocationList, setShowLocationList] = useState(false);
  const [locationList, setLocationList] = useState([]);

  useEffect(() => {
    const fetchLocationList = async () => {
      const data = await getLatAndLonList();
      setLocationList(data);
    };
    fetchLocationList();
  }, []);
  return (
    <>
      <div className="relative">
        <button onClick={() => setShowLocationList(!showLocationList)}>
          <Image
            className="size-9"
            src="/link.svg"
            alt="link icon"
            width={24}
            height={24}
          />
        </button>
        {showLocationList && (
          <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
            <ul
              role="list"
              className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
            >
              {locationList.map((item) => (
                <li key={item.location}>
                  <Link
                    href={`/${item.location}?latitude=${item.latitude}&longitude=${item.longitude}`}
                  >
                    {item.location}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default LocationSwitcher;
