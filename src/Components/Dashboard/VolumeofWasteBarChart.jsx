
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale,} from "chart.js";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const VolumeofWasteBarChart = () => {
    
    const chartData = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"], 
        datasets: [
            {
                label: "Large",
                data: [107.97, 165.38, 57.67, 85.39 ], 
                backgroundColor: "rgba(0, 100, 0, 0.8)", 
            },
            {
                label: "Medium",
                data: [218.21, 183.84, 270.25 , 340.89, 170.94], 
                backgroundColor: "rgba(34, 139, 34, 0.8)", 
            },
            {
                label: "Small",
                data: [24.72,40.84, 43.09, 43.02], 
                backgroundColor: "rgba(144, 238, 144, 0.8)", 
            },
            
            
        ],
    };

    // Chart options
    const chartOptions = {
        responsive: true,
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
                stacked: true, 
                title: {
                    display: true,
                    // text: "Weeks",
                },
            },
            y: {
                stacked: true, 
                title: {
                    display: true,
                    // text: "Total Volume (kg)",
                },
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="charts"> 
            <h5>Total Volume of Waste by <br /> Category Across Weeks</h5>
            <Bar data={chartData} options={chartOptions} /> 
        </div>
    );
};


export default VolumeofWasteBarChart