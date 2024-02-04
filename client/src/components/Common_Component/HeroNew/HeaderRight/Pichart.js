import React, { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';
import { useSelector, useDispatch } from 'react-redux';
import { FileCount } from '../../../../store/Action/ClassAction';

function Pichart() {
  const fulldata = useSelector((state) => state.chat.fullData);
  const [subject1, setSubject] = useState([]);
  const [count1, setCount] = useState([])
  const dispatch = useDispatch();

  const fetchDataForAllLanguages = async () => {
    let languages;
    fulldata.roll==="staff"||fulldata.roll==="advisor"? languages=fulldata.subjects:languages = Object.keys(fulldata.subjects);
    const results = [];

    for (const language of languages) {
      try {
        const fileCount = await dispatch(FileCount(language));
        results.push({ language, fileCount });
      } catch (error) {
        console.error('Error fetching file count:', error);
        results.push({ language, fileCount: 0 });
      }
    }

    const counts = results.map(({ fileCount }) => fileCount);
    const subjects = results.map(({ language }) => language);
    console.log(counts);
    setSubject(subjects);
    setCount(counts);
  };

  useEffect(() => {
    fetchDataForAllLanguages();
  }, [fulldata, dispatch]);

  const getChartOptions = () => {
    console.log(count1)
    return {
      series: count1,
      colors: ["#1C64F2", "#16BDCA", "#9061F9", "#0ca5e9"],
      chart: {
        height: 420,
        width: "100%",
        type: "pie",
      },
      stroke: {
        colors: ["white"],
        lineCap: "",
      },
      plotOptions: {
        pie: {
          labels: {
            show: true,
          },
          size: "100%",
          dataLabels: {
            offset: -25
          },
          markers: {
            colors: ['#F44336', '#E91E63', '#9C27B0']
          }
        },
      },
      labels: subject1,
      dataLabels: {
        enabled: true,
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
      legend: {
        position: "bottom",
        color: "white",
        fontFamily: "Inter, sans-serif",
        labels: {
          colors: "white"
        }
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + " Files"
          },
        },
      },
      xaxis: {
        labels: {
          formatter: function (value) {
            return value + "%"
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },


    };

  };

  return (
    <div className='flex items-center justify-center w-full mb-4 px-4 '>
      <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
        <div className="flex justify-between items-start w-full">
          <div className="flex-col items-center">
            <div className="flex items-center mb-1">
              <h5 className="font-bold text-black text-md dark:text-white">File Upload</h5>
              {/* Add your other elements */}
              <svg data-popover-target="chart-info" data-popover-placement="bottom" className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
              </svg>
            </div>
          </div>
        </div>
        {/* <div className="py-6 hover:text-white" id="pie-chart"></div> */}
        <div className="py-6 hover:text-white">
          <ApexCharts options={getChartOptions()} series={count1} type="pie" height={420} />
        </div>
      </div>
    </div>
  );
}

export default Pichart;