var modal = document.getElementById('myModal');
var img1 = document.getElementById('myImg1');


var modalImg1 = document.getElementById('img01');
var captionText = document.getElementById('caption');

img1.onclick = function() {
    modal.style.display = 'block';
    modalImg1.src = this.src;
    captionText.innerHTML = this.alt; 
}


var span = document.getElementsByClassName('close')[0];
span.onclick = function () {
    modal.style.display = 'none'
}