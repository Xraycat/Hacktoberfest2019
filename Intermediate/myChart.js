var ctx = document.getElementById("chart1");

var myChart = new Chart(ctx, {

    type: 'line',

    data: {



        datasets: [{
            label: 'Apples',
            backgroundColor: 'RGBA(139, 195, 74, 0.5)',
            data: [12, 18, 3, 17, 6, 3, 7]
        }, {
            label: 'oranges',
            backgroundColor: 'RGBA(255, 152, 0, 0.5)',
            data: [2, 28, 5, 5, 3, 4, 10],
            type: 'line'
        }],
        labels: ["Mon", "Tue", "Wed", "Tue", "Fri", "Sat", "Sun"],
    }





});