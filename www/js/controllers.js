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
            console.log(data);
            $scope.currentMovie = data;
            if (data.synopsis == "") data.synopsis = "no movie summery";
        });

        rottenFactory.reviewsById($stateParams.id).success(function (data) {
            console.log("reviews arrived");
            console.log(data);
            $scope.reviewsList = data.reviews;

        });
    })
