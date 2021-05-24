var points;
var font;
function preload()
{
  font = loadFont('assets/Calistoga-Regular.ttf');
}

//////////////////////////////////////////////////////////////////////
function setup()
{
  createCanvas(900, 400);
  background(0);

  points = font.textToPoints('c o d e', 50, 300, 300, {
    sampleFactor: .3,
    simplifyThreshold: 0
  });
}

//////////////////////////////////////////////////////////////////////
function draw()
{
  // alpha value of fill(). mouseY is mapped to values between 0 and 255.
  var alph = map(mouseY, 0, height, 0, 255);

  var amt = map(mouseX, 0, width, 0, 80); // map mouse movement on X axis between 0 and 200.
  // the more to the right the mouse is, the bigger the amt amount between which x and y are mapped.
  // and since x and y are added to the point coordinates before an ellipse is drawn,
  // then the farther off the ellipse will be from the original point location.
  // so as the mouse is moved to the right, the font becomes more blurred as the ellipses are farther
  // from their intended locations.

   // black, with an alpha value. If alpha is 255 (i.e. mouseY close to height),
   // fill is black opaque, so the rectangle drawn
   // at the start of every draw iteration will cover completely all previous drawings, therefore
   // leaving no traces of the dots behind.
   // if alpha is closer to zero (i.e. alpha close to 0), the rectangle is black transparent,
   // meaning any drawing traces from previous draw iterations are still visible.
  fill(0, alph);
  rect(0,0,width,height);

  for(var i = 0; i < points.length; i++)
  {
    fill(255, 0, 0);
    noStroke();
    ellipse(points[i].x + x, points[i].y + y, 5);

    // if you just give frameCount to noise, then all points will have the same noise value returned.
    // to make the returned noise value unique to each point, simply make the input into the noise function unique
    // to each point. This can be done by adding the x and y coords of the point in question to the frameCount.
    // By doing this, each point will have a unique noise value associated with it.
    // to decouple nY from nX, simply add an arbitrary value to noise input of nY so that its noise is obtained at an offset value.
    // This will make it so that when the ellipse moves, it no longer moves just diagonally be cause nX no longer equals nY.
    var nX = noise(frameCount*0.01 + points[i].x + points[i].y);
    var x = map(nX, 0, 1, -amt, amt); // The 

    var nY = noise(frameCount*0.01 + points[i].x + points[i].y + 1);
    var y = map(nY, 0, 1, -amt, amt);
  }
}
