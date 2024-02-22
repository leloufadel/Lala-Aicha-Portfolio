// JS for Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// JS for Form Validation
const ftitle = document.getElementById('fulltitle');
const email = document.getElementById('email-address');
const message = document.getElementById('write-message');
const form = document.getElementById('contact');
const errorElement = document.getElementById('small');

form.addEventListener('submit', (e) => {
  if (title.value === '' || title.value == null) {
    e.preventDefault();
    errorElement.innerText = 'Please enter your title';
  } else if (email.value === '' || email.value == null) {
    e.preventDefault();
    errorElement.innerText = 'Please enter email';
  } else if (email.value === email.value.toUpperCase()) {
    e.preventDefault();
    errorElement.innerText = 'Please use Lowercase';
  } else if (/[A-Z]/.test(email.value)) {
    e.preventDefault();
    email.style.color = 'blue';
    errorElement.innerText = 'Please use Lowercase';
  } else {
    email.style.color = 'grey';
    errorElement.innerText = '';
  }

  // JS for preserve data in the browsererve Data
  const userInput = {
    storetitle: ftitle.value,
    storeEmail: email.value,
    storeMessage: message.value,
  };
  localStorage.setItem('userInput', JSON.stringify(userInput));
});

// Popup Form
const data = [
  
  {
    id: 0,
    title: 'Page-to-Page',
    description: 'Page to Page Library is a Full Stuck web app that allows users to view and reserve books. Only admins can add and delete books and also give admin permissions to regular users.',
    featuredImage: 'images/responsive-pageto.png',
    class: 'Remote',
    type: 'Collaborative',
    languages: ['Rails', 'React', 'PostgreSQL', 'JavaScript', 'HTML', 'CSS'],
    liveLink: 'https://page-to-page.onrender.com/',
    sourceLink: 'https://github.com/leloufadel/Page-To-page-Library-Backend',
  },
  {
    id: 1,
    title: 'MovieShow',
    description: 'MovieSHOW is a Single-page Web Application built with JavaScript ES6. It uses the free TVMAZE-API to showcase information about movies and Television shows.',
    featuredImage: 'images/IMoviesShowcase.png',
    class: 'Remote',
    type: 'Collaborative',
    languages: ['ES6', 'Webpack', 'HyperText-ML'],
    live_link: 'https://majdalkilany.github.io/JavaScript-capstone-project/dist/',
    sourceLink: 'https://github.com/majdalkilany/JavaScript-capstone-project',
  },
  // {
  //   title: 'Leaderboard',
  //   description: 'This project consumes the Leaderboard API Service using JavaScript Async and Await to display scores submitted by different players',
  //   image: 'images/leaderboard.png',
  //   class: 'Personal',
  //   type: 'In-house',
  //   technologies: ['HyperText-ML', 'JavaScript', 'CSS'],
  //   live_link: '',
  //   source_link: '',
  // },
  {
    id: 2,
    title: 'bookstore',
    description: 'Bookstore" is a React and Redux-based web app with API integration. It offers a seamless browsing and purchasing experience for books online. With CSS and Bootstrap, it ensures visually appealing designs. Check out the GitHub repo for code exploration and contributions.',
    featuredImages: 'Images/project_third.png',
    class: 'Remote',
    type: 'Solo',
    languages: ['HTML', 'CSS', 'React', 'Redux'],
    live_link: 'https://bookstore-pjl7.onrender.com/',
    sourceLink: 'https://github.com/leloufadel/bookstore',
  },
  {
    id: 3,
    title: 'Money Tracker',
    description: 'A mobile web app designed for budget management, enabling you to oversee your expenses by providing a categorized list of transactions. This way, you can easily track your spending and understand where your money has been allocated.',
    featuredImage: 'images/Money-tracker-capt.png',
    class: 'Remote',
    type: 'Solo',
    languages: ['Ruby on rails', 'PostgreSQL', 'CSS'],
    live_link: 'https://moneytracker-yyep.onrender.com/',
    sourceLink: 'https://github.com/leloufadel/Money-tracker-App',
  },
];

  const projectContainer = document.getElementById('works');
  projectDetails.forEach((project, index) => {
    const articleTemplate = `<div class="card-wrapper">
     <article class="card">
        <div class="img-div">
        <img src="${project.featuredImage}" alt="project1" class="card-project">
        </div>
        <div>
          <h2>${project.title}</h2>
          <ul class="card-list">
            <li class="no-bullet">${project.class}</li>
            <li class="project-tag">
              <span>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
                </svg>
                ${project.type}
              </span>
            </li>
            <li class="project-tag">
              <span>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
                </svg>
                &copy;2024
              </span>
            </li>
          </ul>
          <p>${project.description}</p>
          <ul class="tech-stack">
            <li>${project.technologies[0]}</li>
            <li>${project.technologies[1]}</li>
            <li>${project.technologies[2]}</li>
          </ul>
          <button class="btn" type="button">See Project</button>
        </div>
        <div class="modal-cover" id="modal-cover${index}">
          <div class="modal" id="modal${index}">
            <div class="modal-head-container">
              <h2 id="mdlhead-${index}">${project.title}</h2>
              <span class="modal-close">&times;</span>
            </div>
            <ul class='modal-ul'>
              <li class="no-bullet">${project.class}</li>
              <li class="project-tag">
                <span>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
                  </svg>
                  ${project.type}
                </span>
              </li>
              <li class="project-tag">
                <span>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
                  </svg>
                  &copy;2024
                </span>
              </li>
            </ul>
            <img src="${project.image}" alt="project1" class="modal-img" id="mdl-${index}">
            <div class="modal-footer">
              <p class="desc" id="mdldesc-${index}">${project.description}</p>
              <div class="details">
                <ul class="tech-stack" id="mdltecstk-${index}">
                  <li>${project.technologies[0]}</li>
                  <li>${project.technologies[1]}</li>
                  <li>${project.technologies[2]}</li>
                </ul>
                <div class="view-btn-container">
                  <button class="mdbtn" type="button" id="mdlbtn${index}"> <a href="${project.live_link}"> Live <i class="bx bx-right-top-arrow-circle"></i></a></button> 
                  <button class="mdbtn" type="button" id="mdlbtn-${index}"> <a href="${project.source_link}">Source <i class="bx bxl-github"></i></a> </button>
                </div>
              </div>
            </div>
          </div>
      </article>
      </div>
    `;
    projectContainer.innerHTML += articleTemplate;
  });
  projectContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
      const modalCover = event.target.parentNode.nextElementSibling;
      document.body.style.overflow = 'hidden';
      modalCover.style.display = 'flex';
      header.style.display = 'none';
    }
    if (event.target.classList.contains('modal-close')) {
      const modalCover = event.target.closest('.modal-cover');
      modalCover.style.display = 'none';
      document.body.style.overflow = 'scroll';
      header.style.display = 'block';
    }
  });
}());
