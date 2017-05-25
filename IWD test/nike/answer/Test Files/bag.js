// JavaScript Document
var length = 7;                //the total number of images
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

//Load next image


//Load previous image
function gobackward() {
  current = current - 1;
  if( current < 1 ) {
     current = length;
  }
  document.slide.src=slide_tray[current].src;  //update current image
  document.getElementById("PN").innerHTML = current;
}

function changepage(i)
{
	if(i==1)
	window.open("http://hyperdisc.unitec.ac.nz");
	if(i==2)
	window.open("http://www.microsoft.com");
	if(i==3)
	window.open("http://www.unitec.ac.nz");
	if(i==4)
	window.open("http://www.auckland.ac.nz");
	if(i==5)
	window.open("http://www.aut.ac.nz");
	if(i==6)
	window.open("http://www.google.co.nz");
	if(i==7)
	window.open("http://www.oracle.com");
	if(i==8)
	window.open("http://hyperdisc.unitec.ac.nz");
}


//added function to do the required validation for the email address field
function validate_form(thisform)
{
with (thisform)
{
if (validate_email(email, "The input email address is not valid!")==false)
  {email.focus(); return false;}
}
}

 
 iNum = 1;
 
function fading_rotating()
{
	iNum++;
	if (iNum == 6) {iNum=1;}
	document.getElementById("logo").src= "Images/bag_banner" + iNum +".jpg";	
	setTimeout("fading_rotating()", 3000);
		
}