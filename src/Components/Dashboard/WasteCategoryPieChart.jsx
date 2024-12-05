
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const WasteCategoryPieChart = () => {
    const pieData = {
        labels: ["Large", "Medium", "Small"], 
        datasets: [
            {
                data: [15, 64, 21], 
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
                color: "#fff", 
                font: {
                    weight: "bold", 
                    size: 14, 
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
        <div className="chartBg charts">
            <h5>Percentage of Waste Category Distribution</h5>
            <Pie data={pieData} options={pieOptions} />
        </div>
    );
};




export default WasteCategoryPieChart