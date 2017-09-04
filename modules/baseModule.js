var baseModule = angular.module("baseModule", []);

baseModule.controller("BaseCtrl", BaseCtrl);

function BaseCtrl() {
    this.message = "This is a message from the base module!";
}