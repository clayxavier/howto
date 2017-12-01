/*function play(id){
	var ele = document.getElementById(id);
	if(ele.paused){
		ele.play();
	}else{
		ele.currentTime = 0;
		ele.play();
	}
}*/
function load() {

            var queue = new createjs.LoadQueue();
			createjs.Sound.alternateExtensions = ["mp3 wav ogg"];
            queue.installPlugin(createjs.Sound);
            queue.addEventListener("fileload", handleFileLoad);
            queue.addEventListener("complete", handleComplete);
            queue.loadManifest([
                {id:"kick", src:"assets/Kick.wav"},
	    		{id:"snare", src:"assets/Snare.wav"},
	    		{id:"hat", src:"assets/Hat.wav"},
	    		{id:"open-hat", src:"assets/Open-Hat.wav"},
	    		{id:"loop-1", src:"assets/Loop-1.wav"},
	    		{id:"loop-2", src:"assets/Loop-2.wav"},
	    		{id:"ayy", src:"assets/AYY.wav"},
	    		{id:"sfx", src:"assets/SFX.wav"}
            ]);
		}

function handleComplete(event) {

}

function handleFileLoad(event){
	document.getElementById("btnA").disabled=false;
	document.getElementById("btnB").disabled=false;
	document.getElementById("btnC").disabled=false;
	document.getElementById("btnD").disabled=false;
	document.getElementById("btnE").disabled=false;
	document.getElementById("btnF").disabled=false;
	document.getElementById("btnG").disabled=false;
	document.getElementById("btnH").disabled=false;
}

load();

document.getElementById("btnA").addEventListener("mousedown", function(){ playSound("kick")});
document.getElementById("btnB").addEventListener("mousedown", function(){ playSound("snare")});
document.getElementById("btnC").addEventListener("mousedown", function(){ playSound("hat")});
document.getElementById("btnD").addEventListener("mousedown", function(){ playSound("open-hat")});
document.getElementById("btnE").addEventListener("mousedown", function(){ playSound("loop-1")});
document.getElementById("btnF").addEventListener("mousedown", function(){ playSound("loop2")});
document.getElementById("btnG").addEventListener("mousedown", function(){ playSound("ayy")});
document.getElementById("btnH").addEventListener("mousedown", function(){ playSound("sfx")});

document.getElementById("btnA").addEventListener("touchstart", function(){ playSound("kick")});
document.getElementById("btnB").addEventListener("touchstart", function(){ playSound("snare")});
document.getElementById("btnC").addEventListener("touchstart", function(){ playSound("hat")});
document.getElementById("btnD").addEventListener("touchstart", function(){ playSound("open-hat")});
document.getElementById("btnE").addEventListener("touchstart", function(){ playSound("loop-1")});
document.getElementById("btnF").addEventListener("touchstart", function(){ playSound("loop-2")});
document.getElementById("btnG").addEventListener("touchstart", function(){ playSound("ayy")});
document.getElementById("btnH").addEventListener("touchstart", function(){ playSound("sfx")});




document.body.onkeydown = function(event){
	if (event.key=='1') {
		playSound("kick")
	}
	if(event.key=='2'){
		playSound("snare");

	}
	if(event.key=='3'){
		playSound("hat");
	}
	if(event.key=='4'){
		playSound("open-hat");
	}
	if(event.key=='5'){
		playSound("loop-1");
	}
	if(event.key=='6'){
		playSound("loop-2");
	}
	if(event.key=='7'){
		playSound("ayy");
	}
	if(event.key=='8'){
		playSound("sfx");
	}
}


function playSound(id) {
	createjs.Sound.play(id);
}

/*function init(){

	// if initializeDefaultPlugins returns false, we cannot play sound in this browser
                if (!createjs.Sound.initializeDefaultPlugins()) {return;}

	var audioPath = "assets/";
	var sounds = [
	    {id:"kick-1", src:"KICK-1.wav"},
	    {id:"kick-2", src:"KICK-2.wav"},
	    {id:"snare-1", src:"SNARE-1.wav"},
	    {id:"snare-2", src:"SNARE-2.wav"},
	    {id:"hihat", src:"HI-HAT.wav"},
	    {id:"open-hihat", src:"OPEN HI-HAT.wav"},
	    {id:"ayy", src:"AYY.wav"},
	    {id:"sfx", src:"SFX.wav"}
	];
	createjs.Sound.alternateExtensions = ["mp3 wav ogg"];
	createjs.Sound.addEventListener("fileload", handleLoad);
	createjs.Sound.registerSounds(sounds, audioPath);
}
function handleLoad(event) {
                createjs.Sound.play(event.src);
            }
        var soundID = "snare-1";

      function loadSound () {
        createjs.Sound.registerSound("snare-1", soundID);
      }

      function playSound () {
        createjs.Sound.play(soundID);
      }*/

