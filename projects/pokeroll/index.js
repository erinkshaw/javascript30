
const images = document.querySelectorAll('img')

function growImg(img) {
  console.log(img)
}
images.forEach(img => {
  img.addEventListener('mouseover', growImg)
})
console.log(images)


// set up poke circle with pokeball in the middle

// have it rotate

// have input to increase rotation speed

// when keydown on ??, it glows?? and noise??
// programmatically assign a data-keydown to each thing and it has a noise when key is touched
// 65-90 is alpha keycode

// 32 is space bar -- for poke ball?
