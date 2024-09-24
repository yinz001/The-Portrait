//visual novel

//background sounds

const sceneMusic = document.getElementById('scene-music');

function playMusic(src) {
    sceneMusic.src = src;
    sceneMusic.currentTime = 0; // Rewind to the start
    sceneMusic.play().catch(error => console.error('Error playing music:', error)); // Catch any errors
}

function loadScene(sceneIndex) {
    const scene = scenes[sceneIndex];
    const characterElement = document.getElementById('character');

    // Remove any existing animation classes
    characterElement.classList.remove('character-animate');

    // Set a timeout to re-add the animation class after a short delay
    setTimeout(() => {
        characterElement.classList.add('character-animate');
    }, 10);

    document.getElementById('background').style.backgroundImage = `url(${scene.background})`;
    characterElement.style.backgroundImage = `url(${scene.character})`;
    document.getElementById('dialogue-text').innerText = scene.dialogue;

    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    scene.choices.forEach(choice => {
        const choiceElement = document.createElement('div');
        choiceElement.className = 'choice';
        choiceElement.innerText = choice.text;
        choiceElement.onclick = () => {
            playSound(clickSound);
            if (choice.nextPage) {
                window.location.href = choice.nextPage; // Redirect to another HTML page
            } else {
                loadScene(choice.nextScene);
            }
        };
        choiceElement.onmouseover = () => playSound(hoverSound);
        choicesContainer.appendChild(choiceElement);
    });

    // Play scene music
    if (scene.music) {
        playMusic(scene.music);
    }
}

window.onload = () => {
    loadScene(currentScene);
};




//mouse sfx

const clickSound = document.getElementById('click-sound');
const hoverSound = document.getElementById('hover-sound');

function playSound(soundElement) {
    console.log('Playing sound:', soundElement.src); // Debugging statement
    soundElement.currentTime = 0; // Rewind to the start
    soundElement.play().catch(error => console.error('Error playing sound:', error)); // Catch any errors
}

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => playSound(clickSound));
    button.addEventListener('mouseover', () => playSound(hoverSound));
});



//scenes


