// import React from 'react'
// import Chart from "react-apexcharts";
// function page() {
//     const chartConfig = {
//         type: "line",
//         height: 240,
//         series: [
//             {
//                 name: "Sales",
//                 data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
//             },
//         ],
//         options: {
//             chart: {
//                 toolbar: {
//                     show: false,
//                 },
//             },
//             title: {
//                 show: "",
//             },
//             dataLabels: {
//                 enabled: false,
//             },
//             colors: ["#020617"],
//             stroke: {
//                 lineCap: "round",
//                 curve: "smooth",
//             },
//             markers: {
//                 size: 0,
//             },
//             xaxis: {
//                 axisTicks: {
//                     show: false,
//                 },
//                 axisBorder: {
//                     show: false,
//                 },
//                 labels: {
//                     style: {
//                         colors: "#616161",
//                         fontSize: "12px",
//                         fontFamily: "inherit",
//                         fontWeight: 400,
//                     },
//                 },
//                 categories: [
//                     // "Apr",
//                     // "May",
//                     // "Jun",
//                     // "Jul",
//                     // "Aug",
//                     // "Sep",
//                     // "Oct",
//                     // "Nov",
//                     // "Dec",
//                 ],
//             },
//             yaxis: {
//                 labels: {
//                     style: {
//                         colors: "#616161",
//                         fontSize: "12px",
//                         fontFamily: "inherit",
//                         fontWeight: 400,
//                     },
//                 },
//             },
//             grid: {
//                 show: false,
//                 borderColor: "#dddddd",
//                 strokeDashArray: 5,
//                 xaxis: {
//                     lines: {
//                         show: true,
//                     },
//                 },
//                 padding: {
//                     top: 5,
//                     right: 20,
//                 },
//             },
//             fill: {
//                 opacity: 0.8,
//             },
//             tooltip: {
//                 theme: "dark",
//             },
//         },
//     };
//   return (
//     <div>
//         <Chart {...chartConfig} />
//     </div>
//   )
// }

// // export default page

// import React from "react";
// import ReactApexChart from "react-apexcharts";
// const lineChartDataOverallRevenue = [
//     {
//         name: "Revenue",
//         data: [50, 64, 48, 66, 49, 68]
//     },
//     {
//         name: "Profit",
//         data: [30, 40, 24, 46, 20, 46]
//     }
// ];

// const lineChartOptionsOverallRevenue = {
//     chart: {
//         toolbar: {
//             show: false
//         },
//         dropShadow: {
//             enabled: true,
//             top: 13,
//             left: 0,
//             blur: 10,
//             opacity: 0.1,
//             color: "#4318FF"
//         }
//     },
//     colors: ["#4318FF", "#39B8FF"],
//     markers: {
//         size: 0,
//         colors: "white",
//         strokeColors: "#7551FF",
//         strokeWidth: 3,
//         strokeOpacity: 0.9,
//         strokeDashArray: 0,
//         fillOpacity: 1,
//         discrete: [],
//         shape: "circle",
//         radius: 2,
//         offsetX: 0,
//         offsetY: 0,
//         showNullDataPoints: true
//     },
//     tooltip: {
//         theme: "dark"
//     },
//     dataLabels: {
//         enabled: false
//     },
//     stroke: {
//         curve: "smooth",
//         type: "line"
//     },
//     xaxis: {
//         type: "numeric",
//         categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
//         labels: {
//             style: {
//                 colors: "#A3AED0",
//                 fontSize: "12px",
//                 fontWeight: "500"
//             }
//         },
//         axisBorder: {
//             show: false
//         },
//         axisTicks: {
//             show: false
//         }
//     },
//     yaxis: {
//         show: false
//     },
//     legend: {
//         show: false
//     },
//     grid: {
//         show: false,
//         column: {
//             color: ["#7551FF", "#39B8FF"],
//             opacity: 0.5
//         }
//     },
//     color: ["#7551FF", "#39B8FF"]
// };

// class Page extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             chartData: [{
//                 name: "Revenue",
//                 data: [1, 64, 48, 66, 49, 68]
//             },
//                 {
//                     name: "Profit",
//                     data: [0.1, 40, 24, 46, 20, 46]
//                 }],
//             chartOptions: {
//                 chart: {
//                     toolbar: {
//                         show: false
//                     },
//                     dropShadow: {
//                         enabled: true,
//                         top: 13,
//                         left: 0,
//                         blur: 10,
//                         opacity: 0.1,
//                         color: "#4318FF"
//                     }
//                 },
//                 colors: ["#4318FF", "#39B8FF"],
//                 markers: {
//                     size: 0,
//                     colors: "white",
//                     strokeColors: "#7551FF",
//                     strokeWidth: 3,
//                     strokeOpacity: 0.9,
//                     strokeDashArray: 0,
//                     fillOpacity: 1,
//                     discrete: [],
//                     shape: "circle",
//                     radius: 2,
//                     offsetX: 0,
//                     offsetY: 0,
//                     showNullDataPoints: true
//                 },
//                 tooltip: {
//                     theme: "dark"
//                 },
//                 dataLabels: {
//                     enabled: false
//                 },
//                 stroke: {
//                     curve: "smooth",
//                     type: "line"
//                 },
//                 xaxis: {
//                     type: "numeric",
//                     categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
//                     labels: {
//                         style: {
//                             colors: "#A3AED0",
//                             fontSize: "12px",
//                             fontWeight: "500"
//                         }
//                     },
//                     axisBorder: {
//                         show: false
//                     },
//                     axisTicks: {
//                         show: false
//                     }
//                 },
//                 yaxis: {
//                     show: false
//                 },
//                 legend: {
//                     show: false
//                 },
//                 grid: {
//                     show: false,
//                     column: {
//                         color: ["#7551FF", "#39B8FF"],
//                         opacity: 0.5
//                     }
//                 },
//                 color: ["#7551FF", "#39B8FF"] }
//         };
//     }

