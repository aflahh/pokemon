// function zoom(e){
//     var zoomer = e.currentTarget;
//     e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
//     e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX;
//     x = offsetX/zoomer.offsetWidth*100;
//     y = offsetY/zoomer.offsetHeight*100;
//     zoomer.style.position = x + '% ' + y + '%';
//   }

document.getElementById("ImagePoke").addEventListener("click", function(){
    mybox.style.display = "block";
})

document.getElementById("closebtn").addEventListener("click", function(){
    mybox.style.display = "none";
})