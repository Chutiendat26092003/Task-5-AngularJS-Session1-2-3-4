angular.module('myApp', []).controller('namesCtrl', function ($scope) {
    $scope.names = [
        {country: 'Brazil', capital: 'Brasilia'},
        {country: 'Russia', capital: 'Moscow'},
        {country: 'India', capital: 'New Delhi'},
        {country: 'China', capital: 'Beijing'},
        {country: 'Viet Nam', capital: 'Ha Noi'}
    ];
});