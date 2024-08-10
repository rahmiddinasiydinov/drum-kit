const buttons = document.querySelectorAll(".drum")

buttons.forEach(btn => {    
    btn.addEventListener('click', function() {
        const key = this.textContent
        playSound(key)
        addAnimation(key)
    })
})

document.addEventListener('keydown', function(e){
    const key = e.key
    playSound(key)
    addAnimation(key)
})




function playSound(key){
    switch (key) {
        case 'w':
            playAudio('./sounds/crash.mp3')
            break;
        case 'a':
            playAudio('./sounds/kick-bass.mp3')
            break;
        case 's':
            playAudio('./sounds/snare.mp3')
            break;
        case 'd':
            playAudio('./sounds/tom-1.mp3')
            break;
        case 'j':
            playAudio('./sounds/tom-2.mp3')
            break;
        case 'k':
            playAudio('./sounds/tom-3.mp3')
            break;
        case 'l':
            playAudio('./sounds/tom-4.mp3')
            break;
    
        default:
            break;
    }
}

function playAudio(audioLink){
    const audio = new Audio(audioLink)
    audio.play()
}


function addAnimation(key) {
    const activeBtn = document.querySelector('.' + key);
    activeBtn.classList.add('pressed');

    setTimeout(() => {activeBtn.classList.remove('pressed')}, 100)
}