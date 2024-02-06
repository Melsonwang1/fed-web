/* questions prompt to the user */
const questions = [
    {
        question: "Question 1: Are you <strong>65 years old or older</strong>, born in 1959 or earlier?",
        options: ["Yes", "No"],
    },
    {
        question: "Question 2: Have you recently travelled to any country with a <strong>high</strong> number of covid cases? <br>Example of countries include: United States, India, France and Germany",
        options: ["Yes", "No"],
    },
    {
        question: "Question 3: Do you have a fever with a temperature of <strong>37.9 degrees Celsius</strong> or <strong>higher</strong>?",
        options: ["Yes", "No"],
    },
    {
        question: "Question 4: Do you have a <strong>dry cough</strong>?",
        options: ["Yes", "No"],
    },
    {
        question: "Question 5: Do you experience any <strong>shortness of breath</strong>?",
        options: ["Yes", "No"],
    },
    {
        question: "Question 6: Do you have a <strong>sore throat</strong>?",
        options: ["Yes", "No"],
    },
    {
        question: "<strong>Last Question</strong> <br><br> Question 7: Have you been in any <strong>close contact</strong> with someone who has tested <strong>positive</strong> for COVID-19 <br>in the past <strong>14</strong> days?",
        options: ["Yes", "No"],
    },
];

let currentQuestionIndex = 0;

// display the current question and options
function displayQuestion() {
    const questionDiv = document.getElementById("question");
    const currentQuestion = questions[currentQuestionIndex];

    const optionsHTML = currentQuestion.options.map(option =>
        `<button class="btn ${option === 'Yes' ? 'btn-yes' : 'btn-no'}" onclick="selectOption('${option}')">${option}</button>`
    ).join("");

    questionDiv.innerHTML = `<p>${currentQuestion.question}</p>${optionsHTML}`;
}

// questions will be shown only after the user click the start button
function startAssessment() {
    document.getElementById("startButton").style.display = "none";
    displayQuestion();
}

// handle the user selection of the options
function selectOption(option) {
    const results = document.getElementById("result");
    const loadingg = document.getElementById("loading-for-result");
    
    results.innerHTML = "";
    questions[currentQuestionIndex].selectedOption = option;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        loadingg.style.display = "block"; // Show loading animation

        setTimeout(() => {
            loadingg.style.display = "none"; 
            showResult(); // Show the result after the loading time
        }, 3000); // results will be shown after 3 seconds
    }
}

// Display the results based on the questions the user answered
function showResult() {
    const results_loading = document.getElementById("loading-for-result");
    const score = countScore();

    // if the number of 'Yes' answered is more than or equal to 4
    if (score >= 4) {
        results_loading.innerHTML = "<p class='result'>Result: You might be COVID-19 positive. Please consult a doctor and do take an ART test.</p>";
    } else {
        results_loading.innerHTML = "<p class='result'>Result: You are likely to be COVID-19 negative. Stay Safe!</p>";
    }

    results_loading.style.display = "block"; // Show the result
}

// Count the number of 'Yes' the user answered
function countScore() {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {

        if (questions[i].selectedOption === "Yes") {
            score++;
        }
    }
    return score;
}

// Smooth scrolling to top function 
function scrollingTOP() {
    window.scrollTo({
        behavior: "smooth",
        top: 0
    });
}

// Show or hide the scroll to top button based on scroll position
document.addEventListener("scroll", function () {
    const scrollToTopBtn = document.getElementById("back-to-top-btn");
    if (scrollToTopBtn) {
        // Using if-else loop to check whether the scrolling position is more than 100px from the top of the page
        if (document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = "block"; // if true, display the button
        } else {
            scrollToTopBtn.style.display = "none"; // if false, hide the button
        }
    }
  });

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

  // Loading Animation
  document.addEventListener('DOMContentLoaded', function() {
    var loadings = document.getElementsByClassName('loading');

    // use a For loop to loop through each element
    for (var i = 0; i < loadings.length; i++) {
        var preloading = loadings[i];
        preloading.classList.toggle('active'); // to show or hide the animation
    }

    setTimeout(function() {
        for (var i = 0; i < loadings.length; i++) {
            loadings[i].classList.toggle('active');
        }
    }, 3000); // Show content after 3 seconds
  });

  