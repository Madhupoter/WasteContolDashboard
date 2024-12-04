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


const Barchart = () => {
    // Data for the bar chart (Service Type vs. Volume of Waste)
    const barData = {
        labels: ["Battery Disposal", "Desktop Recycling", "Laptop Recycling", "Miscellaneous", "Mobile Phone Recycling", "Printer Recycling", "TV Recycling"], // Service types
        datasets: [
            {
                label: "Volume of Waste (kg)", // Dataset label
                data: [197.44, 191.74, 311.89, 285.8, 244.61, 272.61, 248.12], // Replace with actual values
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
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

        <div className="barChart charts">
            <h5>Total Volume of Waste Collected</h5>
            <Bar data={barData} options={barOptions} />
        </div>
    );
};

export default Barchart;