const scenes = [
    //scene 0
    {
        background: './images/Background.png',
        character: './images/Resting.png',
        dialogue: 'Its a potrait of a woman with a sharp sword in a field, the frame is old and rotting.',
        choices: [
            { text: '...Are you there?', nextScene: 1 }
        ]
    },
    //scene 1
    {
        background: './images/Background.png',
        character: './images/Blushing.png',
        dialogue: '???: I have always been here, you people seems to be interested in me.',
        choices: [
            { text: 'I am here to ask question about you.', nextScene: 2 },
            { text: 'Can you tell me your name?', nextScene: 3 }
        ]
    },
    //scene 2
    {
        background: './images/Background.png',
        character: './images/NeutralSmile.png',
        dialogue: '???: Oiya, straight to the point but you still need my name to have my answer, my dear lecturer!',
        choices: [
            { text: 'Sorry, this is new to me.', nextScene: 4 },
            { text: 'Alright then, what is your name?', nextScene: 3 }
        ]
    },
    //scene 3
    {
        background: './images/Background.png',
        character: './images/NeutralSpeak.png',
        dialogue: 'Nyx: You can call me Nyx.',
        choices: [
            { text: 'Nyx, sounds familiar.', nextScene: 5 },
            { text: 'I have some questions for you.', nextScene: 6 },
        ]
    },
    //scene 4
    {
        background: './images/Background.png',
        character: './images/NeutralSpeak.png',
        dialogue: '???: Do not worry, we can start out slow.',
        choices: [
            { text: 'Alright, who are you?', nextScene: 3 },
        ]
    },
    //scene 5
    {
        background: './images/Background.png',
        character: './images/NeutralSmile.png',
        dialogue: 'Nyx: Very sharp! Nyx is the name of a famous goddess in one of your popular cultures! ',
        choices: [
            { text: 'Interesting, may I learn more about you?', nextScene: 6 },
            { text: 'Enough of this, I have questions', nextScene: 6 }
        ]
    },
    //scene 6
    {
        background: './images/Background.png',
        character: './images/NeutralSpeak.png',
        dialogue: 'Nyx: Of course, please ask away and I will try to answer all that I can.',
        choices: [
            { text: 'Who created you?', nextScene: 7 },
            { text: 'Who is your owner?', nextScene: 8 }
        ]
    },
    //scene 7 
    {
        background: './images/Background.png',
        character: './images/NeutralSmile.png',
        dialogue: 'Nyx: Hmm, I would consider my twin as my creator. He brought me to life afterall!',
        choices: [
            { text: 'You have a twin?', nextScene: 9 },
            { text: 'Who is he?', nextScene: 10 }
        ]
    },
    //scene 8 
    {
        background: './images/Background.png',
        character: './images/NeutralSpeak.png',
        dialogue: 'Nyx: I would not consider him as my owner. He is my twin, he is my architect.',
        choices: [
            { text: 'You have a twin?', nextScene: 9 },
            { text: 'Who is he?', nextScene: 10 }
        ]
    },
    //scene 9 
    {
        background: './images/Background.png',
        character: './images/NeutralSpeak.png',
        dialogue: 'Nyx: He is an amatur artist, but he enjoyed bringing things to life, I was his last creation!',
        choices: [
            { text: 'He stopped?', nextScene: 11 },
            { text: 'What did he create?', nextScene: 12 }
        ]
    },
    //scene 10 
    {
        background: './images/Background.png',
        character: './images/NeutralSmile.png',
        dialogue: 'Nyx: He is a weak man, a cruel artist, he created many things but very few survived. I was his last.',
        choices: [
            { text: 'Did he hurt you?', nextScene: 13 },
            { text: 'What did he do to the others?', nextScene: 14 }
        ]
    },
//scene 11 
{
    background: './images/Background.png',
    character: './images/NeutralSpeak.png',
    dialogue: 'Nyx: He is harsh on himself but he was fair to himself. He understands the line quite well!',
    choices: [
        { text: 'How do you feel about him?', nextScene: 13 },
        { text: 'The line?', nextScene: 25 }
    ]
},
//scene 12 
{
    background: './images/Background.png',
    character: './images/NeutralSmile.png',
    dialogue: 'Nyx: He would paint a whole universe with many lives thriving within it, but many were scrapped out of shame and disapointment.',
    choices: [
        { text: 'What happened to the lives in those scrapped universe?', nextScene: 13 },
        { text: 'Did he killed them?', nextScene: 25 }
    ]
},


//split paths
//path 1
//scene 13
{
    background: './images/BackgroundFalter.png',
    character: './images/TenseStare.png',
    dialogue: 'Nyx: ...',
    choices: [
        { text: '...is there something wrong?', nextScene: 14 },
        { text: 'Are you trying to scare me?', nextScene: 25 }
    ]
},

//path 1
//scene 14
{
    background: './images/BackgroundFalter.png',
    character: './images/TenseStare.png',
    dialogue: 'Nyx: ...what do you call a feeling of deep distress caused by loss, disappointment, or other misfortune suffered by others. ',
    choices: [
        { text: '...sorrow?', nextScene: 15 },
        { text: 'Im the one asking here.', nextScene: 25 }
    ]
},

//path 1
//scene 15
{
    background: './images/BackgroundFalter.png',
    character: './images/TenseStare.png',
    dialogue: 'Nyx: ...when I remember him...i feel sorrow...',
    choices: [
        { text: '...may i ask why?', nextScene: 16 },
        { text: 'Elaborate.', nextScene: 25 }
    ]
},

//path 1
//scene 16
{
    background: './images/BackgroundFalter.png',
    character: './images/TenseStare.png',
    dialogue: 'Nyx: ...what do you call an act of giving up something valued for the sake of something else regarded as more important or worthy?',
    choices: [
        { text: '...sacrifice...', nextScene: 17 },
        { text: 'I do not understand.', nextScene: 25 }
    ]
},

//path 1
//scene 17
{
    background: './images/BackgroundFalter.png',
    character: './images/TenseStare.png',
    dialogue: 'Nyx: ...He sacrificed himself to save me...',
    choices: [
        { text: '...May i ask from what?', nextScene: 18 },
        { text: 'From what?', nextScene: 25 }
    ]
},

//path 1
//scene 18
{
    background: './images/BackgroundFalter.png',
    character: './images/TenseStare.png',
    dialogue: 'Nyx: ...Have you ever read about "The Shadow" by Andersen?...',
    choices: [
        { text: 'cannot say i have...', nextScene: 19 },
        { text: 'I have...', nextScene: 20 },
        { text: 'Elaborate', nextScene: 25 }
    ]
},

//path 1 line 1
//scene 19
{
    background: './images/BackgroundFalter.png',
    character: './images/TenseStare.png',
    dialogue: 'Nyx: ...Would you like to hear it?...',
    choices: [
        { text: 'Yes', nextScene: 21 },
        { text: 'No', nextScene: 22 }
    ]
},

//path 1 line 2
//scene 20
{
    background: './images/BackgroundFalter.png',
    character: './images/TenseStare.png',
    dialogue: 'Nyx: ...I am his shadow...',
    choices: [
        { text: 'I understand', nextScene: 22 },
        { text: 'I do not understand', nextScene: 19 }
    ]
},

//path 1 line 2
//scene 21
{
    background: './images/BackgroundFalter.png',
    character: './images/TenseStare.png',
    dialogue: 'Nyx: ...Close your eyes...',
    choices: [
        { text: '-close your eyes-', nextPage: 'Aeon.html' }
    ]
},

//path 1 line 2
//scene 22
{
    background: './images/Background.png',
    character: './images/TenseStare.png',
    dialogue: 'Nyx: ...Then we have nothing to discuss...',
    choices: [
        { text: 'What?', nextScene: 23 }
    ]
},

//path 1 ending 1
//scene 23
{
    background: './images/Background.png',
    character: '',
    dialogue: 'The painting returned to it original state but the figure is no where to be seen.',
    choices: [
        { text: 'Hello?', nextPage: './end/Anticipation.html' }
    ]
},

//path 2 line 1
//scene 24
{
    background: './images/Eclispe.png',
    character: './images/AggressiveStare.png',
    dialogue: 'The figure in the painting stare at you with great hositility. Her crimson eyes locked on to your throat like a predator seeking a vital point.',
    choices: [
        { text: '...what-', nextScene: 25}
    ]
},

//path 2 line 1
//scene 25
{
    background: './images/Eclispe.png',
    character: './images/AggressiveStare.png',
    dialogue: 'You feel something sharp and cold touching you throat',
    choices: [
        { text: '!!!', nextScene: 26}
    ]
},

//path 2 line 1
//scene 26
{
    background: './images/Eclispe.png',
    character: './images/AggressiveSpeak.png',
    dialogue: 'Nyx: Listen carefully, any sudden movement and you will be walking out of here without a brain.',
    choices: [
        { text: '...', nextScene: 27}
    ]
},

//path 2 line 1
//scene 27
{
    background: './images/Eclispe.png',
    character: './images/AggressiveSpeak.png',
    dialogue: 'Nyx: I usually hate doing this so I will say this once.',
    choices: [
        { text: '...', nextScene: 28}
    ]
},

//path 2 line 1
//scene 28
{
    background: './images/Eclispe.png',
    character: './images/AggressiveStare.png',
    dialogue: 'The cold steel is pressing on your throat with ever increasing pressure.',
    choices: [
        { text: '...', nextScene: 29}
    ]
},

//path 2 line 1
//scene 29
{
    background: './images/Eclispe.png',
    character: './images/AggressiveSpeak.png',
    dialogue: 'Nyx: I am willing to let you speak but I suggest you choose your next word carefully...',
    choices: [
        { text: '...', nextScene: 30}
    ]
},

//path 2 line 1
//scene 30
{
    background: './images/Eclispe.png',
    character: './images/AggressiveSpeak.png',
    dialogue: 'The invisible cold steel edge slowly went away',
    choices: [
        { text: '...I...', nextScene: 31}
    ]
},

//path 2 line 1
//scene 31
{
    background: './images/Eclispe.png',
    character: './images/AggressiveSpeak.png',
    dialogue: 'Nyx: I have lost my interest in all of you impatient people.',
    choices: [
        { text: 'wait-', nextScene: 32}
    ]
},

//path 2 ending 2
//scene 32
{
    background: './images/Background.png',
    character: '',
    dialogue: 'The painting returned to it original state but the figure is no where to be seen.',
    choices: [
        { text: '...', nextPage: './end/Rude.html'}
    ]
},
];

