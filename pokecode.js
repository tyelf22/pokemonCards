import { pokemon } from './pokemon.js'

console.log(pokemon)

const pokeContainer = document.querySelector('#container')

pokemon.forEach(poke => {
    let card = document.createElement('div')
    card.className = "card"
    card.addEventListener('click', function(){
        card.classList.toggle('is-flipped');
    })

    let cardFront = document.createElement('figure')
    cardFront.className = "cardFaceFront"

    let cap = document.createElement('figcaption')
    let img = document.createElement('img')

    img.src = `img/img/${poke.id}${poke.ename}.png`
    cap.textContent = poke.ename
    cardFront.appendChild(img)
    cardFront.appendChild(cap)
    

    let cardBack = document.createElement('figure')
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
    
    
    //created stats container
    let statsContainer = document.createElement('div')
    statsContainer.className = "statsContainer"
    card.appendChild(statsContainer)
    cardBack.appendChild(statsContainer)

    //adding each stat
    let attack = document.createElement('p')
    attack.textContent = `Attack: ${poke.base.Attack}`
    statsContainer.appendChild(attack)

    let defense = document.createElement('p')
    defense.textContent = `Defense: ${poke.base.Defense}`
    statsContainer.appendChild(defense)

    let hp = document.createElement('p')
    hp.textContent = `HP: ${poke.base.HP}` 
    statsContainer.appendChild(hp)

    let specialAttack = document.createElement('p')
    specialAttack.textContent = 'Sp. Attack: '+ poke.base["Sp.Atk"]
    statsContainer.appendChild(specialAttack)

    let specialDefense = document.createElement('p')
    specialDefense.textContent = "Sp. Defense: "+ poke.base["Sp.Def"]
    statsContainer.appendChild(specialDefense)

    let speed = document.createElement('p')
    speed.textContent = `Speed: ${poke.base.Speed}`
    statsContainer.appendChild(speed)

    
})
