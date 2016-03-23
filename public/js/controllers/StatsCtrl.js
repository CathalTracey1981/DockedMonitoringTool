angular.module('StatsCtrl', []).controller('statsController', function($scope, $http, $routeParams, $timeout) {
    var id = $routeParams.id;

    $scope.getStats = function () {
        $http.get("/containers/" + id + "/stats?stream=false").success(function (data) {
            console.log(data);
            $scope.message = data;

            // Network Metrics
            var tx = data.network.tx_bytes / 10000;
            var rx = data.network.rx_bytes / 10000;
            //var a =  convertToBytes(rx);

            // CPU Metrics
            var cpuUsage = data.precpu_stats.cpu_usage.total_usage / 1000000000;
            var cpuSystemUsage = data.precpu_stats.system_cpu_usage / 10000000000000;

            // Network Chart (tx, rx)
            var canvas = document.getElementById('updating-network'),
                ctx = canvas.getContext('2d'),
                startingData = {
                    labels: ['RX_Bytes','TX_Bytes'],
                    datasets: [
                        {
                            Label: "GB",
                            fillColor: "rgb(48, 109, 171)",
                            strokeColor: "rgba(220,220,220,0.8)",
                            highlightFill: "rgb(48, 109, 171)",
                            highlightStroke: "rgba(220,220,220,1)",
                            interactivityEnabled: false,
                            data: [rx, tx]
                        }
                    ]
                };

            var myLiveChart = new Chart(ctx).Bar(startingData,
                {
                    animationSteps: 1,
                    scaleSteps : 3,
                    scaleStepWidth : 10,
                    scaleStartValue : 0
                    //interactivityEnabled: false,

                });


            // Container CPU Usage (%)
            var canvas = document.getElementById('updating-cpu'),
                ctx = canvas.getContext('2d'),
                startingData = {
                    labels: ['CPU'],
                    datasets: [
                        {
                            Label: "GB",
                            fillColor: "rgb(21, 85, 21)",
                            strokeColor: "rgba(220,220,220,0.8)",
                            highlightFill: "rgb(21, 85, 21)",
                            highlightStroke: "rgba(220,220,220,1)",
                            interactivityEnabled: false,
                            data: [cpuUsage]
                        }
                    ]
                };

            // Reduce the animation steps for demo clarity.
            var myLiveChart = new Chart(ctx).Bar(startingData,
                {

                    animationSteps: 1,
                    scaleSteps : 3,
                    scaleStepWidth : 10,
                    scaleStartValue : 0



                });

            // System CPU Usage
            var canvas = document.getElementById('updating-system-cpu'),
                ctx = canvas.getContext('2d'),
                startingData = {
                    labels: ['System CPU'],
                    datasets: [
                        {
                            Label: "GB",
                            fillColor: "rgb(21, 85, 21)",
                            strokeColor: "rgba(220,220,220,0.8)",
                            highlightFill: "rgb(21, 85, 21)",
                            highlightStroke: "rgba(220,220,220,1)",
                            interactivityEnabled: false,
                            data: [ cpuSystemUsage]
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



                });
        });

    };

    // Function using $timeout service.
    $scope.intervalFunction = function () {
        $timeout(function () {
            $scope.getStats();
            $scope.intervalFunction();

        }, 1000)
    };

    // Kick off the interval
    $scope.intervalFunction();
    // };
});