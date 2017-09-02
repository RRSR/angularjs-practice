var app = angular.module("clockApp", []);
app.controller("TimeController", TimeController);

function TimeController($scope) {
    $scope.userName = "";
    var currentDate = new Date();
    $scope.timeString = currentDate.toTimeString();
    $scope.updateTime = function () {
        var currentDate = new Date();
        $scope.timeString = currentDate.toTimeString();
    }
}