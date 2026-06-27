
$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'dgdh1.wav');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);


    $('#mycanvas').click(function() {
        audioElement.play();

    });

    $('#link_black').click(function() {
        audioElement.play();

    });


    $('.pro_box').click(function() {
        audioElement.play();

    });

    $('#poptxt').click(function() {
        audioElement.play();

    });

});

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'w0arn0ing0.mp3');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);


    $('#mycanvas').click(function() {
        audioElement.play();

    });

    $('#link_black').click(function() {
        audioElement.play();

    });


    $('.pro_box').click(function() {
        audioElement.play();

    });

    $('#poptxt').click(function() {
        audioElement.play();

    });

});
