angular.module('directory.controllers', [])

    .controller('MoviesListCtrl', function ($state, $scope, RottenFactory) {

        $scope.searchKey = "";

        $scope.clearSearch = function () {
            $scope.searchKey = "";
            $scope.movies = Employees.query();
        }

        $scope.search = function () {
            RottenFactory.get($scope.searchKey).success(function (data) {
                console.log(data);
                $scope.movies = data.movies;
            })
        }

        $scope.movieClick = function (movie) {
            console.log(movie);
            $scope.currentMovie = movie;
            $state.go('movie');
        }
    })

    .controller('MovieDetailCtrl', function () {
        console.log('details');
    })
/*
 .controller('EmployeeReportsCtrl', function ($scope, $stateParams, Employees) {
 console.log('reports');
 $scope.employee = Employees.get({employeeId: $stateParams.employeeId, data: 'reports'});
 });*/