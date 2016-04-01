test('Start time should be zero before the stopwatch is started', function(assert){
	assert.equal(Time.startTime, 0, "it was zero")
})

test('Time.running should be false before stopwatch is launched', function(assert){
	assert.equal(Time.running, 0, "value is equal to false")
})

test('After start time is running', function(assert){
	var done = assert.async()
	Time.start()
	setTimeout(function(){
	Time.updateTime()
	assert.ok(Time.currentTime > Time.startTime, true, 'Time.currentTime+" "+Time.startTime' )
	done()
	}, 200)
})

test('Reset should make everything as new', function(assert){
	var zero =  {
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
Time.reset()
assert.deepEqual(Time, zero, "resetted")

})