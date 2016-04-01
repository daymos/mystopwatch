
document.getElementById('start').addEventListener('click', function(){Time.start()});
document.getElementById('stop').addEventListener('click', function(){Time.stop()});
document.getElementById('reset').addEventListener('click', function(){Time.reset()});


setInterval(function(){
	if(Time.running){
		Time.updateTime()
		Time.refresh()
	}
	if(Time.startTime > 0 && Time.running == false) document.getElementById('start').innerHTML = 'RESUME'
	Time.refresh()
	
	
},10)