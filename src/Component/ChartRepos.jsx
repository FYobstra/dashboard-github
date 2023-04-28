import React, { useState, useEffect } from "react";
import { AiFillFileZip } from "react-icons/ai";
import ReactApexChart from "react-apexcharts";

export default function ChartRepos({ dataRepos }) {
  const [techData, setTechData] = useState({});

  useEffect(() => {
    const newTechData = {};
    dataRepos?.forEach((repo) => {
      repo?.language &&
        (newTechData[repo.language] = (newTechData[repo.language] || 0) + 1);
    });
    setTechData(newTechData);
  }, [dataRepos]);

  const data = {
    series: [{ data: Object.values(techData) }],
    options: {
      chart: {
        type: "bar",
        height: "100%",
        width: "100%",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          colors: {
            ranges: [
              {
                from: 0,
                to: 0,
                color: "#00bfa5" // color de las barras
              },
            ],
          },
        },
      },
      xaxis: {
        categories: Object.keys(techData),
        labels: {
          style: {
            colors: "#718096" // color de los labels
          }
        }
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: true,
        x: {
          show: true,
          formatter: (val) => val,
        },
      },
    },    
  };

  return (
    <div className="w-full py-5">
      {dataRepos && (
        <div className="max-w-screen-2xl mx-auto px-4 grid grid-cols-1 xl:grid-cols-7 gap-10">
          <div className="w-full xl:col-span-3 bg-cards-bg-light dark:bg-cards-bg-dark rounded-2xl shadow-lg p-6 flex flex-col justify-between gap-10">
          <h1 className="text-text-color-light dark:text-text-color-dark text-lg">
              Lenguajes
            </h1>
            <div
              className="flex-grow-1 flex-shrink-1"
              style={{ height: "100%", width: "100%" }}
            >
              <ReactApexChart
                options={data.options}
                series={data.series}
                type="bar"
              />
            </div>
          </div>
          <div className="w-full max-h-[500px] xl:col-span-4 bg-cards-bg-light dark:bg-cards-bg-dark rounded-2xl shadow-lg p-6 flex flex-col justify-between gap-10 overflow-hidden">
            <h1 className="text-text-color-light dark:text-text-color-dark text-lg">
              Repositorios
            </h1>
            <div className="overflow-y-scroll flex flex-col gap-8 mt-6">
              {dataRepos?.map((data, index) => (
                <div
                  key={index}
                  className="flex gap-8 items-center cursor-pointer"
                  onClick={() => {
                    window.open(`${data.html_url}`, "_blank");
                  }}
                >
                  <AiFillFileZip className="w-12 h-12  text-green-200" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-text-color-light dark:text-text-color-dark font-semibold text-regular md:text-lg leading-none">
                      {data.name}
                    </h3>
                    <p className="text-text-color-light dark:text-gray-400 text-xs mt-1">
                      {`${data.size} Kb`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
