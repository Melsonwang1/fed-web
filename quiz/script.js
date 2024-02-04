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

function displayQuestion() {
    const questionDiv = document.getElementById("question");
    questionDiv.innerHTML = `
        <p>${questions[currentQuestionIndex].question}</p>
        ${questions[currentQuestionIndex].options
            .map(
                (option) =>
                    `<button class="btn ${option === 'Yes' ? 'btn-yes' : 'btn-no'}" onclick="selectOption('${option}')">${option}</button>`
            )
            .join("")}
    `;
}

function startAssessment() {
    document.getElementById("startButton").style.display = "none";
    displayQuestion();
}

function selectOption(option) {
    const resultDiv = document.getElementById("result");
    const loadingDiv = document.getElementById("loading");
    
    resultDiv.innerHTML = "";
    questions[currentQuestionIndex].selectedOption = option;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        loadingDiv.style.display = "block"; // Show loading animation

        // Simulate loading time (3 seconds) using setTimeout
        setTimeout(() => {
            loadingDiv.style.display = "none"; // Hide loading animation
            showResult(); // Show the result after the loading time
        }, 3000);
    }
}

function showResult() {
    const resultDiv = document.getElementById("result");
    const score = countScore();

    if (score >= 3) {
        resultDiv.innerHTML = "<p class='result'>Result: You might to be COVID-19 positive. Please consult a doctor and do take an ART test.</p>";
    } else {
        resultDiv.innerHTML = "<p class='result'>Result: You are likely to be COVID-19 negative. Stay Safe!</p>";
    }

    resultDiv.style.display = "block"; // Show the result
}


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
    const menuIcon = document.getElementById("menu");
    const navbar = document.querySelector("header .navbar");
  
    // Toggle navbar visibility when menu icon is clicked
    menuIcon.addEventListener("click", function() {
      navbar.classList.toggle("nav-toggle");
      menuIcon.classList.toggle("fa-bars");
      menuIcon.classList.toggle("fa-times");
    });
  });

  // JavaScript to toggle the loading animation
document.addEventListener('DOMContentLoaded', function() {
    // Select the preloading element
    var preloading = document.getElementById('pre-loading-animation');
  
    // Toggle the 'active' class to show or hide the loading animation
    function toggleLoadingAnimation() {
        preloading.classList.toggle('active');
    }
  
    // Call toggleLoadingAnimation function to show the loading animation
    toggleLoadingAnimation();
  
    // Example: Hide the loading animation after 3 seconds (adjust as needed)
    setTimeout(function() {
        toggleLoadingAnimation();
    }, 3000);
});