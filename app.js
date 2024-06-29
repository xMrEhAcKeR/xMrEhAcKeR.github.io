/* mobile menu */
const hamburger = document.querySelector('.hamburger');
const logo = document.querySelector('.desk-logo');
const navMenu = document.querySelector('.nav-menu');
const navBar = document.querySelector('.desk-nav');
const navLink = document.querySelectorAll('.desk-nav a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  logo.classList.toggle('active');
  navMenu.classList.toggle('active');
  navBar.classList.toggle('active');
  navLink.forEach((link) => link.classList.toggle('active'));
});

navLink.forEach((link) => link.addEventListener('click', () => {
  hamburger.classList.remove('active');
  logo.classList.remove('active');
  navMenu.classList.remove('active');
  navBar.classList.remove('active');
  navLink.forEach((link) => link.classList.remove('active'));
}));

/* mobile popup window */
/* Generate card element */

const projectInfo1 = [
  {
    featureImage: './Screenshots/Abdulhay/cover.png',
    classMobileImg: 'work-img1',
    classDeskImg: 'desktop-work1',
    featureImageDesk: './Screenshots/Abdulhay/cover.png', 
    projectName: 'Sheikh Abdulhay Yousuf',
    caption: 'Sheikh Abdulhay Yousuf',
    feature: {
      title: 'Flutter',
      domain: 'Mobile',
      year: 2024,
    },
    projectDescription:
      'Official Application For Sheikh Abdulhay Yousuf.',
    technologies: ['flutter', 'nodeJS', 'dart', 'http', 'figma', 'firebase'],
    popUpDescription: ``,
    liveDemo: `https://christianbiring1.github.io/Capstone_project-module1/`,
    sourceCode: `https://github.com/christianbiring1/Capstone_project-module1`,
    screenshots: ['./Screenshots/Abdulhay/1.png', './Screenshots/Abdulhay/2.png', './Screenshots/Abdulhay/3.png', './Screenshots/Abdulhay/4.png', './Screenshots/Abdulhay/5.png', './Screenshots/Abdulhay/6.png', './Screenshots/Abdulhay/7.png', './Screenshots/Abdulhay/9.png'],
  },

  {
    featureImage: './mob-img/SnapshootPortfolio3.png',
    classMobileImg: 'work-img3',
    classDeskImg: 'desktop-work3',
    featureImageDesk: './desktop-img/SnapshootPortfolio3.png',
    projectName: 'Facebook 360',
    caption: 'Tonic',
    feature: {
      title: 'CANOPY',
      domain: 'backEndDev',
      year: 2015,
    },
    projectDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javaScript', 'gitHub', 'Ruby', 'Bootstrap'],
    popUpDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modidicta suscipit iusto, iste earum quod ad optio aliquid, voluptatum
    aspernatur repellendus! Non quidem, id adipisci aut temporibus fuga dolor hic delectus numquam. Quo eligendi nesciunt reprehenderit voluptatem iure impedit tenetur nisi, officia,
    numquam minima voluptatibus? Obcaecati maxime laudantium nihil beatae?`,
    liveDemo: `https://christianbiring1.github.io/Capstone_project-module1/`,
    sourceCode: `https://github.com/christianbiring1/Capstone_project-module1`,
  },
];

const projectInfo2 = [
  {
    featureImage: './Screenshots/AlmaDesign/cover.png',
    classMobileImg: 'work-img2',
    classDeskImg: 'desktop-work2',
    featureImageDesk: './Screenshots/AlmaDesign/cover.png',
    projectName: 'Alma Design',
    caption: 'Alma Design',
    feature: {
      title: 'FLUTTER',
      domain: 'Mobile',
      year: 2024,
    },
    projectDescription:
      'A Syrian Gift Store.',
    technologies: ['flutter', 'nodeJS', 'dart', 'http', 'figma', 'firebase'],
    popUpDescription: ``,
    liveDemo: `https://christianbiring1.github.io/Capstone_project-module1/`,
    sourceCode: `https://github.com/christianbiring1/Capstone_project-module1`,
    screenshots: ['./Screenshots/AlmaDesign/1.png', './Screenshots/AlmaDesign/2.png', './Screenshots/AlmaDesign/3.png', './Screenshots/AlmaDesign/4.png', './Screenshots/AlmaDesign/5.png', './Screenshots/AlmaDesign/6.png', './Screenshots/AlmaDesign/7.png', './Screenshots/AlmaDesign/8.png'],
  },

  {
    featureImage: './mob-img/SnapshootPortfolio4.png',
    classMobileImg: 'work-img4',
    classDeskImg: 'desktop-work4',
    featureImageDesk: './desktop-img/SnapshootPortfolio4.png',
    projectName: 'Uber Navigation',
    caption: 'Multi-Post Stories',
    feature: {
      title: 'CANOPY',
      domain: 'backEndDev',
      year: 2015,
    },
    projectDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javaScript', 'gitHub', 'Ruby', 'Bootstrap'],
    popUpDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modidicta suscipit iusto, iste earum quod ad optio aliquid, voluptatum
    aspernatur repellendus! Non quidem, id adipisci aut temporibus fuga dolor hic delectus numquam. Quo eligendi nesciunt reprehenderit voluptatem iure impedit tenetur nisi, officia,
    numquam minima voluptatibus? Obcaecati maxime laudantium nihil beatae?`,
    liveDemo: `https://christianbiring1.github.io/Capstone_project-module1/`,
    sourceCode: `https://github.com/christianbiring1/Capstone_project-module1`,
  },
];

