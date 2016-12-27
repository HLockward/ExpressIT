var resizeSideBar = function () {
    var altura = $('.pure-content').height();
    $('.sidebar').css({
        'height': altura,
    });
}

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
    $('.onlyPagePart').css({
        'height': downHeight + 'px'
    });
    
    resizeSideBar();
};

var prepareDoc = function () {
    applySize();
}

$('document').ready(prepareDoc);

$(window).resize(applySize);
