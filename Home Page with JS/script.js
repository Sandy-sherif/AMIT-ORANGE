function changeimage(img){
    var imgsrc=img.src;
    console.log(imgsrc);
    var image=document.querySelector('.image');
    image.setAttribute('src',imgsrc);

}