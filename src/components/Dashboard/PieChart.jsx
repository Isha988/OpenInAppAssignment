import { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { pieChart } from "../../api/Charts";
import { Card, Toast, Loader } from "../UI";

export const PieChart = ({ className }) => {
  const backgroundColor = ["#98d89e", "#ee8484", "#f6dc7d", "#8a94e0"];
  const [data, setData] = useState({
    backgroundColor,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await pieChart();
      setData({
        ...data,
        labels: Object.keys(response),
        values: Object.values(response),
      });
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
        <div className="flex flex-wrap mb-8 items-center justify-between gap-x-4 gap-y-1">
          <h2 className="font-bold text-lg">Activities</h2>
          <p className="text-text-100 text-sm font-montserrat">
            May - June 2021
          </p>
        </div>
        {/* chart */}
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="max-h-[140px] flex-1">
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
          </div>
          {/*  labels */}
          <div className="flex-1 flex flex-wrap gap-2">
            {data?.labels?.map((label, index) => {
              const bg = `bg-[${data.backgroundColor[index]}]`;
              return (
                <div className="flex gap-3 min-w-[70px]">
                  <span className={`inline-block w-3 h-3 rounded-full ${bg}`} />
                  <div>
                    <p className="font-bold text-sm mb-1">{label}</p>
                    <p className="text-xs text-text-100">
                      {data.values[index]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </>
  );
};
