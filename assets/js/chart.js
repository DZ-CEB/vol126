/* chart1 */
document.addEventListener("DOMContentLoaded", function () {
    var data1 = {
      data: [50, 55, 60, 33],
      backgroundColor: [
        "#4b77a9",
        "#5f255f",
        "#d21243",
        "#B27200"
      ],
      borderColor: "#fff"
    };
  
    var options = {
      tooltips: {
        enabled: true
      },
      plugins: {
        datalabels: {
          formatter: (value, ctx) => {
            let sum = ctx.dataset._meta[0].total;
            let percentage = (value * 100 / sum).toFixed(2) + "%";
            return percentage;
          },
          color: '#fff',
        }
      }
    };
  
    var ctx1 = document.getElementById("pie-chart1").getContext('2d');
    var myChart1 = new Chart(ctx1, {
      type: 'pie',
      data: {
        labels: ['India', 'China', 'US', 'Canada'],
        datasets: [data1]
      },
      options: options
    });
  });
  

  
/* chart2 */
document.addEventListener("DOMContentLoaded", function () {
    var data2 = {
      data: [30, 20, 40, 25],
      backgroundColor: [
        "#FF5733",
        "#33FF57",
        "#5733FF",
        "#FFFF33"
      ],
      borderColor: "#fff"
    };
  
    var options = {
      tooltips: {
        enabled: true
      },
      plugins: {
        datalabels: {
          formatter: (value, ctx) => {
            let sum = ctx.dataset._meta[0].total;
            let percentage = (value * 100 / sum).toFixed(2) + "%";
            return percentage;
          },
          color: '#fff',
        }
      }
    };
  
    var ctx2 = document.getElementById("pie-chart2").getContext('2d');
    var myChart2 = new Chart(ctx2, {
      type: 'pie',
      data: {
        labels: ['Label A', 'Label B', 'Label C', 'Label D'],
        datasets: [data2]
      },
      options: options
    });
  });
  