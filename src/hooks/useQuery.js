import { useQuery } from "@tanstack/react-query";
import api from "../api/api"




export const useFetchMyShortUrls = (token, onError) => {
  return useQuery({
    queryKey: ["my-shortenurls"],
    queryFn: async () => {
      const res = await api.get("/api/urls/myurls", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
      return res.data;
    },
    select: (data) => {
      const sortedData = data.sort(
        (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
      );
      return sortedData;
    },
    onError,
    staleTime: 5000,
  });
};




export const useFetchTotalClicks = (token, onError) => {
  return useQuery({
    queryKey: ["url-totalclick"],
    queryFn: async () => {
      const res = await api.get(
        "/api/urls/totalClicks?startDate=2024-01-01&endDate=2030-12-31",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      return res.data;
    },
    select: (data) => {
      // Convert object {date: count} → array [{ clickDate, count }]
      const convertToArray = Object.keys(data).map((key) => ({
        clickDate: key,
        count: data[key],
      }));
      return convertToArray;
    },
    onError,
    staleTime: 5000,
  });
};
