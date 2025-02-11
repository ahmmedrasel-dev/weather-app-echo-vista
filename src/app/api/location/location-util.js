const data = [
  {
    location: "Dhaka",
    latitude: 23.777176,
    longitude: 90.399452,
  },
  {
    location: "Kalkata",
    latitude: 22.565571,
    longitude: 88.370209,
  },
  {
    location: "London",
    latitude: 51.50735,
    longitude: -0.12776,
  },
  {
    location: "Dammam",
    latitude: 26.420683,
    longitude: 50.088795,
  },
  {
    location: "Riayd",
    latitude: 26.02565,
    longitude: 43.476921,
  },
  {
    location: "Makkah",
    latitude: 21.389082,
    longitude: 39.85791,
  },
  {
    location: "Madinah",
    latitude: 24.524654,
    longitude: 39.569183,
  },
  {
    location: "Frankfurt",
    latitude: 50.110924,
    longitude: 8.682127,
  },
];

const getLocation = () => {
  return data;
};

const getLocationByName = (location) => {
  if (!location) return null;
  const found = data.find(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );
  return found || {};
};

export { getLocation, getLocationByName };
