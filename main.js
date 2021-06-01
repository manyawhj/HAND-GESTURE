Webcam.set({
height:300,
width:350,
image_format:"png",
png_quality:90
});

cam=document.getElementById("camera");
Webcam.attach("#camera");
    
function take_snapshot(){
    Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML="<img id='snapshot' src='"+data_uri+"'>";
    })
}

console.log("Ml5 Version:",ml5.version);
classify=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/uOImAMU-o/model.json",modelLoaded)

 function modelLoaded(){
    console.log("Model Loaded")
 };

 function speak(){

var Synth= window.speechSynthesis;
speak_data_1="The meaning of thi hand gesture is"+Prediction;
var utterthis=new SpeechSynthesisUtterance(speak_data_1);
Synth.speak(utterthis)
    
 }

 function check(){
     img=document.getElementById("snapshot");
     classify.classify(img , gotresult);
 }

function gotresult(error, result){
    
    if(error){
    console.error(error);
    } else {
        console.log(result);
        document.getElementById("resul_meaning").innerHTML=result[0].label;
        Prediction=result[0].label;
        speak();

        if (result[0].label=="STOP"){
            document.getElementById("upadate_emoji").innerHTML="&#9995;";
        }

        if (result[0].label=="VICTORY"){
            document.getElementById("upadate_emoji").innerHTML="&#9996;";
        }

        if (result[0].label=="BEST OF LUCK/ GOOD JOB"){
            document.getElementById("upadate_emoji").innerHTML="&#128077";
        }

        if (result[0].label=="NICE"){
            document.getElementById("upadate_emoji").innerHTML="&#128076;";
        }

        if (result[0].label=="HELLO"){
            document.getElementById("upadate_emoji").innerHTML="&#128075;";
        }

        if (result[0].label=="PLEASE/ SORRY/ GREETINGS"){
            document.getElementById("upadate_emoji").innerHTML="&#128591;";
        }

     }
}