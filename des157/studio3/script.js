(function() {
  "use strict"
        let startGame = document.getElementById('startgame');
        let gameControl = document.getElementById('gamecontrol');
        let game = document.getElementById('game');
        let score = document.getElementById('score');
        let actionArea = document.getElementById('actions');

        //scores for each pig in container
        let pig1score = document.getElementById('pig1-score');
        let pig2score = document.getElementById('pig2-score');

        //sound for when dice are rolled
        const rollsound= new Audio('media/rollingdice.m4a');
        //sound for when the start game button is clicked
        const clicksound= new Audio('media/clicking.m4a');
        //sound for when the game is over and someone wins
        const winsound= new Audio('media/winning.m4a');



        let gameData = {
	        dice: ['dice1.png', 'dice2.png', 'dice3.png', 
		   'dice4.png', 'dice5.png', 'dice6.png'],
          players: ['Player 1', 'Player 2'],
	        score: [0, 0],
	        roll1: 0,
	        roll2: 0,
	        rollSum: 0,
	        index: 0,
	        gameEnd: 29
        };

        //click event for start game button which is also the wanna quit button
        startGame.addEventListener("click", function(){
            gameData.index = Math.round(Math.random());
            gameControl.innerHTML = '<h2>The Game Has Started</h2>';
            gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';
            clicksound.play();

            document.getElementById('quit').addEventListener("click", function(){
                location.reload();
            });
            console.log("set up the turn!");
            setUpTurn();
        });

        //
        function setUpTurn(){
            game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
            actionArea.innerHTML = '<button id="roll">Roll the Dices</button>';
            document.getElementById('roll').addEventListener('click', function(){
                rollsound.play();
                console.log("roll the dice!");
                throwDice();
                
            });
        }
        function throwDice(){
            actionArea.innerHTML = '';
            gameData.roll1 = Math.floor(Math.random() * 6) + 1;
            gameData.roll2 = Math.floor(Math.random() * 6 ) + 1;
            game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
            game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}" width=100>
            <img src = "${gameData.dice[gameData.roll2-1]}" width=100>`;
            gameData.rollSum = gameData.roll1 + gameData.roll2;
            rollsound.play();
            
            
            gameData.rollSum = gameData.roll1 + gameData.roll2;
        //if roll snake eyes
        if (gameData.rollSum === 2) {
            game.innerHTML += '<p> Snake eyes! </p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        }//if roll one dice with one
         else if(gameData.roll1 === 1 || gameData.roll2 === 1){
                gameData.index ? (gameData.index=0):(gameData.index = 1);
                game.innerHTML += `<p>Sorry one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
                setTimeout(setUpTurn, 2000);
                console.log("one of the two dice was a 1");
            }//if roll no one dice
            else {
                gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
                actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';
                document.getElementById('rollagain').addEventListener('click', function(){
                    setUpTurn();
                });
                document.getElementById('pass').addEventListener('click', function(){
                    gameData.index ? (gameData.index=0) : (gameData.index=1);
                    setUpTurn();
                });
                checkWinningCondition();
                showCurrentScore();
            }
        }
        
        function checkWinningCondition(){//if the player has score of 30 or higher it prints that they won
            if(gameData.score[gameData.index] > gameData.gameEnd){
                score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!!</h2>`;
                
                winsound.play();

                actionArea.innerHTML = '';
                document.getElementById('quit').innerHTML = "Start a New Game?"
            }
            else{//if no player is over 30 yet, display their current score
                showCurrentScore();
                score1.innerHTML = `<p>${gameData.players[0]}</p> <p>Score: ${gameData.score[0]}</p>`;
                score2.innerHTML = `<p>${gameData.players[1]}</p> <p>Score: ${gameData.score[1]}</p>`;
            }
        }
        function showCurrentScore(){
            pig1score.innerHTML = `<p>Score: ${gameData.score[0]}</p>`;
            pig2score.innerHTML = `<p>Score: ${gameData.score[1]}</p>`;
        }
})()

    