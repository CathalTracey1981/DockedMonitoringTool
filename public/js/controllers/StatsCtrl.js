angular.module('StatsCtrl', []).controller('statsController', function($scope, $http, $routeParams, $timeout) {
    var id = $routeParams.id;

    $scope.getStats = function () {
        if(id){


            $http.get("/containers/" + id + "/stats?stream=false").success(function (data) {
                console.log(data);
                $scope.message = data;

                // Network Metrics
                var tx = data.network.tx_bytes / 10000;
                var rx = data.network.rx_bytes / 10000;
                //var a =  convertToBytes(rx);

                // CPU Metrics
                var cpuUsage = data.precpu_stats.cpu_usage.total_usage / 1000000000;
                var cpuSystemUsage = data.precpu_stats.system_cpu_usage / 1000000000000;

                // Memory Metrics
                var memory = data.memory_stats.usage / 1000000;
                var maxMemory = data.memory_stats.max_usage / 1000000;

                // Network Chart (tx, rx)
                var canvas = document.getElementById('updating-network'),
                    ctx = canvas.getContext('2d'),
                    startingData = {
                        labels: ['RX_Bytes','TX_Bytes'],
                        datasets: [
                            {
                                fillColor: "rgb(48, 109, 171)",
                                highlightFill: "rgb(48, 109, 171)",
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
                    });

                // Container CPU Usage (%)
                var canvas = document.getElementById('updating-cpu'),
                    ctx = canvas.getContext('2d'),
                    startingData = {
                        labels: ['CPU'],
                        datasets: [
                            {
                                fillColor: "rgb(68, 157, 68)",
                                highlightFill: "rgb(68, 157, 68)",
                                data: [cpuUsage]
                            }
                        ]
                    };

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
                                fillColor: "rgb(68, 157, 68)",
                                highlightFill: "rgb(68, 157, 68)",
                                data: [ cpuSystemUsage]
                            }
                        ]
                    };


                var myLiveChart = new Chart(ctx).Bar(startingData,
                    {
                        animationSteps: 1,
                        scaleSteps : 3,
                        scaleStepWidth : 10,
                        scaleStartValue : 0
                    });

                // memory Usage
                var canvas = document.getElementById('updating-memory-usage'),
                    ctx = canvas.getContext('2d'),
                    startingData = {
                        labels: ['Memory Usage'],
                        datasets: [
                            {
                                Label: "GB",
                                fillColor: "rgb(206, 97, 49)",
                                highlightFill: "rgb(206, 97, 49)",
                                data: [ memory]
                            }
                        ]
                    };

                var myLiveChart = new Chart(ctx).Bar(startingData,
                    {
                        animationSteps: 1,
                        scaleSteps : 3,
                        scaleStepWidth : 10,
                        scaleStartValue : 0
                    });

                // memory Usage
                var canvas = document.getElementById('updating-max-memory-usage'),
                    ctx = canvas.getContext('2d'),
                    startingData = {
                        labels: ['Memory Usage'],
                        datasets: [
                            {
                                Label: "GB",
                                fillColor: "rgb(206, 97, 49)",
                                highlightFill: "rgb(206, 97, 49)",
                                data: [ maxMemory ]
                            }
                        ]
                    };

                var myLiveChart = new Chart(ctx).Bar(startingData,
                    {
                        animationSteps: 1,
                        scaleSteps : 3,
                        scaleStepWidth : 10,
                        scaleStartValue : 0
                    });
            });
        };
    }
        // Function using $timeout service.
        $scope.intervalFunction = function () {
            $timeout(function () {
                $scope.getStats();
                $scope.intervalFunction();

            }, 1000)
        };

        // Kick off the interval
        $scope.intervalFunction();



});