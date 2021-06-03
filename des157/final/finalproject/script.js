(function(){
  'use strict';

  const openLinks = document.querySelectorAll('.open');
  const start = document.getElementById('start');
  const sections = document.querySelectorAll('section');

  //different cat sounds
  const meow= new Audio('media/meow.m4a');
  const meow2= new Audio('media/meow2.m4a');
  const hiss= new Audio('media/hissing.m4a');

  //when you click the first "Let's go meet them!" button, move to the next page
  start.addEventListener('click', function() {
    sections[0].style.display = 'none';
    sections[1].style.display = 'block';
    });

  //clicking on each mystery cat box to show the overlay
  for(let i=0;i<openLinks.length; i++){
      openLinks[i].addEventListener('click', function(event){
          event.preventDefault();
          const thisBtn = event.target.id;
          document.getElementById(`ol-${thisBtn}`).className = 'overlay showing';
          //when clicking on certain boxes, a specific cat sound will play
          if(thisBtn == 'four'){
              hiss.play();
          }
          if(thisBtn == 'two'||thisBtn == 'six'){
            meow2.play();
        }
          if(thisBtn == 'one'|| thisBtn == 'three' || thisBtn == 'five'){
            meow.play();
        }

      });
  }
  //when you click the close button, overlay is closed
  const closeBtns = document.querySelectorAll('.close');
    for(let i=0;i<closeBtns.length; i++){
        closeBtns[i].addEventListener('click', function(event){
            event.preventDefault();
            document.querySelector('.showing').className = 'overlay hidden';
            
        });
    }
    //when pressing escape key, exits the overlay
    document.addEventListener('keydown', function(event){
        event.preventDefault();
        if (event.key === 'Escape'){
            document.querySelector('.showing').className = 'overlay hidden';
        }
    });
        //two calico cat photos array
        const myCalicos = [
        'calicocat1.jpg', 
        'calicocat2.jpg', 
        ];
        //four chubs cat photos array
        const myChubs = [
        'chubscat1.jpg', 
        'chubscat2.jpg',
        'chubscat3.jpg',
        'chubscat4.jpg' 
        ];
        //previous and next buttons clicked for calico cat
        document.getElementById('next').addEventListener('click', nextPhoto);
        document.getElementById('previous').addEventListener('click', previousPhoto);
        
        //slideshow that will grab each photo from calico cat array
        const slide = document.getElementById('myCalico');
        
        let currentImage = 0;
        
        //showing the next photo in the calico slideshow
        function nextPhoto() {
            currentImage++; 
            if (currentImage > myCalicos.length-1) {
                currentImage = 0;
            }
            slide.src = `photos/${myCalicos[currentImage]}`;
        }
        //showing the previous photo in calico slideshow
        function previousPhoto() {
            currentImage--;
            if (currentImage < 0) {
                currentImage = myCalicos.length - 1;
            }
            slide.src = `photos/${myCalicos[currentImage]}`;
        }
        //previous and next buttons clicked for chubs cat
        document.getElementById('next2').addEventListener('click', nextPhoto2);
        document.getElementById('previous2').addEventListener('click', previousPhoto2);
        
        //slideshow that will grab each photo from chubs cat array
        const slide2 = document.getElementById('myChubs');
        
        let currentImage2 = 0;

        //showing the next photo in the chubs slideshow
        function nextPhoto2() {
            currentImage2++; 
            if (currentImage2 > myChubs.length-1) {
                currentImage2 = 0;
            }
            slide2.src = `photos/${myChubs[currentImage2]}`;
        }
        //showing the previous photo in the chubs slideshow
        function previousPhoto2() {
            currentImage2--;
            if (currentImage2 < 0) {
                currentImage2 = myChubs.length - 1;
            }
            slide2.src = `photos/${myChubs[currentImage2]}`;
        }


})();