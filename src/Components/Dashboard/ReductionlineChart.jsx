
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";

// Register necessary Chart.js components
ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const ReductionlineChart = () => {
    // Data for the bar chart
    const lineData = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"], // Weeks
        datasets: [
            {
                label: "Greenhouse Gas Emissions Reduced (kg CO₂e)",
                data: [1103.78,809.25, 961.83, 1225.98, 460.4], // Replace with actual GHG data
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
            {
                label: "Carbon Emissions Reduced (kg)",
                data: [807.16, 789.8, 687.13, 996.27, 327.5], // Replace with actual Carbon Emissions data
                backgroundColor: "rgba(255, 99, 132, 0.6)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
        ],
    };

    // Bar chart options
    const lineOptions = {
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
                    // text: "Weeks",
                },
            },
            y: {
                title: {
                    display: true,
                    // text: "Reduction (kg)",
                },
                beginAtZero: true,
                ticks: {
                    stepSize: 250, // Interval of 250
                  },
            },
        },
    };

    return (
        <div className="charts">
            <h5>Reduction in Carbon and GHG Emissions</h5>
            <Line data={lineData} options={lineOptions} />
        </div>
    );
};

export default ReductionlineChart