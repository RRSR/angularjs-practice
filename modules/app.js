var modulesApp = angular.module("modulesApp", ["baseModule"]);

modulesApp.controller("AppCtrl", AppCtrl);

function AppCtrl() {
    this.message = "This is a message from the app module!";
}