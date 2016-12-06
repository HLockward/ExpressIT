
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
        });
    }

    /*
    //Acceder al dispositivo de camara web para mostrar el video
    navigator.getUserMedia({"video" : true}, 
    //navigator.webkitGetUserMedia("video",
        function (stream) {
            //video.src = webkitURL.createObjectURL(stream);//Obtenemos el video fuente de nuestra eitqueta video para mostrarlo
            video.src = stream;
            video.play();
        },
        function (err) {
            console.log("Unable to get video stream!");//obtenemos algun error posible al realizar esto
        }
    );
    */
}

var buttonsManager = function () {
    $('#TryExpress').click(function () {
        var buttonTryExpress = document.getElementById("TryExpress");
        if (buttonTryExpress.textContent == "Try it now!") {
            $('#TryExpress').text("ExpressIt");
            getCamera();
        } else {
            $('#divPopup').fadeIn();
            var canvas = document.getElementById('canvas');
            var context = canvas.getContext('2d');
            var video = document.getElementById('live');
            context.drawImage(video, 0, 0, 300, 225);

        }
    });
}

var activateAccordion = function(){
    var icons = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    };
    $("#accordion").accordion({
        collapsible: true,
        active: false,
        header: "h3",
    });
    //$("#accordion").accordion("option", "icons", icons);
}

var resizeSideBar = function () {
    var altura = $('.pure-content').height();
    $('.sidebar').css({
        'height': altura,
    });
}

var prepareDoc = function () {
    $('#divPopup').fadeOut();
    applySize();
    startBouncing();
    buttonsManager();
    activateAccordion();
    resizeSideBar();
}

$(document).click(function (event) {
    if ($('#divPopup').is(":visible")) {
        if (!$(event.target).closest('#divPopup').length) {
            $('#divPopup').fadeOut();
        }
    }
});

var applySize = function () {
    var wHeight = $(window).height();
    var barHeight = $('.navbar').height();
    var footerHeight = $('.footer').height();
    var finalHeight = wHeight - barHeight;
    var downHeight = finalHeight - footerHeight - 5;
    $('.pagePart').css({
        'height': finalHeight + 'px'
    });
    $('.carousel-inner').css({
        'height': finalHeight + 'px'
    });
    $('.pagePartDown').css({
        'height': downHeight + 'px'
    });
    $('body').css({
        'padding-top': barHeight + 'px',
    });
    var curBodySize = Math.max($('.pure-content').height() - 2, downHeight);
    $('.onlyPagePart').css({
        'height': curBodySize + 'px'
    });
    resizeSideBar();
};

/*
$(':not(#divPopup)').click(function () {
    $('#divPopup').fadeOut();
});
/*
$(document).click(function (e) {
    if ($(e.target).closest('#divPopup').length != 0) return false;
    $('#divPopup').fadeOut();
});
*/
$('document').ready(prepareDoc);

$(window).resize(applySize);
