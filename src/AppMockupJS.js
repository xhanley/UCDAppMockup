function replace() {
    var paragraphTag = document.getElementById("para1");
    console.log("my paragraph is " + paragraphTag)
     paragraphTag.innerHTML = "new stuff now";
    //paragraphTag.outerHTML = "<a href='http://google.com'>new stuff now</a>";
}

function loadScript(){
alert("Welcome");
}


// in window.onload //document.getElementById("media_device").onchange = 
function recordScript() {
    // ready to record
    audioStream = this.data;
    recordCtlBut.disabled = false;
};

function recScript(){
    if (!recorder) {
        // start recording
        recordCtlBut.value = "Stop";
        recorder = audioStream.record();
        // set the maximum audio clip length to 10 seconds
        recordTimer = setTimeout(stopRecording, 10000);
    } else
        stopRecording();
};

function stopRecording() {
    clearTimeout(recordTimer);
    var audioFile = recorder.stop();
    useAudioFile(audioFile);
 
    // reset to allow new recording session
    recorder = null;
    recordCtlBut.value = "Record";
}