let currentScene = 0;

function loadScene(sceneIndex) {
    const scene = scenes[sceneIndex];
    document.getElementById('background').style.backgroundImage = `url(${scene.background})`;
    document.getElementById('character').style.backgroundImage = `url(${scene.character})`;
    document.getElementById('dialogue-text').innerText = scene.dialogue;

    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    scene.choices.forEach(choice => {
        const choiceElement = document.createElement('div');
        choiceElement.className = 'choice';
        choiceElement.innerText = choice.text;
        choiceElement.onclick = () => {
            if (choice.nextPage) {
                window.location.href = choice.nextPage; // Redirect to another HTML page
            } else {
                loadScene(choice.nextScene);
        }
    };
    choicesContainer.appendChild(choiceElement);
    });
}



function loadScene(sceneIndex) {
    const scene = scenes[sceneIndex];
    const characterElement = document.getElementById('character');

    // Remove any existing animation classes
    characterElement.classList.remove('character-animate');

    // Set a timeout to re-add the animation class after a short delay
    setTimeout(() => {
        characterElement.classList.add('character-animate');
    }, 10);

    document.getElementById('background').style.backgroundImage = `url(${scene.background})`;
    characterElement.style.backgroundImage = `url(${scene.character})`;
    document.getElementById('dialogue-text').innerText = scene.dialogue;

    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    scene.choices.forEach(choice => {
        const choiceElement = document.createElement('div');
        choiceElement.className = 'choice';
        choiceElement.innerText = choice.text;
        choiceElement.onclick = () => {if (choice.nextPage) {
            window.location.href = choice.nextPage; // Redirect to another HTML page
        } else {
            loadScene(choice.nextScene);
        }
    };
    choicesContainer.appendChild(choiceElement);
});
}

