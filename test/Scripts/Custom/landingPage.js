var localStream;

var apiConnection = function () {
    var pageUrl = "Home/Detect";
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var data = canvas.toDataURL("image/jpeg");
    
    var parameters = { "photo" : data};
    
    $.ajax({
        type: "POST",
        url: pageUrl,
        data: JSON.stringify(parameters),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            return true;
        },
        error: function (data, success, error) {
            alert("Error : " + error);
        }
    });

    return false;
}

var startBouncing = function () {
    setInterval(function () {
        $("#arrow").animate({ 'marginTop': '+=5em' });
        $("#arrow").animate({ 'marginTop': '-=5em' });
    }, 1000);
}

var getCamera = function () {
    //Guardar el objeto video en una variable
    var video = document.getElementById("live");

    // Get access to the camera!
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Not adding `{ audio: true }` since we only want video now
        navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
            localStream = stream;
        });
    }
}

var turnOffCamera = function () {
    $('#TryExpress').text("Try it now!");
    $('#StopExpress').prop('disabled', true);

    var video = document.getElementById("live");

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Not adding `{ audio: true }` since we only want video now
        //function (stream) {
            video.src = '';
            video.pause();
            var curStream = localStream.getTracks()[0];
            curStream.stop();
            curStream = null;
        //};
    }
}

var buttonsManager = function () {
    $('#TryExpress').click(function () {
        var buttonTryExpress = document.getElementById("TryExpress");
        if (buttonTryExpress.textContent == "Try it now!") {
            $('#TryExpress').text("ExpressIt");
            getCamera();
            $('#StopExpress').prop('disabled', false);
        } else {
            $('#divPopup').modal('show');
            var canvas = document.getElementById('canvas');
            var context = canvas.getContext('2d');
            var video = document.getElementById('live');
            if (apiConnection()){
                context.drawImage(video, 0, 0, 300, 225);
            }
        }
    });    
}

var prepareDoc = function () {
    startBouncing();
    buttonsManager();
}

$('document').ready(prepareDoc);