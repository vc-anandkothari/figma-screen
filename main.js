/* The code snippet is creating a line chart using the Chart.js library in JavaScript. */
const xValues = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const yValues = [0, 200, 400, 600];

new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            lineTension: 0,
            data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
            borderColor: "#ff730e",
        }]
    },
    options: {
        plugins: { legend: { display: false } },
    }
});