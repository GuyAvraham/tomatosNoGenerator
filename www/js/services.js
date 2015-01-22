angular.module('directory.services', ['ngResource'])

    .factory('RottenFactory', ['$http', function ($http) {
        /*        var resource = $resource('/employees/:employeeId/:data');
         var resourceRoter = $resource('http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=superman&page_limit=10&page=1&apikey=7ue5rxaj9xn4mhbmsuexug54');
         console.log("factory log");
         console.log(resourceRoter.get());
         console.log(resource.query());*/

        RottenFactory = {};

        RottenFactory.get = function (query) {
            console.log("search with " + query);
            var rottenMovies = $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies.json', {
                params: {
                    page_limit: '10',
                    page: '1',
                    apikey: '7ue5rxaj9xn4mhbmsuexug54',
                    q: query,
                    callback: 'JSON_CALLBACK'
                }
            });
            return rottenMovies;
        }

        return RottenFactory;
    }]);