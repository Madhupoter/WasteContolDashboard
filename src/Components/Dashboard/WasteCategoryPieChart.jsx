
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Battery Disposal - 31.31
// Desktop Recycling - 37.05
// Laptop Recycling - 35.67
// Miscellaneous - 42.58
// Mobile Phone Recycling - 41.48
// Printer Recycling - 39.25
// TV Recycling - 28.13

const WasteCategoryPieChart = () => {
    // Data for the pie chart
    const pieData = {
        labels: ["Large", "Medium", "Small"], // Service types
        datasets: [
            {
                data: [15, 64, 21], // Replace with actual Toxic Substances Disposed (kg) values
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56",],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56",],
            },
        ],
    };

    // Pie chart options
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
                color: "#fff", // White color for text labels
                font: {
                    weight: "bold", // Bold text
                    size: 14, // Font size
                },
                formatter: (value, context) => {
                    const total = context.dataset.data.reduce((sum, val) => sum + val, 0);
                    const percentage = ((value / total) * 100).toFixed(2);
                    return `${percentage}%`; // Display value and percentage
                },
                anchor: "center", // Position the label at the center of each segment
                align: "center", // Align text to the center of the segment
            },
        },
    };

    return (
        <div className="chartBg charts">
            <h5>Percentage of Waste Category Distribution</h5>
            <Pie data={pieData} options={pieOptions} />
        </div>
    );
};




export default WasteCategoryPieChart