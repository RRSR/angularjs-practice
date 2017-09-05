var modulesApp = angular.module('modulesApp', ['baseModule', 'ngTagsInput']);

modulesApp.controller("AppCtrl", AppCtrl);

function AppCtrl() {
    this.message = "This is a message from the app module!";
    this.tags = [{
            text: 'Superman'
        },
        {
            text: 'Spiderman'
        },
        {
            text: 'Batman'
        }
    ];
}