/* Grab the container i.e work-section-container */

const workSectionContainer = document.querySelector('.work-section');

/* Generate the work-section content for the first item in projectInfo1 */

const work1 = projectInfo1[0];
const layout1 = document.createElement('article');
layout1.classList.add('card-work', 'card-work1');
layout1.innerHTML = `<figure><img scr= "${work1.featureImage}" class="${work1.classMobileImg}">
  <img src= "${work1.featureImageDesk}" class="${work1.classDeskImg}">
  <figcaption><h2>${work1.caption}</h2></figcaption></figure>
  <div class='aside'>
    <div class='type'>
     <h2>${work1.projectName}</h2>
     <ul>
        <li class="title">${work1.feature.title}</li>
        <li class="domain">${work1.feature.domain}</li>
        <li class="year">${work1.feature.year}</li>
     </ul>
    </div>
    <p class="description">${work1.projectDescription}</p>
    <div class="languages languages-desk">
      <ul>
        <li><span class="html">${work1.technologies[0]}</span></li>
          <li><span class="css">${work1.technologies[1]}</span></li>
          <li><span class="js">${work1.technologies[2]}</span></li>
        </ul>
    </div>
    <button class="seeProject">See project <img src= "${work1.featureImageDesk}" class="${work1.classDeskImg}"></button>
  </div>`;
workSectionContainer.appendChild(layout1);

/* Generate the work-section content for the first item in projectInfo2 */

const work2 = projectInfo2[0];
const layout2 = document.createElement('article');
layout2.classList.add('card-work', 'card-work2');
layout2.innerHTML = `<figure><img scr= "${work2.featureImage}" class="${work2.classMobileImg}">
  <img src= "${work2.featureImageDesk}" class="${work2.classDeskImg}">
  <figcaption><h2>${work2.caption}</h2></figcaption></figure>
  <div class="aside ordering">
    <div class="type">
      <h2>${work2.projectName}</h2>
      <ul>
        <li class="title">${work2.feature.title}</li>
        <li class="domain">${work2.feature.domain}</li>
        <li class="year">${work2.feature.year}</li>
     </ul>
    </div>
    <p class="description">${work2.projectDescription}</p>
    <div class="languages languages-desk">
      <ul>
        <li><span class="html">${work2.technologies[0]}</span></li>
          <li><span class="css">${work2.technologies[1]}</span></li>
          <li><span class="js">${work2.technologies[2]}</span></li>
        </ul>
    </div>
    <button class="seeProject">See project<img src= "${work2.featureImageDesk}" class="${work2.classDeskImg}"></button>
  </div>`;
workSectionContainer.appendChild(layout2);

/* Generation of the popUp container */
const popLayer = document.querySelector('.layer');
const popUpWindow = document.querySelector('.popup-window');

/* Function to create popup */
const createPopup = (work) => {
  const screenshotsHTML = work.screenshots.map((screenshot) => {
    return `<img src="${screenshot}" style="width:25%; height:25%" alt="Project Screenshot" class="popup-screenshot" />`;
  }).join('');

   popUpWindow.innerHTML = `
    <h2>${work.projectName}</h2>
    <div class="header">
      <ul class="feature">
        <li class="name">${work.feature.title}</li>
        <li class="tech">${work.feature.domain}</li>
        <li class="annee">${work.feature.year}</li>
      </ul>
      <button class="close">&times;</button>
    </div>
    <div class="popup-screenshots">
      ${screenshotsHTML}
    </div>
    <div class="popup-body">
      <p class="details">${work.popUpDescription}</p>
      <div class="left">
        <div class="popup-languages">
          <ul>
            <li>${work.technologies[0]}</li>
            <li>${work.technologies[1]}</li>
            <li>${work.technologies[2]}</li>
          </ul>
          <ul class="supplement-desk">
            <li>${work.technologies[3]}</li>
            <li>${work.technologies[4]}</li>
            <li>${work.technologies[5]}</li>  
          </ul>
        </div>
        <div class="popup-btn">
          <button class="live"><a href="${work.liveDemo}">See live</a><img src="./desktop-img/liveicon.png" alt="" /></button><br>
          <button class="source"><a href="${work.sourceCode}">Source code</a><img src="./desktop-img/sourcevector.png" alt="" /></button>
        </div>
      </div>
    </div>`;

  popLayer.appendChild(popUpWindow);
  popUpWindow.classList.toggle('active');
  popLayer.classList.toggle('active');
  const closeModel = document.querySelector('.close');
  closeModel.addEventListener('click', () => {
    popUpWindow.classList.remove('active');
    popLayer.classList.remove('active');
  });
};

/* Attach event listeners for popups */
document.querySelectorAll('.card-work .seeProject img').forEach((image, index) => {
  image.addEventListener('click', () => {
    if (index === 0) {
      createPopup(work1);
    } else if (index === 1) {
      createPopup(work2);
    }
  });
});
