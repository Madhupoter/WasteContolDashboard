import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, PointElement, Tooltip, Legend, CategoryScale, LinearScale);

const LinechartTrend = () => {
    // Weekly Job Completion Trend data
    const lineData = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"], 
        datasets: [
            {
                label: "Jobs Completed",
                data: [20, 22, 18, 25, 30], 
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.3, 
                pointStyle: "circle",
                pointRadius: 5,
                pointHoverRadius: 7,
            },
        ],
    };

   
    const lineOptions = {
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
                    // text: "Weeks",
                },
            },
            y: {
                title: {
                    display: true,
                    // text: "Number of Jobs Completed",
                },
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="chartBg charts">
            <h5>Weekly Job Completion Trend</h5>
            <Line data={lineData} options={lineOptions} />
        </div>
    );
};

export default LinechartTrend;