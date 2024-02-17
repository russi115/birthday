$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    var audio = document.getElementById("audioPlayer")
    var btn_audio = document.getElementById("audio_player")
    var svgs = document.getElementById("svgs")
    
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
        auidoPlay();
    });
    btn_reset.click( function() {
        close();
        auidoPause();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
    function auidoPlay(){
        audio.play();
        btn_audio.style.opacity = 1;
        svgs.style.opacity = 1
    }
    function auidoPause(){
        audio.pause();
        audio.currentTime = 0;
        btn_audio.style.opacity = 0;
        svgs.style.opacity = 0
    }
   
});