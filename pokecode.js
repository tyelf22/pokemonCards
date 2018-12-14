import { pokemon } from './pokemon.js' //use of import statements


const pokeContainer = document.querySelector('#container') //container to append front and back of card 

//forEach loop to create card
pokemon.forEach(poke => {  //iteration through an array using loops and Array Methods
    let card = document.createElement('div')
    card.className = "card"
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    })

 /* ---------------FRONT OF CARD-------------------- */  //use of variables with proper scope 

    let cardFront = document.createElement('figure')  //figure for cardFront
    cardFront.className = "cardFaceFront"

    let cap = document.createElement('figcaption') //figcapt for front of card
    let img = document.createElement('img')

    img.src = `img/img/${poke.id}${poke.ename}.png` //formatting file name
    cap.textContent = poke.ename
    cardFront.appendChild(img)
    cardFront.appendChild(cap)
    
    /* ----------------BACK OF CARD --------------------*/

    let cardBack = document.createElement('figure') //created card back figure
    cardBack.className = "cardFaceBack"
    let capt = document.createElement('figcaption')
    let backimg = document.createElement('img')

    backimg.src = "img/img/PokemonLogo.png"
    backimg.className = "backImg"
    capt.textContent = poke.ename
    cardBack.appendChild(backimg)
    cardBack.appendChild(capt)
    pokeContainer.appendChild(card)
    card.appendChild(cardFront)
    card.appendChild(cardBack)
    
    /*  -------------------STATS CONTAINER---------------------  */
    //created stats container
    let statsContainer = document.createElement('div')
    statsContainer.className = "statsContainer"
    //card.appendChild(statsContainer)
    cardBack.appendChild(statsContainer)

    //adding each stat
    let attack = document.createElement('p')
    attack.textContent = `Attack: ${poke.base.Attack}`  // proper use of strings using template literals
    statsContainer.appendChild(attack)

    let defense = document.createElement('p')
    defense.textContent = `Defense: ${poke.base.Defense}`  //objects with properties and methods accessed using dot notation
    statsContainer.appendChild(defense)

    let hp = document.createElement('p')
    hp.textContent = `HP: ${poke.base.HP}` 
    statsContainer.appendChild(hp)

    let specialAttack = document.createElement('p')
    specialAttack.textContent = 'Sp. Attack: '+ poke.base["Sp.Atk"] //use of Arrays
    statsContainer.appendChild(specialAttack)

    let specialDefense = document.createElement('p')
    specialDefense.textContent = "Sp. Defense: "+ poke.base["Sp.Def"]  //proper use of string manipulation
    statsContainer.appendChild(specialDefense)

    let speed = document.createElement('p')
    speed.textContent = `Speed: ${poke.base.Speed}`
    statsContainer.appendChild(speed)

})


//new card for creating new  poke card
let newCard = document.createElement('div')
newCard.className = "newCard"
let newCardBTN = document.createElement('div')
newCardBTN.className = "newCardBTN"
let newCardImg = document.createElement('img')
newCardImg.className = "newCardImg"
newCard.appendChild(newCardImg)
newCardImg.src = "img/img/PokemonLogo.png"

newCard.appendChild(newCardBTN)

newCardBTN.textContent = "Press For New"

pokeContainer.appendChild(newCard)


// bulbasaur creator        //proper declarations of objects
let Bulbasaur = {           //use of Objects with key value pairs
    "base": {      //custom javascript objects
        "Attack": 49, 
        "Defense": 49, 
        "HP": 45, 
        "Sp.Atk": 65, 
        "Sp.Def": 65, 
        "Speed": 45
    }, 
    "cname": "\u5999\u86d9\u79cd\u5b50", 
    "ename": "Bulbasaur", 
    "id": "001", 
    "jname": "\u30d5\u30b7\u30ae\u30c0\u30cd" 
}

//event lister to create pokemon
newCardImg.addEventListener('click', function() {
    let card = document.createElement('div')
    card.className = "card"
    card.addEventListener('click', function(){
        card.classList.toggle('is-flipped');
    })

    let cardFront = document.createElement('figure') //copied code from about (reformat?)
    cardFront.className = "cardFaceFront"

    let cap = document.createElement('figcaption')
    let img = document.createElement('img')

    img.src = `img/img/001Bulbasaur.png`
    cap.textContent = Bulbasaur.ename
    cardFront.appendChild(img)
    cardFront.appendChild(cap)
    

    let cardBack = document.createElement('figure')
    cardBack.className = "cardFaceBack"
    let capt = document.createElement('figcaption')
    let backimg = document.createElement('img')

    backimg.src = "img/img/PokemonLogo.png"
    backimg.className = "backImg"
    capt.textContent = Bulbasaur.ename
    cardBack.appendChild(backimg)
    cardBack.appendChild(capt)
    pokeContainer.appendChild(card)
    card.appendChild(cardFront)
    card.appendChild(cardBack)
    
    
    //created stats container
    let statsContainer = document.createElement('div')
    statsContainer.className = "statsContainer"
    //card.appendChild(statsContainer)
    cardBack.appendChild(statsContainer)

    //adding each stat
    let attack = document.createElement('p')
    attack.textContent = `Attack: ${Bulbasaur.base.Attack}`
    statsContainer.appendChild(attack)

    let defense = document.createElement('p')
    defense.textContent = `Defense: ${Bulbasaur.base.Defense}`
    statsContainer.appendChild(defense)

    let hp = document.createElement('p')
    hp.textContent = `HP: ${Bulbasaur.base.HP}` 
    statsContainer.appendChild(hp)

    let specialAttack = document.createElement('p')
    specialAttack.textContent = 'Sp. Attack: '+ Bulbasaur.base["Sp.Atk"]
    statsContainer.appendChild(specialAttack)

    let specialDefense = document.createElement('p')
    specialDefense.textContent = "Sp. Defense: "+ Bulbasaur.base["Sp.Def"]
    statsContainer.appendChild(specialDefense)

    let speed = document.createElement('p')
    speed.textContent = `Speed: ${Bulbasaur.base.Speed}`
    statsContainer.appendChild(speed)

})


// class myNewPokemon {                                //objects using constructors properly (not complete)
//     constructor (ename, id, attack, defense, hp){
//         this.ename = ename,
//         this.id = id,
//         this.attack = attack
//         this.defense = defense,
//         this.hp = hp
//     }
// }

// let myNewPokemon = new myNewPokemon ("Bulbasaur", 001, 49, 49, 45);
