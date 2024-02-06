// Selecting HTML elements
const score = document.querySelector('.Score');
const startscreen = document.querySelector('.StartScreen');
const gamearea = document.querySelector('.GameArea');

// Player object with initial speed and score
let player = { speed: 12, score: 0 };
let highest = 0;

// when the user click start
startscreen.addEventListener('click', start);

// Key state object to track pressed keys
let keys = { ArrowUp: false, ArrowDown: false, ArrowRight: false, ArrowLeft: false };

// Event listeners for keydown and keyup events
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

// Function to handle keydown events
function keyDown(ev) {
    ev.preventDefault();
    keys[ev.key] = true;
}

// Function to handle keyup events
function keyUp(ev) {
    ev.preventDefault();
    keys[ev.key] = false;
}

//check if collide
function isCollide(a, b) {
    aRect = a.getBoundingClientRect();//get rectangle around a
    bRect = b.getBoundingClientRect();//get rectangle around b

    //check if a and b are not colliding returns true if not colliding
    return !((aRect.bottom < bRect.top) || (aRect.top > bRect.bottom) || (aRect.right < bRect.left) || (aRect.left > bRect.right));
}

// Function to move road lines
function moveLines() {
    let lines = document.querySelectorAll('.lines'); //select those element with class lines

    lines.forEach(function (item) {
        if (item.y >= 700) { //if the line is at the bottom of the screen
            item.y -= 750; //move it to the top of the screen
        }
        // Increase the y-coordinate of the line based on the player's speed
        item.y += player.speed;
        //update the position of the line to sort of "move" the line 
        item.style.top = item.y + 'px';
    });
}

// Function to end the game
function endGame() {
    player.start = false;
    startscreen.classList.remove('hide');
}

// Function to move other cars
function moveCar(car) {
    //covid objects
    let other = document.querySelectorAll('.other');
    other.forEach(function (item) {
        //check if the player's car collides with any of the covid objects
        if (isCollide(car, item)) {
            console.log('HIT');
            endGame();
        }
        //if the covid object is at the bottom of the screen
        if (item.y >= 750) {
            //move it to the top of the screen
            item.y = -300;
            //place it randomly on the x-axis
            item.style.left = Math.floor(Math.random() * 350) + 'px';
        }
        // Increase the y-coordinate of the covid object based on the player's speed
        item.y += player.speed;
        //update the position of the covid object to sort of "move" the covid object
        item.style.top = item.y + 'px';
    });
}

// Function for the main gameplay loop
function gamePlay() {
    let car = document.querySelector('.car');
    let road = gamearea.getBoundingClientRect();

    if (player.start) {
        // Move road lines and other cars if game started 
        moveLines();
        moveCar(car);

        // Player controls
        if (keys.ArrowUp && player.y > (road.top + 70)) {
            player.y -= player.speed;
        }
        if (keys.ArrowDown && player.y < (road.bottom - 70)) {
            player.y += player.speed;
        }
        if (keys.ArrowLeft && player.x > 0) {
            player.x -= player.speed;
        }
        if (keys.ArrowRight && player.x < (road.width - 50)) {
            player.x += player.speed;
        }

        // Update player's car position
        car.style.top = player.y + 'px';
        car.style.left = player.x + 'px';

        // Continue the game loop
        window.requestAnimationFrame(gamePlay);

        // Increment player's score
        player.score++;
        if (player.score >= highest) {
            highest = player.score;
        }
        // Update player's score
        score.innerHTML = "Your Score: " + player.score;
    }
}

// Function to reset the highest score
function Reset() {
    highest = 0;
}

// Function to start the game
function start() {
    //hide the click here to start screen
    startscreen.classList.add('hide');
    gamearea.innerHTML = "";
    //set the player.start to true to start the game
    player.start = true;
    player.score = 0;
    
    //start the game loop using  requestAnimationFrame
    window.requestAnimationFrame(gamePlay);

    // Create road lines
    for (x = 0; x < 5; x++) {
        let roadline = document.createElement('div');
        roadline.setAttribute('class', 'lines');
        roadline.y = (x * 150);
        roadline.style.top = roadline.y + 'px';
        gamearea.appendChild(roadline);
    }

    // Create player's car
    let car = document.createElement('div');
    car.setAttribute('class', 'car');
    gamearea.appendChild(car);

    player.x = car.offsetLeft;
    player.y = car.offsetTop;

    // Creating the covid objects and placing them randomly
    for (x = 0; x < 3; x++) {
        let othercar = document.createElement('div');
        othercar.setAttribute('class', 'other');
        othercar.y = ((x + 1) * 350) * -1;
        othercar.style.top = othercar.y + 'px';
        othercar.style.left = Math.floor(Math.random() * 350) + 'px';
        gamearea.appendChild(othercar);
    }
}

// Hamburger Menu (for smaller view size)
  document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("hamburger-menu");
    const navbar = document.querySelector("header .navbar");
  
    // Toggle navbar visibility when menu icon is clicked
    menuIcon.addEventListener("click", function() {
      navbar.classList.toggle("nav-toggle");
      menuIcon.classList.toggle("fa-bars");
      menuIcon.classList.toggle("fa-times");
    });
  });

  
