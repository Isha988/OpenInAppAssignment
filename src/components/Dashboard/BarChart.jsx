import { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { barChart } from "../../api/Charts";
import { Card, Loader, Toast } from "../UI";

export const BarChart = ({ className }) => {
  const backgroundColor = { female: "#98d89e", male: "#ee8484" };
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
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
    <>
      {error && <Toast message={error} />}
      <Card className={`p-6 px-8 rpunded-xl relative ${className}`}>
        {isLoading && <Loader />}
        {/* header */}
        <div className="mb-8">
          <h2 className="font-bold text-lg">Activities</h2>
          <div className="flex gap-4">
            <p className="text-text-100 text-sm font-montserrat flex-1">
              May - June 2021
            </p>
            <div className="text-sm">
              {" "}
              <span className="inline-block w-3 h-3 rounded-full bg-green-200 mr-2" />{" "}
              Guest
            </div>
            <div className="text-sm">
              {" "}
              <span className="inline-block w-3 h-3 rounded-full bg-red-200 mr-2" />{" "}
              User
            </div>
          </div>
        </div>
        {/* chart */}
        <div className="h-[210px]">
          <Bar
            data={{
              labels: data?.labels,
              datasets: [
                {
                  label: "female",
                  data: data?.female,
                  backgroundColor: backgroundColor.female,
                  barThickness: 45,
                  maxBarThickness: 38,
                  borderRadius: 5,
                },
                {
                  label: "male",
                  data: data?.male,
                  backgroundColor: backgroundColor.male,
                  barThickness: 48,
                  maxBarThickness: 38,
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                },
                y: {
                  ticks: {
                    maxTicksLimit: 5,
                  },
                },
              },
            }}
          />
        </div>
      </Card>
    </>
  );
};
