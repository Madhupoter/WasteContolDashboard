
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale,} from "chart.js";

// Register Chart.js components
ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const VolumeofWasteBarChart = () => {
    // Data for the stacked bar chart
    const chartData = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"], // Weeks
        datasets: [
            {
                label: "Large",
                data: [107.97, 165.38, 57.67, 85.39 ], // Replace with actual data
                backgroundColor: "rgba(0, 100, 0, 0.8)", // Dark green
            },
            {
                label: "Medium",
                data: [218.21, 183.84, 270.25 , 340.89, 170.94], // Replace with actual data
                backgroundColor: "rgba(34, 139, 34, 0.8)", // Medium green
            },
            {
                label: "Small",
                data: [24.72,40.84, 43.09, 43.02], // Replace with actual data
                backgroundColor: "rgba(144, 238, 144, 0.8)", // Light green
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
                display: false, // This hides the data labels
              },
        },
        scales: {
            x: {
                stacked: true, // Enable stacking for the X-axis
                title: {
                    display: true,
                    // text: "Weeks",
                },
            },
            y: {
                stacked: true, // Enable stacking for the Y-axis
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