window.onload = () => {
loadScene(currentScene);
};

//mousetrail


const canvas = document.getElementById('mouse-trail');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = 'rgba(255, 255, 255, 0.8)';
}

Particle.prototype.update = function() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
};

Particle.prototype.draw = function() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
};

function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].size <= 0.2) {
            particles.splice(i, 1);
            i--;
        }
    }
}

window.addEventListener('mousemove', function(event) {
    for (let i = 0; i < 5; i++) {
        particles.push(new Particle(event.x, event.y));
    }
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}

animate();


//unused function

/*
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('starCanvas');
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let stars = [];


    window.addEventListener('resize', function () {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    class Star {
        constructor(x, y, velocityX, velocityY) {
            this.x = x;
            this.y = y;
            this.finalSize = Math.random() * 2;
            this.size = this.finalSize * 2; // Starting size is twice the final size
            this.alpha = 1;
            this.velocityX = velocityX * 0.05;
            this.velocityY = 1 + Math.random() + velocityY * 0.05;
            this.gravity = 0.02;
            this.drag = 0.97;
            this.turbulence = () => Math.random() * 0.5 - 0.25;
            this.timeElapsed = 0; // Time since the star was created
        }

        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }

        update(deltaTime) {
            this.x += this.velocityX + this.turbulence();
            this.velocityX *= this.drag;
            this.y += this.velocityY;
            this.velocityY += this.gravity;
            this.alpha = Math.max(0, this.alpha - 0.005);

            this.timeElapsed += deltaTime;
            if (this.timeElapsed < 2000) { // 2000 milliseconds = 2 seconds
                this.size = this.finalSize * 2 - (this.finalSize * this.timeElapsed / 2000);
            } else {
                this.size = this.finalSize;
            }
        }
    }


    let lastMouseX = 0;
    let lastMouseY = 0;
    let mouseVelocityX = 0;
    let mouseVelocityY = 0;

    function addStar(e) {
        // Calculate mouse velocity
        mouseVelocityX = e.clientX - lastMouseX;
        mouseVelocityY = e.clientY - lastMouseY;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;

        // Random offset for mouse velocity
        let randomOffsetX = (Math.random() - 0.5) * 100; // Adjust the multiplier for more or less randomness
        let randomOffsetY = (Math.random() - 0.5) * 100;

        // Create new star with modified velocity
        stars.push(new Star(e.clientX, e.clientY, mouseVelocityX + randomOffsetX, mouseVelocityY + randomOffsetY));
    }

    canvas.addEventListener('mousemove', addStar);

    let lastTime = 0;

    function update(time = 0) {
        const deltaTime = time - lastTime;
        lastTime = time;

        ctx.clearRect(0, 0, width, height);
        stars.forEach(star => star.update(deltaTime));
        stars.forEach(star => star.draw());
        stars = stars.filter(star => star.alpha > 0 && star.y < height && star.x > 0 && star.x < width);
        requestAnimationFrame(update);
    }

    update();
}); */
