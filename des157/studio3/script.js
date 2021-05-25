        var startGame = document.getElementById('startgame');
        var gameControl = document.getElementById('gamecontrol');
        var game = document.getElementById('game');
        var score = document.getElementById('score');
        var actionArea = document.getElementById('actions');

        const rollsound= new Audio('media/rollingdice.m4a');
        const clicksound= new Audio('media/clicking.m4a');
        const winsound= new Audio('media/winning.m4a');



        var gameData = {
	        dice: ['dice1.png', 'dice2.png', 'dice3.png', 
		   'dice4.png', 'dice5.png', 'dice6.png'],
	        players: ['player 1', 'player 2'],
	        score: [0, 0],
	        roll1: 0,
	        roll2: 0,
	        rollSum: 0,
	        index: 0,
	        gameEnd: 29
        };

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
            game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">
            <img src = "${gameData.dice[gameData.roll2-1]}">`;
            gameData.rollSum = gameData.roll1 + gameData.roll2;
            rollsound.play();
            
            
            if (gameData.rollSum === 2){
                game.innerHTML += `<p>Oh snap! Snake eyes! Switching to ${gameData.players[gameData.index]}</p>`;
                gameData.score[gameData.index] = 0;
                gamedata.index ? (gameData.index=0) : (gameData.index = 1);
                setTimeout(setUpTurn, 2000);
                showCurrentScore();
            }
            else if(gameData.roll1 === 1 || gameData.roll2 === 1){
                gameData.index ? (gameData.index=0):(gameData.index = 1);
                game.innerHTML += `<p>Sorry one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
                setTimeout(setUpTurn, 2000);
                console.log("one of the two dice was a 1");
            }
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
            }
        }
        function checkWinningCondition(){
            if(gameData.score[gameData.index] > gameData.gameEnd){
                score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
                winsound.play(1000);

                actionArea.innerHTML = '';
                document.getElementById('quit').innerHTML = "Start a New Game?"
            }
            else{
                showCurrentScore();
                score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]} ${gameData.score[0]}</strong> and <strong>${gameData.players[1]} ${gameData.score[1]}</strong></p>`;
            }
        }
        function showCurrentScore(){
            score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]} ${gameData.score[0]}</strong> and <strong>${gameData.players[1]} ${gameData.score[1]}</strong></p>`;
        }
        
        


    