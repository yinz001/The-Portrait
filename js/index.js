const clickSound = document.getElementById('click-sound');
const hoverSound = document.getElementById('hover-sound');

function playSound(soundElement) {
    soundElement.currentTime = 0; // Rewind to the start
    soundElement.play();
}

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => playSound(clickSound));
    button.addEventListener('mouseover', () => playSound(hoverSound));
});

