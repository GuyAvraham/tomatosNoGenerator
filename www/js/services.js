var ApiKey = 'anudtg88p35m954ancx3ynab';
angular.module('directory.services', ['ngResource'])

    .factory('rottenWithresource', ["$resource", function ($resource) {
        return $resource('http://api.rottentomatoes.com/api/public/v1.0/movies.json?callback=JSON_CALLBACK',
            {apiKey: ApiKey},
            {get: {method: "JSONP"}}
        )
    }])

    .factory('rottenFactory', ['$http', function ($http) {
        RottenFactory = {};

        RottenFactory.getById = function (id) {
            var link = 'http://api.rottentomatoes.com/api/public/v1.0/movies/' + id + '.json';
            var rottenMovies = $http.jsonp(link, {
                params: {
                    apikey: ApiKey,
                    callback: 'JSON_CALLBACK'
                }
            });
            return rottenMovies;
        }

        RottenFactory.reviewsById = function (id) {
            var link = 'http://api.rottentomatoes.com/api/public/v1.0/movies/' + id + '/reviews.json';
            var reviews = $http.jsonp(link, {params: {apikey: ApiKey, callback: 'JSON_CALLBACK'}});
            return reviews;
        }
        return RottenFactory;
    }]);