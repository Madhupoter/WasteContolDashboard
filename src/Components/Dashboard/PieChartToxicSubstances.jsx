
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import the plugin

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChartToxicSubstances = () => {
    
    const pieData = {
        labels: [
            "Battery Disposal",
            "Desktop Recycling",
            "Laptop Recycling",
            "Miscellaneous",
            "Mobile Phone Recycling",
            "Printer Recycling",
            "TV Recycling",
        ], 
        datasets: [
            {
                data: [31.31, 37.05, 35.67, 42.58, 41.48, 39.25, 28.13], 
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#6A669D",
                    "#EB5B00",
                    "#D91656",
                    "#640D5F",
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#6A669D",
                    "#EB5B00",
                    "#D91656",
                    "#640D5F",
                ],
            },
        ],
    };

    
    const pieOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "right",
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        const dataValue = pieData.datasets[0].data[tooltipItem.dataIndex];
                        const total = pieData.datasets[0].data.reduce((sum, val) => sum + val, 0);
                        const percentage = ((dataValue / total) * 100).toFixed(2);
                        return `${tooltipItem.label}: ${dataValue} kg (${percentage}%)`;
                    },
                },
            },
            datalabels: {
                color: "#fff", 
                font: {
                    weight: "bold", 
                    size: 12,
                },
                formatter: (value, context) => {
                    const total = context.dataset.data.reduce((sum, val) => sum + val, 0);
                    const percentage = ((value / total) * 100).toFixed(2);
                    return `${percentage}%`; 
                },
                anchor: "center", 
                align: "center",
            },
        },
    };

    return (
        <div className="charts">
            <h5>  Percentage of Toxic Substances Safely Disposed </h5>
            <Pie data={pieData} options={pieOptions} />
        </div>
    );
};

export default PieChartToxicSubstances;
