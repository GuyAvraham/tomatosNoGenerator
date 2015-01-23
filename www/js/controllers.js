angular.module('directory.controllers', [])

    .controller('MoviesListCtrl', function ($state, $scope, rottenWithresource) {
        $scope.clearSearch = function () {
            $scope.searchKey = "";
        }

        $scope.search = function () {
            rottenWithresource.get({q: $scope.searchKey}, function (result) {
                console.log(result);
                $scope.movies = result.movies;
            })
        }
    })

    .controller('MovieDetailCtrl', function ($scope, $stateParams, rottenFactory) {
        console.log('details ' + $stateParams.id);
        rottenFactory.getById($stateParams.id).success(function (data) {
            $scope.currentMovie = data;
            console.log($scope.currentMovie);
            console.log($scope.currentMovie.synopsis);
        });
    })
