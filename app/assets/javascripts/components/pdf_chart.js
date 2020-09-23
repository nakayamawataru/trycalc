// wkhtmltopdf 0.12.5 crash fix.
// https://github.com/wkhtmltopdf/wkhtmltopdf/issues/3242#issuecomment-518099192
/*global CanvasRenderingContext2D*/
/*global $*/
/*global Chart*/


// 未使用
    $(document).on('turbolinks:load', function() {
    
        var costData = {
            labels: ["現在のコスト", "導入後のコスト"],
            datasets: [{
                label: 'コスト',
                backgroundColor: "#99CCFF",
                borderColor: "#99CCFF",
                borderWidth: 1,
                data: [1,1]
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
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0
                        }
                    }]
                },
                animation: false
            }
        };
        
        var timeCostData = {
            labels: ["現在の所要時間", "導入後の所要時間"],
            datasets: [{
                label: '時間',
                backgroundColor: "#99CCFF",
                borderColor: "#99CCFF",
                borderWidth: 1,
                data: [1,1]
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
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0
                        }
                    }]
                },
                animation: false
            }
        };
        

        var ctx = document.getElementById("cost-chart-pdf").getContext("2d");
        window.bar = new Chart(ctx, costConfig);
        var ctx = document.getElementById("time-chart-pdf").getContext("2d");
        window.bar = new Chart(ctx, timeCostConfig);

    });
'use strict';
(function(setLineDash) {
    CanvasRenderingContext2D.prototype.setLineDash = function() {
        if(!arguments[0].length){
            arguments[0] = [1,0];
        }
        // Now, call the original method
        return setLineDash.apply(this, arguments);
    };
})(CanvasRenderingContext2D.prototype.setLineDash);
Function.prototype.bind = Function.prototype.bind || function (thisp) {
    var fn = this;
    return function () {
        return fn.apply(thisp, arguments);
    };
};