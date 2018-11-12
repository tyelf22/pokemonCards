import { pokemon } from './pokemon.js'

console.log(pokemon)

const pokeContainer = document.querySelector('#container')
let count = 0

pokemon.forEach(poke => {
    let card = document.createElement('div')
    //console.log(`${poke.id}${poke.ename}.png`)
    let fig = document.createElement('figure')
    let cap = document.createElement('figcaption')
    let img = document.createElement('img')
    let backDiv = document.createElement('div')
    backDiv.textContent = poke.cname
    cap.textContent = poke.ename
    img.src = `img/img/${poke.id}${poke.ename}.png`
    fig.appendChild(img)
    fig.appendChild(cap)
    card.appendChild(fig)
    card.appendChild(backDiv)
    pokeContainer.appendChild(card) 
    card.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped');
        backDiv.textContent = poke.cname;
        //console.log(poke.ename)
      });
});