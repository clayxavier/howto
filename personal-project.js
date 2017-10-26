function play(id){
	var ele = document.getElementById(id);
	if(ele.paused){
		ele.play();
	}else{
		ele.currentTime = 0;
		ele.play();
	}
}
