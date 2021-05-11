(function(){
  'use strict';
  const openLinks = document.querySelectorAll('.open');
  for(let i=0;i<openLinks.length; i++){
      openLinks[i].addEventListener('click', function(event){
          event.preventDefault();
          const thisBtn = event.target.id;
          document.getElementById(`ol-${thisBtn}`).className = 'overlay showing';
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

})();