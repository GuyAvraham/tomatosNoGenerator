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
    })

    .controller('MovieDetailCtrl', function ($scope, $stateParams, RottenFactory) {
        console.log('details ' + $stateParams.id);
        RottenFactory.getById($stateParams.id).success(function (data) {
            $scope.currentMovie = data;
            console.log($scope.currentMovie);
            console.log($scope.currentMovie.synopsis);
        });
    })
