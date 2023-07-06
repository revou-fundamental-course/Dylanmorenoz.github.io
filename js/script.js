var slideIndex = 1;
setInterval(function() {
    plusDivs(1);
}, 1000);

function plusDivs(index) {
    showimg(slideIndex += 1)
}

function showimg(index) {
    //index = 2
    var i;
    var imgList = document.getElementsByClassName("gmbrtngh");
    if (index>imgList.length) { slideIndex = 1; }
    if (index<1) { slideIndex = imgList.length}
    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    imgList[slideIndex - 1].style.display = "block";
}
