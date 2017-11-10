app.controller('bandController', ['$scope', '$sce', function ($scope, $sce) {
    //$scope.videoSource = $sce.trustAsResourceUrl("//www.youtube.com/embed/9B7te184ZpQ?rel=0");
    $scope.band = [
        {
            bandID: "soundgarden",
            bandName: "Soundgarden",
            bandImg: "img/soundgarden.jpg",
            description: "Born in the mid-80s, Soundgarden was an influential band in the the Seattle grunge era.  Together with their contemporaries, Nirvana, Pearl Jam, and Alice in Chains, they started a nationwide phenomenon.  Soundgarden has many hits, including 'Black Hole Sun', 'Outshined', 'Fell on Black Days', and 'Rusty Cage'.  Soundgarden disbanded in the mid-90s, but reformed in the 2010s with a brand new album.",
            quote: "Black hole sun, won't you come and wash away the rain?",
            albums: [
                     "Ultramega OK", "Louder Than Love", "Badmotorfinger", "Superunknown", "Down on the Upside", "King Animal"
                     ],
            video: $sce.trustAsResourceUrl("https://www.youtube.com/embed/3mbBbFH9fAg"),


    }, {
            bandID: "temple",
            bandName: "Temple of the Dog",
            bandImg: "img/temple.jpg",
            description: "Chris Cornell was roommates with Andrew Wood, a singer for another band called Mother Love Bone.  Unfortunately, in 1990, Andrew Wood succumbed to his drug addiction and passed away.  In tribute to Wood, Cornell formed Temple of the Dog, with former Mother Love Bone members, Stone Gossard and Jeff Ament.  Gossard and Ament went on to form Pearl Jam later.  Temple of the Dog only relesed one album, and 'Hunger Strike' is probably the most famous cut.",
            quote: "I don't mind stealing bread from the mouths of decadence.",
            albums: [
                     "Temple of the Dog"
                     ],
            video: $sce.trustAsResourceUrl("https://www.youtube.com/embed/3mbBbFH9fAg"),

    }, {
            bandID: "audioslave",
            bandName: "Audioslave",
            bandImg: "img/audioslave.jpg",
            description: "In the late 90s, Rage Against the Machine were one of the most admired bands of their era.  It was a surprise to many when their lead singer left the band.  The remaining members were searching for a singer and they recruited, Cornell.  They released three albums, and they had a major hit with the song, 'Like a Stone'.",
            quote: "I wait for you here, like a stone.",
            albums: [
                     "Audioslave", "Out of Exile", "Euphoria Morning"
                     ],
            video: $sce.trustAsResourceUrl("https://www.youtube.com/embed/3mbBbFH9fAg"),

    }, {
            bandID: "solo",
            bandName: "Solo Work",
            bandImg: "img/solo.jpg",
            description: "After the demise of Soundgarden, Cornell sporadically worked on solo work.  Euphoria Morning was released in 1999 and was well received.  In subsequent years, Cornell sang the theme for the James Bond movie 'Casino Royale.'  The song was called 'You Know My Name'.  Cornell released a few more albums, varying in genre and quality.",
            quote: "Seeking a friend for the end of the world.",
            albums: [
                     "Euphoria Morning", "Carry On", "Scream", "Higher Truth"
                     ],
            video: $sce.trustAsResourceUrl("https://www.youtube.com/embed/3mbBbFH9fAg"),

    }
    ]

}]);
