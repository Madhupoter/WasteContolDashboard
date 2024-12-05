import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);



const Barchart = () => {
    // Data for the bar chart (Service Type vs. Volume of Waste)
    const barData = {
        labels: ["Battery Disposal", "Desktop Recycling", "Laptop Recycling", "Miscellaneous", "Mobile Phone Recycling", "Printer Recycling", "TV Recycling"], // Service types
        datasets: [
            {
                label: "Volume of Waste (kg)", 
                data: [197.44, 191.74, 311.89, 285.8, 244.61, 272.61, 248.12], 
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

        <div className="barChart charts">
            <h5>Total Volume of Waste Collected</h5>
            <Bar data={barData} options={barOptions} />
        </div>
    );
};

export default Barchart;
