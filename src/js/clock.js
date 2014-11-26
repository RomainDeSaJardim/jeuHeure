'use strict';

var Clock = function(src){
	var _self = this;
  	var stage;
  	var layerClock;
  	var adresse='';
  	var heures = 0;
  	var minutes = 0;
  	var imageClock = new Image();
  	var imageHour = new Image();
  	var imageMinute = new Image();

  	_self.construct =  function (src) {
  		_self.init(src);
  	};

  	_self.init = function (src) {
  		console.log(src);
  		if(typeof(src) == 'undefined' || src == null || src == '')
  		{
  			src = 'img/clock1.png'
  		}
    //init stage
    	stage = new Kinetic.Stage({
     		container: 'clock',
     		width: 400,
      		height: 400,
    	});

    	_self.setHeureMinute();
	    //init layers
	    layerClock = new Kinetic.Layer();

	    imageClock.src = src;
	    
	    imageClock.onload = function () {
	        var imgclock = new Kinetic.Image({
	          	width: 400,
	          	height: 400,
	          	image: imageClock,
	          	draggable: false
	        });
	     	// add the shape to the layer
	      	layerClock.add(imgclock);
	      	layerClock.draw();
	    };
	    //Init Minutes
	    imageMinute.src = 'img/firstHand.png';
	    imageMinute.onload = function () {
	      	console.log(_self.minutes);
	      	var firstHandclock = new Kinetic.Image({
	         	x: 198,
	         	y: 192,
	         	offsetX: 3,
	         	offsetY: 3,
	          	width: 6,
	          	height: 120,
	          	rotation: 180 + _self.minutes * 6, // *6 car un tour d'horloge = 360° donc pour 1 minute on a 360/60 = 6°
	          	image: imageMinute
	        });

	      	layerClock.add(firstHandclock);
	      	layerClock.draw();
	    };
	    imageHour.src = 'img/secondHand.png';
	    imageHour.onload = function () {
	      	console.log(_self.heures);
	      	var secondHandclock = new Kinetic.Image({
	          	x: 198,
	          	y: 192,
	          	width: 6,
	          	height: 80,
	          	offsetX: 3,
	         	offsetY: 3,
	          	rotation: 180 + _self.heures * 30 + _self.minutes * 0.5,
	          	image: imageHour
	        });
	      	// add the shape to the layer
	      	layerClock.add(secondHandclock);
	      	layerClock.draw();
	    };
	    stage.add(layerClock);
	    layerClock.draw();
	};

	_self.getTimeDay = function () {
		//console.log(_self.heures);
		if(_self.heures >= 12)
		{
			return "après-midi";
		}
		else
		{
			return "matin";
		}
	};

	_self.getHeures = function () {
		return _self.heures;
	};

	_self.getMinutes = function () {
		return _self.minutes;
	};

	_self.setHeureMinute = function () {
		_self.heures = Math.round(Math.random() * 24);
		_self.minutes = 5 * Math.round(Math.random()/5 * 60);
		if(_self.minutes == 60)
		{
			_self.heures += 1;
			_self.minutes = 0;
		}
		if(_self.heures == 24)
		{
			_self.heures = 0;
		}
	};

	_self.checkTime = function(heures, minutes){
		if(heures == _self.heures && minutes == _self.minutes){
			return true;
		}
		return false;
	}

	_self.construct(src);

 };