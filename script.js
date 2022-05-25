    document.addEventListener('DOMContentLoaded', () => {
        console.log('here')
        const cardArray = [
            {name:"pig", Img:"pig.png",},
            {name:"pig", Img:"pig.png"},
            {name:"zebra", Img:"zebra.png"},
            {name:"zebra", Img:"zebra.png"},
            {name:"elephante", Img:"elephante.png"},
            {name:"elephante", Img:"elephante.png"},
       
        ]

        //cardArray.classList.add("images");
       
            cardArray.sort(() => 0.5 - Math.random())

        

        const grid = document.querySelector('.grid');
        const resultDisplay = document.querySelector('.scoreBoard');
        const congrates = document.querySelector('.congrats');
        var cardsChosen = [];
        var cardsChosenId = [];
        var cardWon = [];

        function creatBoard(){
            for (let i = 0; i < cardArray.length; i++){
                var card = document.createElement("img");
                card.setAttribute('src', 'green.png');
                card.setAttribute('data-id', i);
                card.addEventListener('click',flipCard);
                console.log('here1')
                grid.appendChild(card)
            }
            
        }
        //check for matches
        function checkForMatch(){
            var card = document.querySelectorAll('img');
            const optionOne = cardsChosenId[0];
            const optionTwo = cardsChosenId[1];
            if (cardsChosen[0] === cardsChosen[1] && optionOne !== optionTwo) {
                alert("you found a match");
                card[optionOne].setAttribute('src', 'white.png')
                card[optionTwo].setAttribute('src', 'white.png')
                cardWon.push(cardsChosen)
            } else{
                card[optionOne].setAttribute('src', 'green.png')
                card[optionTwo].setAttribute('src', 'green.png')
                alert('Sorry, try again')
            }
            cardsChosen = [];
            cardsChosenId = [];
            resultDisplay.textContent = cardWon.length;
            if( cardWon.length === cardArray.length / 2){
                congrates.textContent='Congratulations! you Won!';
            }
        }

        //flip a card
        function flipCard(){
            var cardId = this.getAttribute('data-id');
            cardsChosen.push(cardArray[cardId].name); //push the cards on cardArray based on the card id, if the card id is 4, this will mach the 5th card in the cardArray, once located the card we'll get it's name
            cardsChosenId.push(cardId);// this does the same as the above but just push the card id.
            this.setAttribute('src', cardArray[cardId].Img);// this set function let us add a image to the square based on the card id that holdes
            if (cardsChosen.length === 2){
                setTimeout (checkForMatch, 500)
            }
        }

        /*function replay() { 
            arrangeCard(); 
            grid.innerHTML = "";
            //creatBoard(grid, cardArray);
            cardWon = 0;
            clicks = 0; 
        
            resultDisplay.innerHTML = 0; 
             
            }*/

        //replay()
         
        creatBoard()



    })
