import Image from "next/image";
import React from "react";
import Card from "./Card";
import { getWindData } from "../lib/weather-api";

const WindComponents = async ({ lan, lon }) => {
  const { speed, deg } = await getWindData(lan, lon);
  return (
    <Card>
      <h6 className="feature-name">Wind</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icon_wind.png"
          alt="rain icon"
          width={80}
          height={80}
        />
        <h3 className="feature-title">{speed} meters/sec</h3>
        <span className="feature-name">{deg} degrees</span>
      </div>
    </Card>
  );
};

export default WindComponents;
