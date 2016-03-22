angular.module('StatsCtrl', []).controller('statsController', function($scope, $http, $routeParams, $timeout) {
    var id = $routeParams.id;

    $scope.getStats = function () {
        $http.get("/containers/" + id + "/stats?stream=false").success(function (data1) {
            console.log(data1);
            $scope.message = data1;

            // Network Metrics
            var tx = data1.network.tx_bytes / 100000;
            var rx = data1.network.rx_bytes / 100000;

            // CPU Metrics
            //var cpuUsage = data1.


            var canvas = document.getElementById('updating-chart'),
                ctx = canvas.getContext('2d'),
                startingData = {
                    labels: ['TX_Bytes','RX_Bytes'],
                    datasets: [
                        {
                            Label: "GB",
                            fillColor: "rgb(48, 109, 171)",
                            strokeColor: "rgba(220,220,220,0.8)",
                            highlightFill: "rgb(32, 43, 120)",
                            highlightStroke: "rgba(220,220,220,1)",
                            data: [tx, rx]
                        }
                    ]
                };


            // Reduce the animation steps for demo clarity.
            var myLiveChart = new Chart(ctx).Bar(startingData,
                {

                    animationSteps: 1,
                    scaleSteps : 3,
                    scaleStepWidth : 10,
                    scaleStartValue : 0,
                    tooltipTitleFontFamily: " Arial",
                    // Number - Tooltip title font size in pixels
                    tooltipTitleFontSize: 14,

                    // String - Tooltip title font weight style
                    tooltipTitleFontStyle: "bold",

                    // String - Tooltip title font colour
                    tooltipTitleFontColor: "#fff",

                    // Number - pixel width of padding around tooltip text
                    tooltipYPadding: 6,

                    // Number - pixel width of padding around tooltip text
                    tooltipXPadding: 6,

                    // Number - Size of the caret on the tooltip
                    tooltipCaretSize: 8,

                    // Number - Pixel radius of the tooltip border
                    tooltipCornerRadius: 6,

                    // Number - Pixel offset from point x to tooltip edge
                    tooltipXOffset: 10

                });

        });

    };

    // Function using $timeout service.
    $scope.intervalFunction = function () {
        $timeout(function () {
            $scope.getStats();
            $scope.intervalFunction();

        }, 500)
    };

    // Kick off the interval
    $scope.intervalFunction();
    // };
});