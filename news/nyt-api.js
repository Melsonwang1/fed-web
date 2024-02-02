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

 // Loading Animation
 document.addEventListener("DOMContentLoaded", function() {
  // Hide preloader after 2-3 seconds
  setTimeout(function() {
    document.getElementById("pre-loading-animation").style.display = "none";
  }, 3000); 
});







const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResults = document.getElementById('search-results');

const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const authKey = 'Z6Ow8VJvQswJSIc7IvJqx7CGqPhhzKvg';
const apiKey = `api-key=${authKey}`;

let content = [];

// DEFAULT QUERY
async function doQuery(queryTerm) {
  let query = `q=${queryTerm}`;

  const response = await fetch(`${url}?${query}&${apiKey}`);
  const data = await response.json();

  content = data.response.docs.map(doc => ({
    id: doc._id,
    image: doc.multimedia[5]
      ? `https://www.nytimes.com/${doc.multimedia[5].url}`
      : 'https://raw.githubusercontent.com/sepsol/covid-news/gh-pages/assets/placeholder.jpg',
    headline: doc.headline.main,
    abstract: doc.abstract,
    author: doc.byline.original,
    section: doc.section_name,
    words: doc.word_count + ' words',
    readTime: Math.ceil(doc.word_count / 238) + ' min read time',
    rawDate: new Date(doc.pub_date),
    date: new Date(doc.pub_date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }),
    url: doc.web_url
  }));

  let li = [];

  for (let i = 0, length = content.length; i < length; i++) {
    const pSuper = document.createElement('p');
    pSuper.innerHTML = content[i].section;
    const h3Headline = document.createElement('h3');
    h3Headline.innerHTML = content[i].headline;
    const pAbstract = document.createElement('p');
    pAbstract.innerHTML = content[i].abstract;
    const pSub = document.createElement('p');
    pSub.innerHTML = `${content[i].author} | ${content[i].words} | ${content[i].readTime}`;

    const imgImage = document.createElement('img');
    imgImage.src = content[i].image;

    const divDate = document.createElement('div');
    divDate.innerHTML = content[i].date;
    const divContent = document.createElement('div');
    divContent.append(pSuper, h3Headline, pAbstract, pSub);
    const divCard = document.createElement('div');
    divCard.append(divDate, divContent, imgImage);

    const aLink = document.createElement('a');
    aLink.href = content[i].url;
    aLink.setAttribute('target', '_blank');
    aLink.setAttribute('rel', 'noopener noreferrer');
    aLink.className = 'no-select';
    aLink.append(divCard);

    li = [...li, document.createElement('li')];
    li[i].append(aLink);

    searchResults.append(li[i]);

    // CLASSES
    divCard.className = 'card';
    divDate.className = 'date';
    divContent.className = 'content';

    pSuper.className = 'super';
    h3Headline.className = 'headline';
    pAbstract.className = 'abstract';
    pSub.className = 'sub';
  }
}

doQuery('covid', 'coronavirus', 'pandemic', 'virus', 'vaccine');


/* 

=== NOTE TO SELF === 

// this is how you would resolve promises (fetch api) with async-await approach
(async function getData() {
  const response = await fetch(`${url}?${query}&${apiKey}`);
  const data = await response.json();
  console.log(data);
})();

// this is how you would resolve promises (fetch api) with .then approach
fetch(`${url}?${query}&${apiKey}`)
  .then(response => response.json())
  .then(data => console.log(data));

*/
