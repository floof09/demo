var score = 0;
var timeLeft = 10; // Initial time in seconds
var timerInterval;

function updateTimer() {
    document.getElementById('timer').textContent = 'Time left: ' + timeLeft;
}

function updateScore() {
    document.getElementById('score').textContent = 'Score: ' + score;
}

function resetTarget(target) {
    var screenWidth = window.innerWidth - 50;
    var screenHeight = window.innerHeight - 50;
    var randomX = Math.floor(Math.random() * screenWidth);
    var randomY = Math.floor(Math.random() * screenHeight);

    target.style.transform = 'scale(0)';
    target.style.opacity = '0';

    setTimeout(() => {
        Object.assign(target.style, {
            left: randomX + 'px',
            top: randomY + 'px',
            transform: 'scale(1)',
            opacity: '1'
        });
    }, 500);
}

function submitUsername() {
    var username = document.getElementById('username').value;

    if (username.trim() !== '') {
        document.getElementById('username-display').textContent = 'Username: ' + username;
        document.getElementById('username-input').style.display = 'none';
        document.getElementById('user-info').style.display = 'block';
        startGame();
    }
}

function startGame() {
    timerInterval = setInterval(function () {
        timeLeft--;
        updateTimer();

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            alert('Game Over! Your final score is: ' + score);
        }
    }, 1000);

    document.getElementById('target1').addEventListener('click', () => {
        score++;
        updateScore();
        resetTarget(document.getElementById('target1'));
    });

    document.getElementById('target2').addEventListener('click', () => {
        score++;
        updateScore();
        resetTarget(document.getElementById('target2'));
    });

    document.getElementById('target3').addEventListener('click', () => {
        score++;
        updateScore();
        resetTarget(document.getElementById('target3'));
    });

    // Initial placement of the targets
    resetTarget(document.getElementById('target1'));
    resetTarget(document.getElementById('target2'));
    resetTarget(document.getElementById('target3'));
}
const mouseEvent = document.documentElement;

mouseEvent.addEventListener('mousemove', (e) =>{
mouseEvent.style.setProperty('--x',e.clientX+'px');
mouseEvent.style.setProperty('--y',e.clientY+'px');

})
