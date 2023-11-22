const submitButton = document.getElementsByClassName('primary-button')
const nameInput = document.getElementById('name-input')
const emailInput = document.getElementById('email-input')
const nameOutput = document.getElementById('username')
const imageSlider = document.getElementById('slider')

submitButton[0].addEventListener("click", function(event){
    if(nameInput.value.length === 0 || emailInput.value.length === 0) {
        alert("Please insert your name or email correctly")
    } else {
        nameOutput.textContent = nameInput.value
    }
})

var i = 0
const images = [
    "assets/01 bali-thumb.jpg", 
    "assets/02 bali-thumb.jpg", 
    "assets/03 bali-thumb.jpg"
]
function bannerSlide() {
    i =+ 1
    if (i = images.length) {
        i = 0
    }
    imageSlider.src = images[i]
}
setInterval(bannerSlide, 1000)