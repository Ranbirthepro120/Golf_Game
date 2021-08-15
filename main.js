var canvas = new fabric.Canvas('myCanvas');


ball_obj = ""
ball_x=0;
ball_y=0;

hole_obj = ""
hole_x=675;
hole_y=350;


block_width = 5;
block_height = 5;

function load_img()
{
	fabric.Image.fromURL("golfhole.png", function(Img)
	{
        hole_obj = Img;
		hole_obj.scaleToWidth(90);
		hole_obj.scaleToHeight(90);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
        canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
    fabric.Image.fromURL("ball.png", function(Img)
	{
        ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
        canvas.add(ball_obj);
	});	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y))
    {
	canvas.remove(ball_obj)
	document.getElementById("htg").innerHTML="You Have Sunken the Ball in the Cup!!";
	document.getElementById("myCanvas").style.borderColor="limegreen";
    }
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >=60)
		{
			ball_y = ball_y - block_height;
			console.log("Move Height = " + block_height);
			console.log("When the Up Arrow Key is Clicked, X = "+ ball_x + ", Y = " + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		if(ball_y <=440)
		{
			ball_y = ball_y + block_height;
			console.log("Move Height = " + block_height);
			console.log("When the Down Arrow Key is Clicked, X = " + ball_x + ", Y = " + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_width;
			console.log("Move Width = " + block_height);
			console.log("When the Left Arrow Key is Clicked, X = "+ ball_x + ", Y = "+ ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1040)
		{
			ball_x = ball_x + block_width;
			console.log("Move Width = " + block_width);
			console.log("When the Right Arrow Key is Clicked, X = " + ball_x + ", Y = "+ ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

