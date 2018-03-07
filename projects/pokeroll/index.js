
const pokemon = document.querySelectorAll('.pokemon')
const pokeball = document.querySelector('#center')
const input = document.querySelector('input')
const deg = 'deg'
let speed = 500
let interval = setInterval(rotatePokemon, speed)

function updateSpeed() {
  speed = this.value
  clearInterval(interval)
  interval = setInterval(rotatePokemon, speed)
}

function pokeSound(event) {
  if (event.keyCode === 32) {
    const audio = document.querySelector('#audio')
    audio.currentTime = 0;
    audio.play()
    pokeball.classList.add('playing')
  }
}

function pokeDown(event) {
  if (event.propertyName !== 'transform') return;
  event.target.classList.remove('playing');
}

function rotatePokemon() {
  pokemon.forEach(poke => {
    let currentDeg = Number(getComputedStyle(document.body).getPropertyValue(`--${poke.id}`).slice(0, -3))
    currentDeg += 10
    document.documentElement.style.setProperty(`--${poke.id}`, currentDeg + deg)
  })
}

input.addEventListener('change', updateSpeed)
input.addEventListener('mousemove', updateSpeed)
window.addEventListener('keydown', pokeSound)
window.addEventListener('transitionend', pokeDown)
// set up poke circle with pokeball in the middle

// have it rotate

// have input to increase rotation speed

// when keydown on ??, it glows?? and noise??
// programmatically assign a data-keydown to each thing and it has a noise when key is touched
// 65-90 is alpha keycode

// 32 is space bar -- for poke ball?
