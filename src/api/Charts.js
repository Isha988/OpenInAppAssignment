import axios from "axios";
const apiKey = "oERWNb2bbnQY0TDrkaENiQ==Y4EPhE2aj37Zatpg";

const config = {
  headers: {
    "X-Api-Key": apiKey,
  },
};

export const pieChart = async () => {
  const url = "https://api.api-ninjas.com/v1/airlines?name=indigo";
  const { data } = await axios.get(url, config);
  const { total, ...fleet } = data[0].fleet;
  return fleet;
};