//     componentDidMount() {
//         this.setState({
//             chartData: this.props.chartData,
//             chartOptions: this.props.chartOptions
//         });
//     }

//     render() {
//         return (
//             <ReactApexChart
//                 options={this.state.chartOptions}
//                 series={this.state.chartData}
//                 type="area"
//                 width="100%"
//                 height="100%"
//             />
//         );
//     }
// }

// export default Page;
import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

export default function Page() {
  const dataLoad = () => {
    // window.addEventListener("load", function () {
    let options = {
      chart: {
        height: "100%",
        maxWidth: "100%",
        type: "line",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -26,
        },
      },
      series: [
        {
          name: "Month",
          data: [6500, 6418, 6456, 6526, 6356, 6456],
          color: "#1A56DB",
        },
        {
          name: "Year",
          data: [6456, 6356, 6526, 6332, 6418, 6500],
          color: "#7E3AF2",
        },
      ],
      legend: {
        show: false,
      },
      // eslint-disable-next-line no-dupe-keys
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "01 Feb",
          "02 Feb",
          "03 Feb",
          "04 Feb",
          "05 Feb",
          "06 Feb",
          "07 Feb",
        ],
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    };

    if (
      document.getElementById("line-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("line-chart"),
        options
      );
      chart.render();
    }
  };
  useEffect(() => {
    // ApexCharts options and config
    dataLoad();
  }, []);
  return (
      <div className="dark:bg-gray-800 mb-4 rounded-xl">
    
        <div class="flex items-center justify-between p-4 mb-2 md:p-5 rounded-t dark:border-gray-600">
          <h3 class="font-bold text-black text-md dark:text-white">Attendance</h3>
        </div>
      
      <div class="w-full bg-white rounded-lg shadow dark:bg-gray-800 px-4 md:px-6">
        <div class="flex justify-between mb-5">
          <div class="grid gap-4 grid-cols-2">
            <div>
              <h5 class="inline-flex items-center text-gray-500 dark:text-gray-400 leading-none font-normal mb-2">
                Month
                <svg
                  data-popover-target="clicks-info"
                  data-popover-placement="bottom"
                  class="w-3 h-3 text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div
                  data-popover
                  id="clicks-info"
                  role="tooltip"
                  class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                >
                  <div class="p-3 space-y-2">
                    <h3 class="font-semibold text-gray-900 dark:text-white">
                      Month growth - Incremental
                    </h3>
                    <p>
                      Report helps navigate cumulative growth of community
                      activities. Ideally, the chart should have a growing
                      trend, as stagnating chart signifies a significant
                      decrease of community activity.
                    </p>
                    <h3 class="font-semibold text-gray-900 dark:text-white">
                      Calculation
                    </h3>
                    <p>
                      For each date bucket, the all-time volume of activities is
                      calculated. This means that activities in period n contain
                      all activities up to period n, plus the activities
                      generated by your community in period.
                    </p>
                    <a
                      href="/"
                      class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Read more{" "}
                      <svg
                        class="w-2 h-2 ms-1.5 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                    </a>
                  </div>
                  <div data-popper-arrow></div>
                </div>
              </h5>
              <p class="text-gray-900 dark:text-white text-2xl leading-none font-bold">
                70%
              </p>
            </div>
            <div>
              <h5 class="inline-flex items-center text-gray-500 dark:text-gray-400 leading-none font-normal mb-2">
                Year
                <svg
                  data-popover-target="cpc-info"
                  data-popover-placement="bottom"
                  class="w-3 h-3 text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div
                  data-popover
                  id="cpc-info"
                  role="tooltip"
                  class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                >
                  <div class="p-3 space-y-2">
                    <h3 class="font-semibold text-gray-900 dark:text-white">
                      CPC growth - Incremental
                    </h3>
                    <p>
                      Report helps navigate cumulative growth of community
                      activities. Ideally, the chart should have a growing
                      trend, as stagnating chart signifies a significant
                      decrease of community activity.
                    </p>
                    <h3 class="font-semibold text-gray-900 dark:text-white">
                      Calculation
                    </h3>
                    <p>
                      For each date bucket, the all-time volume of activities is
                      calculated. This means that activities in period n contain
                      all activities up to period n, plus the activities
                      generated by your community in period.
                    </p>
                    <a
                      href="/"
                      class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Read more{" "}
                      <svg
                        class="w-2 h-2 ms-1.5 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                    </a>
                  </div>
                  <div data-popper-arrow></div>
                </div>
              </h5>
              <p class="text-gray-900 dark:text-white text-2xl leading-none font-bold animate-bounce">
                90%
              </p>
            </div>
          </div>
          <div>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="lastDaysdropdown"
              data-dropdown-placement="bottom"
              type="button"
              class="px-3 py-2 inline-flex items-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Last week{" "}
              <svg
                class="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="lastDaysdropdown"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="/"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Yesterday
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Today
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Last 7 days
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Last 30 days
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Last 90 days
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="line-chart"></div>
        {/* <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between mt-2.5">
                    <div class="pt-5">
                        <a href="/" class="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg class="w-3.5 h-3.5 text-white me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Zm-3 15H4.828a1 1 0 0 1 0-2h6.238a1 1 0 0 1 0 2Zm0-4H4.828a1 1 0 0 1 0-2h6.238a1 1 0 1 1 0 2Z" />
                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                            </svg>
                            View full report
                        </a>
                    </div>
                </div> */}
      </div>
    </div>
  );
}