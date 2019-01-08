/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */



// Skill bar .js
jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},3000);
	});
});




// chang pic

function changeImageOne() {
    var image = document.getElementById('myImage');
    if (image.src.match("images/section-image-2.jpg")) {
        image.src = "images/section-image-1.jpg";
    }
    else {
        image.src = "images/section-image-2.jpg";
    }
}

function changeImageTwo() {
    var image = document.getElementById('myImage');
    if (image.src.match("images/section-image-3.jpg")) {
        image.src = "images/section-image-1.jpg";
    }
    else {
        image.src = "images/section-image-3.jpg";
    }
}

function changeImageThree() {
    var image = document.getElementById('myImage');
    if (image.src.match("images/section-image-2.jpg")) {
        image.src = "images/section-image-1.jpg";
    }
    else {
        image.src = "images/section-image-2.jpg";
    }
}





// Slide port 1 
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// Slide port 2 
var slideIndexOne = 1;
showDivsOne(slideIndexOne);

function plusDivsOne(n) {
  showDivsOne(slideIndexOne += n);
}

function showDivsOne(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesOne");
  if (n > x.length) {slideIndexOne = 1}
  if (n < 1) {slideIndexOne = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndexOne-1].style.display = "block";  
}

// Slide port 3 
var slideIndexTwo = 1;
showDivsTwo(slideIndexTwo);

function plusDivsTwo(n) {
  showDivsTwo(slideIndexTwo += n);
}

function showDivsTwo(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesTwo");
  if (n > x.length) {slideIndexTwo = 1}
  if (n < 1) {slideIndexTwo = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndexTwo-1].style.display = "block";  
}

