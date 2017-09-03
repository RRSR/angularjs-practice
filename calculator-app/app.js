var app = angular.module("calculatorApp", []);

app.controller("calculatorController", calculatorCtrl);

function calculatorCtrl($scope) {
    $scope.result = 0;
    $scope.evaluate = function () {
        if ($scope.operator == '+') {
            $scope.result = $scope.number1 + $scope.number2;
        }
        if ($scope.operator == '-') {
            $scope.result = $scope.number1 - $scope.number2;
        }
        if ($scope.operator == '*') {
            $scope.result = $scope.number1 * $scope.number2;
        }
        if ($scope.operator == '/') {
            $scope.result = $scope.number1 / $scope.number2;
        }
    }
}