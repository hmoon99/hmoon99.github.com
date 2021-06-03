(function(){
  'use strict';

  const userTest = alert("Hi! Welcome to my site. Here are a few tasks for you to complete: 1. Click on the first button to enter the main page. 2. Hover/click each mystery cat. 3. Read about each cat and find which ones have extra photos.")
  const openLinks = document.querySelectorAll('.open');

  const meow= new Audio('media/meow.m4a');
  const meow2= new Audio('media/meow2.m4a');
  const hiss= new Audio('media/hissing.m4a');
  
  const start = document.getElementById('start');
  const sections = document.querySelectorAll('section');

  start.addEventListener('click', function() {
    sections[0].style.display = 'none';
    sections[1].style.display = 'block';
    });

  for(let i=0;i<openLinks.length; i++){
      openLinks[i].addEventListener('click', function(event){
          event.preventDefault();
          const thisBtn = event.target.id;
          document.getElementById(`ol-${thisBtn}`).className = 'overlay showing';
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
        const myCalicos = [
        'calicocat1.jpg', 
        'calicocat2.jpg', 
        ];
        const myChubs = [
        'chubscat1.jpg', 
        'chubscat2.jpg',
        'chubscat3.jpg',
        'chubscat4.jpg' 
        ];

        document.getElementById('next').addEventListener('click', nextPhoto);
        document.getElementById('previous').addEventListener('click', previousPhoto);
        
        const slide = document.getElementById('myCalico');
        
        let currentImage = 0;

        function nextPhoto() {
            currentImage++; 
            if (currentImage > myCalicos.length-1) {
                currentImage = 0;
            }
            slide.src = `photos/${myCalicos[currentImage]}`;
        }

        function previousPhoto() {
            currentImage--;
            if (currentImage < 0) {
                currentImage = myCalicos.length - 1;
            }
            slide.src = `photos/${myCalicos[currentImage]}`;
        }

        document.getElementById('next2').addEventListener('click', nextPhoto2);
        document.getElementById('previous2').addEventListener('click', previousPhoto2);
        
        const slide2 = document.getElementById('myChubs');
        
        let currentImage2 = 0;

        function nextPhoto2() {
            currentImage2++; 
            if (currentImage2 > myChubs.length-1) {
                currentImage2 = 0;
            }
            slide2.src = `photos/${myChubs[currentImage2]}`;
        }

        function previousPhoto2() {
            currentImage2--;
            if (currentImage2 < 0) {
                currentImage2 = myChubs.length - 1;
            }
            slide2.src = `photos/${myChubs[currentImage2]}`;
        }


})();