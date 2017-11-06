app.controller('bandController', ['$scope', function ($scope) {
    $scope.band = [
        {
            bandName: "Soundgarden",
            bandImg: "img/soundgarden.jpg",
        },
        {
            bandName: "Temple of the Dog",
            bandImg: "img/temple.jpg",
        },
        {
            bandName: "Audioslave",
            bandImg: "img/audioslave.jpg"
        },
        {
            bandName: "Solo Work",
            bandImg: "img/solo.jpg"
        }
    ]

}]);
