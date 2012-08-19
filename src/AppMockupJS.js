function replace() {
    var paragraphTag = document.getElementById("para1");
    console.log("my paragraph is " + paragraphTag)
     paragraphTag.innerHTML = "new stuff now";
    //paragraphTag.outerHTML = "<a href='http://google.com'>new stuff now</a>";
}

function loadScript(){


var image = document.getElementById("phoneImage");
var imageWidth = image.width;
var imageHeight = image.height;
console.log("w: %d, h: %d", imageWidth, imageHeight);
}

function displayDate()
{
/* Must use innerHTML for non-input nodes*/
//document.getElementById('b').innerHTML = document.getElementById('a').innerHTML;
document.getElementById("a").innerHTML=Date();
}