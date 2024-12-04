// Install dependencies: chart.js and react-chartjs-2

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";


// Register necessary Chart.js components
ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);
 
// Battery Disposal - 197.44
// Desktop Recycling -191.74
// Laptop Recycling - 311.89
// Miscellaneous - 285.8
// Mobile Phone Recycling - 244.61
// Printer Recycling - 272.61
// TV Recycling - 248.12


const FeeDistributionBarChart = () => {
  // Data for the bar chart (Service Type vs. Volume of Waste)
  const barData = {
    // labels: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80", "85", "90", "95", "100", "105", "110", "115", "120", "125", "130", "135", "140", "145", "150", "155", "160", "165", "170", "175", "180", "185", "190", "195", "200", "205", "210", "215", "220", "225", "230", "235", "240", "245", "250", "255", "260", "265", "270", "275", "280", "285", "290", "295", "300", "305", "310", "315", "320", "325", "330", "335", "340", "345", "350", "355", "360", "365", "370", "375"], // Service types
    labels: ["50", "100", "150", "200", "250", "300", "350"],
    datasets: [
      {
        label: "Volume of Waste (kg)", // Dataset label
        data: [13.69, 35.2, 6.78, 70.43, 17.48, 23, 22.07, 46.45, 7.84, 31.22, 35.93, 35.9, 41.71, 56.74, 8.22, 30.92, 38.02, 26.05, 31.07, 36.32, 12.48, 11.85, 24.67, 24.52, 42.26, 20.97, 12.62, 12.53, 25.77, 16.77, 72.71, 14.47, 32.6, 25.27, 7.63, 11.92, 28.66, 21.25, 34.36, 34.81, 25.51, 19.42, 25.77, 33.78, 8.29, 7.3, 73.36, 43.43, 20.85, 37.24, 25.65, 38.73, 17.48, 47.23, 23.97, 20.3, 16.29, 25.49, 30.03, 13.83, 31.67, 40.45, 67.36, 22.17, 41.22, 36.94, 14.07, 15.3, 26.24, 27.47, 17.03, 16.13, 21.37, 10.58, 13.49, 10.64, 23.4, 25.6, 24.91, 22.19, 15.27, 18.36, 45.17, 48.82, 67.22, 14.43, 11.99, 7.6, 62.72, 32.93, 10.49, 10.74, 42.17, 22.1, 17.11, 26.35, 17.62, 18.13, 16.2, 35.07], // Replace with actual values
        backgroundColor: "#6c975a",
        borderColor: "#6c975a",
        borderWidth: 1,
      },
    ],
  };

  // Bar chart options
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      datalabels: {
        display: false, // This hides the data labels
      },
    },
    scales: {
      x: {
        title: {
          display: true,
        //   text: "Service Types",
        },
      },
      y: {
        title: {
          display: true,
        //   text: "Volume of Waste (kg)",
        },
        beginAtZero: true,
        
      },
    },
  };

  return (
    
    <div className="chartBg charts"> 
        <h5>Distribution of Disposal Fees</h5>
        <Bar data={barData} options={barOptions} />
    </div>
  );
};

export default FeeDistributionBarChart


