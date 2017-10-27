$(document).ready(function () {
    //API Key: 38a6e1f7c28b40a28f7de163e2bcc1d9
    function responseReceived(response) {
        $(".test").append(response.ctatt.eta[0]["staNm"])






    }

    $('#kimball').click(function (e) {
        console.log("click fired");
        return go();
        e.preventDefault(); // prevent the default anchor functionality
    });

    function go() {
        var url = 'http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=38a6e1f7c28b40a28f7de163e2bcc1d9&max=1&mapid=';
        var urlEnd = '&outputType=JSON';
        return $.getJSON(url + kimball + urlEnd, responseReceived);

    }
})



var kimball = "41290"
