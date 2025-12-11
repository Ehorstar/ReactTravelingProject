import axios from "axios";

export const getTours = async () => {
  const response = await axios.get(
    "https://raw.githubusercontent.com/Ehorstar/ReactTravelingProject/main/tours.json"
  );

  return response.data;
};
