// JavaScript Document
var length = 6;                //the total number of images
var current = 1;               //the current slide number

var slide_tray = new Array();  //an array to hold the uploaded images

function load_slide(place,file) {
   slide_tray[place] = new Image();
   slide_tray[place].src = file;
   }

//This loop is executed when the page is uploaded to initialise the image array
for (i=1; i<=length;  i++)
{
   var file_name = "images/slide" + i + ".jpg";	//Generate current iamge file name
   load_slide(i, file_name);
}

//Load previous image
function goforward() {
  current = current + 1;
  if( current > 6 ) {
     current = 1;
  }
  document.slide.src=slide_tray[current].src;  //update current image
  document.getElementById("PN").innerHTML = current;
}

//Load previous image
function gobackward() {
  current = current - 1;
  if( current < 1 ) {
     current = 6;
  }
  document.slide.src=slide_tray[current].src;  //update current image
  document.getElementById("PN").innerHTML = current;
}


//Form validation
function validate_email() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
}
function validate_form(thisform)
{
with (thisform)
{
if (validate_email(email, "The input email address is not valid!")==false)
  {email.focus(); return false;}
}
}



//Rotating bannars
iNum = 1;
function fading_rotating()
{
	iNum++;
	if (iNum == 6) {iNum=1;}
	document.getElementById("board").src= "images/nike-banner" + iNum +".jpg";
   var fade = document.getElementById("board");
	setTimeout("fading_rotating()", 3000);
  Spry.Effect.DoFade(fade,10)
}

//jQuery code
$(function() {

	var offsetX = 400;
	var offsetY = 10;

	$('a').hover(function(e) {
		var href = $(this).attr('href');
		$('<img id="largeImage" src="' + href + '" alt="big image" />')
		.css('top', e.pageY - offsetY)
		.css('left', e.pageX - offsetX)
		.appendTo('body');
	}, function() {
		$('#largeImage').remove();
	});

	$('a').mousemove(function(e) {
		$("#largeImage").css('top', e.pageY - offsetY).css('left', e.pageX - offsetX);
	});
});

//Displays small images vertically
 function smallImages(imgNum)
 {
	 var strLinks="";
	 for (i=1; i<=imgNum; i++)s
	 {
		strLinks +="<a href='large" + i + ".jpg'><img src='images/small" + i + ".jpg' alt='image'/></a><br/>";
	 }
	 document.write(strLinks);
 }
