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
const fname = document.getElementById('fullname');
const email = document.getElementById('email-address');
const message = document.getElementById('write-message');
const form = document.getElementById('contact');
const errorElement = document.getElementById('small');

form.addEventListener('submit', (e) => {
  if (fname.value === '' || fname.value == null) {
    e.preventDefault();
    errorElement.innerText = 'Please enter your name';
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
    storeName: fname.value,
    storeEmail: email.value,
    storeMessage: message.value,
  };
  localStorage.setItem('userInput', JSON.stringify(userInput));
});

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

const sliceText = (text) => {
  const maxLength = 200;
  if (text.length < maxLength) {
    return text;
  }
  return text.slice(0, text.length - maxLength);
};

const cards = document.querySelector('.extra');
const modalWarpper = document.querySelector('#modal-wrapper');

const addCardsToUI = () => {
  const extraContainer = document.querySelector('.extra');

  const fullWidthCardDisplay = `<article class="works-centered container">
    <div class="main-works">
      <img src='${data[0].featuredImage}' alt="My Recent Works">
      <div class="main-works-1">
        <h2 class="multi-stories">${data[0].title}</h2>
        <p>${sliceText(data[0].description)}...</p>
      </div>
    </div>
<div class="main-works ">
      <ul class="project-list">
        <li><a class="start-list" href="#">${data[0].languages[0]}</a></li>
        <li><a class="second-list" href="#">${data[0].languages[1]}</a></li>
        <li><a class="third-list" href="#">${data[0].languages[2]}</a></li>
        <li><button class="see-btn fourth-list see-proj-1 load-modal" data-id="0" id="see-project-1">See Project</button></li>
      </ul>
    </div>
  </article>`;

  extraContainer.innerHTML = `
<div class="works-centered">${fullWidthCardDisplay}</div>
<div class="print-container container">
${data.map((item) => (`<article style=" background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, .9)), url('${item.featuredImage}') center/cover no-repeat;" class="card">
<div class="card-details">
  <h4 class="card-title">${item.title}</h4>
  <p class="card-description">${sliceText(item.description)}...</p>
<div class="card-tags">
    <span>${item.languages[0]}</span>
    <span>${item.languages[1]}</span>
    <span>${item.languages[2]}</span>
  </div>
</div>
<button class="card-btn see-btn" data-id="${item.id}">See Project</button>
</article>`)).join(' ')}
</div>`;
};

document.addEventListener('DOMContentLoaded', addCardsToUI);

const addToModal = (dataId) => {
  const selectedData = data.filter((x) => x.id === +dataId);

  const modalTemplate = `<div id="modal-box">
  <div id="modal-header">
      <h2>${selectedData[0].title}</h2>
      <button data-action="close" class="close-modal" id="close-modal">&times;</button>
    </div>
    <ul class="popup-lang">
      <li><a href="#">${selectedData[0].languages[0]}</a></li>
      <li><a href="#">${selectedData[0].languages[1]}</a></li>
      <li><a href="#">${selectedData[0].languages[2]}</a></li>
    </ul>
  <div class="popup-details">
      <img class="feature-image" src='${selectedData[0].featuredImage}' alt="Feature Portfolio Image">
      <div class="side-info">
        <p>${selectedData[0].description}</p>
        <div class="out-links">
          <a class="see-live" href=${selectedData[0].liveLink} target="_blank">See Live<img src="./logos/See-live.png" alt="live icon"></a>
          <a class="see-source" href=${selectedData[0].sourceLink} target="_blank">See Source<img src="./logos/See-source.png" alt="source icon"></a>
        </div>
        </div>
      </div>
      </div>`;

  modalWarpper.innerHTML = modalTemplate;
};

const removeModal = () => {
  const parent = modalWarpper.parentElement.firstElementChild.nextElementSibling.nextElementSibling;
  const closeButton = parent.firstElementChild.firstElementChild.lastElementChild;
  closeButton.addEventListener('click', () => {
    modalWarpper.classList.remove('active');
  });
};

const showModal = () => {
  modalWarpper.classList.add('active');
  removeModal();
};

cards.addEventListener('click', (e) => {
  if (e.target.classList.contains('see-btn')) {
    const dataId = e.target.dataset.id;
    addToModal(dataId);
    showModal();
  }
});
