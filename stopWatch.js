var Time = {
	startTime: 0,
	stopTime: 0,
	totalStopTime: 0,	
	running: false,
	currentTime: 0,
	hours: 0,
	minutes: 0,
	seconds: 0,
	cSeconds: 0
}


Time.start = function(){
	if(this.startTime == 0)this.startTime = Date.now()
	if(this.stopTime > 0) this.totalStopTime += Date.now() - this.stopTime
	this.stopTime = 0
	this.running = true 
}

Time.updateTime = function(){
	this.currentTime = Date.now()
	this.hours = ~~((this.currentTime - this.startTime - this.totalStopTime)/(1000*3600))
	this.minutes = ~~((this.currentTime - this.startTime - this.totalStopTime)/(1000*60))%60
	this.seconds = ~~((this.currentTime - this.startTime - this.totalStopTime)/(1000))%60
	this.cSeconds = ~~((this.currentTime - this.startTime - this.totalStopTime)/(10))%100
	
}

Time.reset = function(){
		this.startTime = 0;
		this.stopTime = 0;
		this.running = false;
		this.currentTime = 0;
		this.totalStopTime = 0;
		this.hours = 0;
		this.minutes = 0;
		this.seconds = 0;
		this.cSeconds = 0;

		
	}
Time.refresh = function(){
		document.getElementById('hours').innerHTML = (Time.hours < 10 ? '0' : '')+Time.hours
		document.getElementById('minutes').innerHTML = (Time.minutes < 10 ? '0' : '')+Time.minutes
		document.getElementById('seconds').innerHTML = (Time.seconds < 10 ? '0' : '')+Time.seconds
		document.getElementById('cSeconds').innerHTML = (Time.cSeconds < 10 ? '0' : '')+Time.cSeconds
		document.getElementById('start').innerHTML = 'START'

}


Time.stop = function(){
	this.running = false
	this.stopTime = Date.now()
	
}




