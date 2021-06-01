(function(){
  'use strict';
  const openLinks = document.querySelectorAll('.open');
  const meow= new Audio('media/meow.m4a');

  /* var pageTop;
  var bodyTag = document.querySelector('body');

window.addEventListener('scroll', function(){
    pageTop = window.pageYOffset;
        switch(true){
            case pageTop < 500: bodyTag.className="one"; break;
            case pageTop < 1000: bodyTag.className="two"; break;
            case pageTop < 1500: bodyTag.className="three"; break;
            case pageTop < 2000: bodyTag.className="four"; break;
            default: bodyTag.className="five";
        }
}); */
  for(let i=0;i<openLinks.length; i++){
      openLinks[i].addEventListener('click', function(event){
          event.preventDefault();
          const thisBtn = event.target.id;
          document.getElementById(`ol-${thisBtn}`).className = 'overlay showing';
          meow.play();
      });
  }
  const closeBtns = document.querySelectorAll('.close');
    for(let i=0;i<closeBtns.length; i++){
        closeBtns[i].addEventListener('click', function(event){
            event.preventDefault();
            document.querySelector('.showing').className = 'overlay hidden';
            
        });
    }
    document.addEventListener('keydown', function(event){
        event.preventDefault();
        if (event.key === 'Escape'){
            document.querySelector('.showing').className = 'overlay hidden';
        }
    });
        const myImages = [
        'calicocat1.jpg', 
        'calicocat2.jpg', 
        ];

        document.getElementById('next').addEventListener('click', nextPhoto);
        document.getElementById('previous').addEventListener('click', previousPhoto);
        
        const slide = document.getElementById('myCalico');
        
        let currentImage = 0;

        function nextPhoto() {
            currentImage++; 
            if (currentImage > myImages.length-1) {
                currentImage = 0;
            }
            slide.src = `photos/${myImages[currentImage]}`;
        }

        function previousPhoto() {
            currentImage--;
            if (currentImage < 0) {
                currentImage = myImages.length - 1;
            }
            slide.src = `photos/${myImages[currentImage]}`;
        }


})();