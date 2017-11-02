var imgCount = 1;

showDivs(imgCount);

function plusDivs(n) {
    showDivs(imgCount += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slideshow");
    if (n > x.length) {
    	imgCount = 1
    } ;

    if (n < 1) {
    	imgCount = x.length
    } ;

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[imgCount-1].style.display = "block"; 
}