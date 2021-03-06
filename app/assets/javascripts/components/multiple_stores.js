/*global $*/
/*global gon*/
/*global Chart*/
$(document).on('turbolinks:load', function() {
    var gonData = typeof gon;
    if (gonData != 'undefined'){
        var costData = {
            labels: ["現在のコスト", "導入後のコスト"],
            datasets: [{
                label: 'コスト',
                backgroundColor: "#7BD0DB",
                borderColor: "#7BD0DB",
                borderWidth: 1,
                data: gon.cost
            }]
        };
        
        var costConfig = {
            type: 'bar',
            data: costData,
            options: {
                responsive: false,
                legend: {
                    display: false,
                },
                title: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data){
                            return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +' 円';
                        },
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            callback: function(value) {return '¥' + value.toLocaleString();}
                        }
                    }]
                },
                animation: {
                    animateRotate: true
                }
            }
        };
        
        var timeCostData = {
            labels: ["現在の所要時間", "導入後の所要時間"],
            datasets: [{
                label: '時間',
                backgroundColor: "#7BD0DB",
                borderColor: "#7BD0DB",
                borderWidth: 1,
                data: gon.time_cost
            }]
        };
        
        var timeCostConfig = {
            type: 'bar',
            data: timeCostData,
            options: {
                responsive: false,
                legend: {
                    display: false,
                },
                title: {
                    display: false
                },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            callback: function(value) {return value + "時間"}
                        }
                    }]
                },
                animation: {
                    animateRotate: true
                }
            }
        };
        
        window.onload = function () {
            var ctx = document.getElementById("cost-chart").getContext("2d");
            window.bar = new Chart(ctx, costConfig);
            var ctx = document.getElementById("time-cost-chart").getContext("2d");
            window.bar = new Chart(ctx, timeCostConfig);
        };
    }
});