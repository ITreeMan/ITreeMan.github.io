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
    if (image.src.match("images/section-image-2.png")) {
        image.src = "images/section-image-1.png";
    }
    else {
        image.src = "images/section-image-2.png";
    }
}

function changeImageTwo() {
    var image = document.getElementById('myImage');
    if (image.src.match("images/section-image-3.png")) {
        image.src = "images/section-image-1.png";
    }
    else {
        image.src = "images/section-image-3.png";
    }
}

function changeImageThree() {
    var image = document.getElementById('myImage');
    if (image.src.match("images/section-image-2.png")) {
        image.src = "images/section-image-1.png";
    }
    else {
        image.src = "images/section-image-2.png";
    }
}