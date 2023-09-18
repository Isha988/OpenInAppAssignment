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

export const barChart = async () => {
  const url = "https://api.api-ninjas.com/v1/country?name=india";
  const { data } = await axios.get(url, config);
  const country = data[0];
  const response = {
    female: [
      country.primary_school_enrollment_female,
      country.secondary_school_enrollment_female,
      country.post_secondary_enrollment_female,
    ],
    male: [
      country.primary_school_enrollment_male,
      country.secondary_school_enrollment_male,
      country.post_secondary_enrollment_male,
    ],
    labels: ["primary", "secondary", "post secondary"],
  };
  return response;
};
