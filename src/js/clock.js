var Clock = function() 
{
	this.stage;
	this.layer = new Kinetic.Layer();
	this.hour = 0;
	this.min = 0;
	this.srcClock = "img/clock1.png";
	this.clockImage = new Image();
	this.hourImage = new Image();
	this.minImage = new Image();

	this.init = function() 
	{
		this.stage = new Kinetic.Stage({
      		container: 'game',
     		 width: 400,
      		height: 400,
      	});
		
      	this.layer = new Kinetic.Layer();

      	console.log(this.layer);
		this.hour = Math.round(Math.random() * 24);
		this.min = Math.round(Math.random() * 60);

		this.clockImage.src = this.srcClock;

		this.clockImage.onload = function() 
		{
			var image = new Kinetic.Image({
				image: this.clockImage,
				width: 220,
         		height: 228,
			});
			console.log(Clock);
		};

		this.layer.add(this);
		this.layer.draw();

		this.hourImage.src = "img/secondHand.png";

		this.hourImage.onload = function() 
		{
			var image = new Kinetic.Image({
				image: this.hourImage,
				x: 110,
          		y: 114,
				rotation: this.hour /24 * 360,
			});
		};

		this.layer.add(this);
		this.layer.draw();

		this.hourImage.src = "img/firstHand.png";

		this.minImage.onload = function() 
		{
			var image = new Kinetic.Image({
				image: this.minImage,
				x: 110,
          		y: 114,
				rotation: this.min /60 * 360,
			});
		};

		this.layer.add(this);
		this.layer.draw();

		this.stage.add(this.layer);
		this.layer.draw();
	};
};