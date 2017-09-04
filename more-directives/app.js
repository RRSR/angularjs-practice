angular.module("moreDirectives", [])
    .controller("MoreDirectivesController", MoreDirectivesController);

function MoreDirectivesController() {
    this.myArray = [
        { "Name": "Foo", "Age": "24" },
        { "Name": "Bar", "Age": "31" },
        { "Name": "Boo", "Age": "24" },
        { "Name": "Buzz", "Age": "26" },
        { "Name": "Lii", "Age": "21" }
    ];
}