import { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { barChart } from "../../api/Charts";
import { Card } from "../UI";

export const BarChart = () => {
  const backgroundColor = { female: "#98d89e", male: "#ee8484" };
  const [data, setData] = useState({ backgroundColor });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await barChart();
      setData(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card>
      <Bar
        data={{
          labels: data?.labels,
          datasets: [
            {
              label: "female",
              data: data?.female,
              backgroundColor: backgroundColor.female,
            },
            {
              label: "male",
              data: data?.male,
              backgroundColor: backgroundColor.male,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </Card>
  );
};
