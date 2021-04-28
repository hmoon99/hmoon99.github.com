(function(){
    'use strict';
      console.log("reading js");
  
      const myForm = document.querySelector("#myform");
      const madlib = document.querySelector('#madlib');
      const formData = document.querySelectorAll("input[type=text]");
      for(let eachField of formData){
          eachField.value = "";
      }
  
      myForm.addEventListener('submit', function(event){
          event.preventDefault();
          const name=document.querySelector('#name').value;
          const noun1=document.querySelector('#noun1').value;
          const noun2=document.querySelector('#noun2').value;
          const noun3=document.querySelector('#noun3').value;
          const verb=document.querySelector('#verb').value;
          const adj1=document.querySelector('#adj1').value;
          const adj2=document.querySelector('#adj2').value;
          const adj3=document.querySelector('#adj3').value;
          const beverage=document.querySelector('#beverage').value;
          const adverb=document.querySelector('#adverb').value;
          const myArray =[name, noun1, noun2, noun3, verb, adj1, adj2, adj3, beverage, adverb];
          myArray.forEach.color="red";
          document.getElementById(`myform`).className = 'overlay hidden';
          document.getElementById(`madlib`).className = 'overlay showing';
  
          let myText;
        
          if(name && noun1 && noun2 && noun3 && adj1 && adj2 && adj3&& verb && beverage && adverb){
              myText = `Hello ${name}! Spring is a time of renewal, rebirth, and ${noun1}. You should plant a ${noun2}. Summer is the warmest time of year, which is the perfect time to ${verb} to the beach. It would be so ${adj1}. Autumn is when the leaves ${adverb} fall from the trees. Halloween is celebrated and you will dress up as a ${noun3}. Winter is cold and ${adj2}. You can drink some hot ${beverage}, and open ${adj3} presents.`;
              
             
          }else{
              myText = "Please give me words so I can make your Mad Lib!";
          }
  
          
          madlib.innerHTML=myText;
      });

  })();