import axios from "axios";

export const getSearchTours = async ({ request }) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q")?.toLowerCase() || "";

  const { data } = await axios.get(
    "https://raw.githubusercontent.com/Ehorstar/ReactTravelingProject/main/tours.json"
  );

  return data.filter((tour) =>
    tour.to.toLowerCase().includes(q)
  );
};
