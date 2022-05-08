
const charts = (stats) => {
    let chart;
    Chart.defaults.color = "#ffffff80";
    const colors = '#e14ecb';
    const renderChart = (option = "accounts") => {
        if (chart) {
            chart.destroy();
        }
        const data = {
            labels: stats.map((o) => o.month.substring(0,3)),
            datasets: [
                {
                    data: stats.map((o) => o[option]),
                    backgroundColor: colors,
                    borderColor: colors,
                    borderWidth: 1,
                    tension: 0.5,
                },
            ],
        };
        const options = {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                },
                x:{
                    grid:{
                        color: '#ffffff10',
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
        };
        chart = new Chart("myChart", { type: "line", data, options });
    };

    renderChart();

    const chartOptions = document.querySelectorAll(".main__chart-option-item");

    function updateChart() {
        chartOptions.forEach((op) => {
            op.classList.remove("main__chart-option-item-selected");
        });
        this.classList.add("main__chart-option-item-selected");
        const option = this.getAttribute("data-option");
        renderChart(option);
    }

    chartOptions.forEach((op) => {
        op.addEventListener("click",updateChart);
    });
};

export default charts;
