S.controller("load-chart", function(input, options) {

  var defaults, ctx, myLineChart, data;

  defaults = {
    responsive: true
  };

  data = {
    labels: ["Luiz", "Diego", "Rodolfo"],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        data: [80, 45, 54]
      }
    ]
  };

  ctx = input.get(0).getContext("2d");

  myLineChart = new Chart(ctx).Line(data, defaults);
});
