import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";


ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);
 


const EnergyConservedBar = () => {
  // Data for the bar chart (Service Type vs. Volume of Waste)
  const barData = {
    labels: ["Battery Disposal", "Desktop Recycling", "Laptop Recycling",  "Miscellaneous", "Mobile Phone Recycling", "Printer Recycling", "TV Recycling"], // Service types
    datasets: [
      {
        label: "Volume of Waste (kg)", 
        data: [397.6,172.01, 520.2, 635.82, 326.36, 1008.59, 167.99], 
        backgroundColor: "#338333",
        borderColor: "#338333",
        borderWidth: 1,
      },
    ],
  };

  // Bar chart options
  const barOptions = {
    responsive: true,
    indexAxis: "y",
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      datalabels: {
        display: false, 
      },
    },
    
    scales: {
      x: {
        title: {
          display: true,
          // text: "Service Types",
        },
      },
      y: {
        title: {
          display: true,
          // text: "Volume of Waste (kg)",
        },
        beginAtZero: true,
      },
      
    },
  };

  return (
    
    <div className="chartBg charts"> 
      <h5>Energy Conserved by each <br /> Service type in Week 4</h5>
      <Bar data={barData} options={barOptions} />
    </div>
  );
};

export default EnergyConservedBar