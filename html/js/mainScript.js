iNum = 1;
function fading_rotating()
{
	iNum++;
	if (iNum == 6) {iNum=1;}
	document.getElementById("board").src= "images/image" + iNum +".jpg";
	setTimeout("fading_rotating()", 3000);
}

// twitter
function over(){
document.getElementById("twitter").style.innerHTML="Follw our twitter";
}


// image mouseover
// function over1() {
// 	var element =  document.getElementById("image1");
// 	element.innerHTML = "Ratanui St,<br>Henderson<br>Auckland<br>New Zealand";
// }
//
// function over2() {
// 	var element =  document.getElementById("image2");
// 	element.innerHTML = "Ratanui St,<br>Henderson<br>Auckland<br>New Zealand";
// }
//
// function over3() {
// 	var element =  document.getElementById("image3");
// 	element.innerHTML = "Ratanui St,<br>Henderson<br>Auckland<br>New Zealand";
// }
//
// function disappear1() {
// 	var element =  document.getElementById("image1");
// 	element.innerHTML = "";
// }
//
// function disappear2() {
// 	var element =  document.getElementById("image2");
// 	element.innerHTML = "";
// }
//
// function disappear3() {
// 	var element =  document.getElementById("image3");
// 	element.innerHTML = "";
// }
$(document).ready(function(){
	$("#image1").on('mouseenter', function(){
		$('.para1').show()
	})

	$("#image1").on('mouseleave', function(){
		$('.para1').hide()
	})

	$("#image2").on('mouseenter', function(){
		$('.para2').show()
	})

	$("#image2").on('mouseleave', function(){
		$('.para2').hide()
	})

	$("#image3").on('mouseenter', function(){
		$('.para3').show()
	})

	$("#image3").on('mouseleave', function(){
		$('.para3').hide()
	})

// $("#image1").hover(function(){ //if you hover over the button
// 	$(".para1").toggle()
// })
// $("#image2").hover(function(){ //if you hover over the button
// 	$(".para2").toggle()
// })
// $("#image1").hover(function(){ //if you hover over the button
// 	$(".para3").toggle()
// })
})



// //added function to do the required validation for the email address field
// function validate_form(thisform)
// {
// with (thisform)
// {
// if (validate_email(email, "The input email address is not valid!")==false)
//   {email.focus(); return false;}
// }
// }
//
// //Validate emails
// function validate_email(field,alerttxt)
// {
// with (field)
// {
// apos=value.indexOf("@");
// dotpos=value.indexOf(".");
// if (apos<1||dotpos-apos<4)
//   {alert(alerttxt);return false;}
// else {return true;}
// }
// }



function decide(){
	var code = document.getElementById("code").value;
	var lowercase = /[^a-z]/gi;
	if(code.length!=5&&code.value!=lowercase)
	{
		alert('Code should be 5-digit numbers and contains 4 lowercase letters');
	}
}
