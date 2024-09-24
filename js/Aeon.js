document.addEventListener('DOMContentLoaded', () => {
    const flashlight = document.createElement('div');
    flashlight.classList.add('flashlight');
    document.body.appendChild(flashlight);

    document.addEventListener('mousemove', (event) => {
        flashlight.style.left = `${event.clientX - flashlight.offsetWidth / 2}px`;
        flashlight.style.top = `${event.clientY - flashlight.offsetHeight / 2}px`;
    });})

// controls
document.addEventListener('keydown', function(event) {
    const player = document.querySelector('.player');
    const gameContainer = document.querySelector('.game-container');
    const step = 10; // Number of pixels the player moves per key press
    const jumpHeight = 150; // Height of the jump
    const gravity = 5; // Gravity effect
    let isJumping = false;

    switch(event.key) {
        case 'ArrowRight':
            player.style.left = `${player.offsetLeft + step}px`;
            break;
        case 'ArrowLeft':
            player.style.left = `${player.offsetLeft - step}px`;
            break;
        case 'ArrowUp':
            if (!isJumping) {
                isJumping = true;
                let jumpCount = 0;
                const jumpInterval = setInterval(() => {
                    if (jumpCount < 15) {
                        player.style.bottom = `${parseInt(player.style.bottom) + gravity}px`;
                    } else if (jumpCount < 30) {
                        player.style.bottom = `${parseInt(player.style.bottom) - gravity}px`;
                    } else {
                        clearInterval(jumpInterval);
                        isJumping = false;
                    }
                    jumpCount++;
                }, 20);
            }
            break;
    }

    // Camera position
    gameContainer.scrollLeft = player.offsetLeft - window.innerWidth / 2 + player.offsetWidth / 2;

    // Check for collision
   // const obstacle = document.querySelector('.obstacle');
    //if (isColliding(player, obstacle)) {
    //    alert('Collision detected!');
   // }
});

//Collision
function isColliding(player, obstacle) {
    const playerRect = player.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    return !(
        playerRect.top > obstacleRect.bottom ||
        playerRect.bottom < obstacleRect.top ||
        playerRect.right < obstacleRect.left ||
        playerRect.left > obstacleRect.right
    );
}

function startLevelTransition() {
    const overlay = document.querySelector('.transition-overlay');
    overlay.style.opacity = 1;

    setTimeout(() => {
        // Redirect to the new HTML page
        window.location.href = './end/Rabbithole.html'; // Replace 'newpage.html' with your target page

        // Optionally, you can fade the overlay back out if you want to stay on the same page
        // overlay.style.opacity = 0;
    }, 1000); // Wait for the fade-out to complete
}

// Example of triggering the transition
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        startLevelTransition();
    }
});
