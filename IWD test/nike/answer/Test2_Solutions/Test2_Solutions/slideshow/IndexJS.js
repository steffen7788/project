/* Q8.1. Show the previous and next image on the slideshow */
var currImage = 1;
function showImage(step) {
    currImage = currImage + step;
	
    //Disabled both previous and next button
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
	
    prevBtn.disabled = false;
    nextBtn.disabled = false;
	
    //Disabled previous button, if this is the first image
    //Disabled next button, if this is the last image
    if (currImage <= 1) {
        currImage = 1;
        prevBtn.disabled = true;
    } else if (currImage >= 6) {
        currImage = 6;
        nextBtn.disabled = true;
    }
	
    //Set which image should be displayed and which image
    //should be hidden
    var ul = document.getElementById('slideshow');
    var i, cnt;
    cnt = 0;
    for (i = 0; i < ul.childNodes.length; i++) {
		
        if (ul.childNodes[i].tagName != null) {
            cnt++;
            if (cnt == currImage) {
                ul.childNodes[i].style.display = "";
            } else {
                ul.childNodes[i].style.display = "none";
            }
        }
    }
}

/* Q10. Show and Hide the table of descriptions */
function showTable(num) {
    var tbl = document.getElementById("table" + num);
    tbl.style.display = "inline-table";//any value except for none
}
function hideTable(num) {
    var tbl = document.getElementById("table" + num);
    tbl.style.display = "none";
}

/* Q15. Change the stylsheet, set the cookie and get the cookie */
var styleCookieName = "argusStyle";
var styleTagID = "linkStyle";

//Generic function to set cookie
function setCookie (cookieName, cookieValue, numOfDays) {
    
    //set when the cookie should be expired
    var expiredDate = new Date();
    expiredDate.setDate(expiredDate.getDate() + numOfDays);
    
    //set the value of the cookie
    var val = escape(cookieValue);//make sure the content are well formatted
    if (expiredDate != null) {
        val += "; expires=" + expiredDate.toUTCString();
    }
   
    //set the cookie
    document.cookie= cookieName + "=" + val;
}

//Set the stylesheet to the defined style
function switchStyle (styleURL) {
    var styleElem = document.getElementById(styleTagID);
    styleElem.href = styleURL;
    
    setCookie(styleCookieName, styleElem.href, 2);
}

//Generic function to get cookie
function getCookie(c_name) {
    var c_value = document.cookie;//get all the cookies
    
    //Find the start position of the cookie that we want
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    
    if (c_start == -1) {//Cannot find the cookie, set the value to null
        c_value = null;
    } else {
        //Find the end position of the cookie that we want
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
           
        //Get the value of our cookie
        c_value = unescape(c_value.substring(c_start,c_end));
    }
    return c_value;
}

//Set the style from cookie
function setStyleFromCookie() {
    var css_title = getCookie(styleCookieName);
    if (css_title != null) {
        switchStyle(css_title);
    }
}

function bodyLoad () { 
    showImage(0);
    setStyleFromCookie();
}