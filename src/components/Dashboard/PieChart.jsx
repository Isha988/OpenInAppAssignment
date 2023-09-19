import { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { pieChart } from "../../api/Charts";
import { Card } from "../UI";

export const PieChart = ({className}) => {
  const backgroundColor = ["#98d89e", "#ee8484", "#f6dc7d", "#8a94e0"];
  const [data, setData] = useState({labels:["a", "s", "d"], values:[12, 50, 40]});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await pieChart();
      setData({
        labels: Object.keys(response),
        values: Object.values(response),
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <Card className={className}>
      <Doughnut
        type="doughnut"
        data={{
          labels: data?.labels,
          datasets: [
            {
              data: data?.values,
              backgroundColor: backgroundColor,
              hoverOffset: 4,
            },
          ],
        }}
        options={{
          cutout: "80%",
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
