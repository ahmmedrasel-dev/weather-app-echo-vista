export const getLatAndLonList = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/location");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getLocaionInfoData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getLatAndLon = async (location) => {
  try {
    const response = await fetch(
      `http://locahost:3000/api/locations/${location}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getResolveLatLong = async (location, lat, lon) => {
  if (lat & lon) {
    return { lat, lon };
  }

  const locationLatLong = await getLatAndLon(location);
  if (locationLatLong.latitude & locationLatLong.longitude) {
    const lat = locationLatLong.latitude;
    const lon = locationLatLong.longitude;
    return { lat, lon };
  }
};
