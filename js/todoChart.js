let chart;
const renderChart = (tasksStats) => {
    Chart.defaults.color = "#ffffff80";

    const nTasks = tasksStats.nTasks;
    const completed = tasksStats.completed;
    const noCompleted = nTasks - completed;

    const colors = "#e14ecb";
    const render = () => {
        if (chart) {
            chart.destroy();
        }
        const data = {
            labels: [`Completadas: ${completed}`, `No completadas: ${noCompleted}`],
            datasets: [
                {
                    data: [completed, nTasks],
                    backgroundColor: [colors, 'transparent'],
                    borderColor: colors,
                },
            ],
        };
        const options = {
            responsive: true,
            maintainAspectRatio: false,
        };
        chart = new Chart("todoChart", { type: "doughnut", data, options });
    };
    render();
};

// renderChart();

export default renderChart;
