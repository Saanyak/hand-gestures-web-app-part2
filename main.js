prediction = "";

Webcam.set({
    width : 350,
    height : 300, 
    image_format : "png",
    png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log("ml5 version : ",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2EckXp9W0/model.json",modelLoaded);

function modelLoaded(){
    console("Model Loaded");
}

function speak(){
    var synth = window.speechSynthesis;
    var speak_data = "The first prediction is "+prediction1;
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
}