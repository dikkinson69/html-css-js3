'use strict';

///////////////////////////////////////

//navigation
const nav = document.querySelector('.nav');

//operations
//Selektujemo tabove
const tabs = document.querySelectorAll('.operations__tab');//buttoni
//div container, u kojem su buttoni
const tabsContainer = document.querySelector('.operations__tab-container');
//tabs content, onaj div sa tekstovima  ispod
const tabsContent = document.querySelectorAll('.operations__content');
console.log(tabsContent);


//btn scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////
//implementing smooth scrolling kad kliknemo na learn more 
//2 nacina

//old school nacin
//selektujemo button learn more btn scroll too i na sekciju section 1 po idu da ode
//u event handleru ce nam trebati koordinate gde da skroluje tranica
//to je ovo s1coords

//getBoundingClientRect daje veliki info sa dosta propertija o onome sto kliknemo


// btnScrollTo.addEventListener('click', function(e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);
  
  //console.log(e.target.getBoundingClientRect());

  //scrolling//nista ne kontam, al ovako se kalkulise
  // window.scrollTo(s1coords.left + window.pageXOffset , s1coords.top 
  //   + window.pageYOffset);//radi 

  //ovaj zonfa sa objektom je mnogo lepsi i smooth
    // window.scrollTo({
    //   left: s1coords.left + window.pageXOffset,
    //   top: s1coords.top + window.pageYOffset,
    //   behavior: 'smooth',
    // });

    // });
    
    ///EVENT DELEGATIOn, kada kliknemo jedan od linkova u navu, da smooth 
    //scrolluje
    
    
    //PAGE NAVIGATION
    //safa forEach da okacimo za svaki link
    //zbog anchora # u htmlu, klikom na linkove on nas odmah prebaci na tu
    //sekciju. NEcemo taj default behaviour
    
    //NAJMODERNIJE I NAJBOLJE RESENJE JE OVO!
  // section1.scrollIntoView({behavior: 'smooth'});


  // document.querySelectorAll('.nav__link').forEach
// (function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');//ovo nam treba
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth' });
//   });
// });
//ovaj forEach i ovaj nacin je dobar kada imamo malo elemenata
//ali ako imamo bas mnogo, performans bi mogao da bude impacted
//zato nam treba EVENT DELEGATION


//1. ADd event listener to common parent element
//2. Determine what element originated the event, i onda radimo sa tim
//elementom

document.querySelector('.nav__links').addEventListener
('click', function(e) {
  e.preventDefault();

  //matching strategy
  if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');//ovo nam treba
      console.log(id);
      document.querySelector(id).scrollIntoView({
      behavior: 'smooth' }); 
  }
});


///////
//Building a tabbed component
//nekoliko tabova, kao tri buttona npr i kada kliknemo na jedan
//ono sto je ispod se promeni, tekst npr u nasem slucaju, nalazi se u 
//operations

//treba nam dosta htmla
//div operations
//tab container, tu su buttoni
//onda div klase operations  contenti
//ono sto cemo da uradimo je da sakrijemo druge tabove sa njihovim konentom
//klikom na neki 
//prvi conent je klase operations active, on je vidljiv prvi, drugi nisu


//mozemo ovako sa forEachom, ali to nije dobro, ako bi imali mnogo tabova
//
// tabs.forEach(t=>t.addEventListener('click', () => {
//   console.log('TABB');
// }));

//event delegation, bolja prica
//kacimo event handler na zajednicki parent element od svih elemenata koji
//nam trebaju a to je tabsContainer, on je parrent

tabsContainer.addEventListener('click', function(e) {
  //matching strategy
    //const clicked = e.target;
   //const clicked = e.target.parentElement; i ovo je problem, jer selektuje parent element pored buttona
    const clicked = e.target.closest('.operations__tab');//najbolje resenje closest, u zagradi isti query kao i sto smo ga selektovali
   console.log(clicked);//ali problem je sto u buttonu imamo i span element...

   //guard clause. Ako nema klika da returnuje odna, problem u slucaju da klikenmo 
   //na div container oko buttona, izbacivao bi null i error
  if(!clicked) return;//ako nije element kliknut, returnuje se funkcija, da ne bi bilo errora 

  //Active tab. Removing classes and then implementing, to everyone
  //da malo poskoci onajbutton koji je kliknut
    tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
   
  //remove active classes for both the tab and content area
    tabsContent.forEach(cl => cl.classList.remove('operations__content--active'));
    
  //add class to both the tab and content area
    clicked.classList.add('operations__tab--active');
   //activate content area. Div sa kontentom, svaki kliknut ce postati varijablja clicked
   //to je ovo u {}. I dodajemo mu klasu active
   document.querySelector(`.operations__content--${clicked.dataset.tab}`)
   .classList.add('operations__content--active');//da se contenti 2 i 3 pojave ispod prvog,, activa

});

////////////
//passing arguments to event handlers
//odradicemo da linkovi u navu prilikom prelaska misem preko njih budu u prvom planu
//da ostali nekako izgube opacity dok smo preko nekog
//u pitanju su nav linkovi
//koristicemo ceo nav kao parent 
//koristicemo mouseover i mouseout
//sa nav link klase, elementima cemo da manipulisepo. 

//Menu fade animation

//sve cemo u funkciju staviti i hasnije to u event handler
const handlerHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target; // Element being hovered
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    // Adjust the opacity of siblings
    siblings.forEach(function (el) {
      if (el !== link) {
        //el.style.opacity = this; // Use `this` as opacity. Ne treba opacity kao parametar gore
        el.style.opacity = opacity;
      }
    });
    //logo.style.opacity = this; // Use `this` as opacity
    logo.style.opacity = opacity;
  }
};

//NOT DRY VERZIJA
// nav.addEventListener('mouseover', function(e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;//creating a variable tat contains element we re working with
//     const sibilings = link.closest('.nav')
//     .querySelectorAll('.nav__link');//finding closest parent

//     const logo = link.closest('.nav').querySelector('img');//logo

//     //changing the opacity of sibilings
//     sibilings.forEach(function (el) {
//       if (el !== link){
//         el.style.opacity = 0.5;
//       }
//     });
//     logo.style.opacity = 0.5;

//   }
// });

// //reversing!
// nav.addEventListener('mouseout', function(e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;//creating a variable tat contains element we re working with
//     const sibilings = link.closest('.nav')
//     .querySelectorAll('.nav__link');//finding closest parent

//     const logo = link.closest('.nav').querySelector('img');//logo

//     //changing the opacity of 
//     sibilings.forEach(function (el) {
//       if (el !== link){
//         el.style.opacity = 1;
//       }
//     });
//     logo.style.opacity = 1;

//   }
// });


//MALO MANJE DRY
nav.addEventListener('mouseover', function(e) {
  handlerHover(e, 0.5);//ovako se pozivaju fun, kada imamo argumente koje treba da popunimo
});

nav.addEventListener('mouseout', function(e) {
  handlerHover(e, 1);
});


//NAJDRY sa BIND metodom. Jako bitno da el.style.opacity u funkciji bude this
// Using bind to pass `this` for opacity
// nav.addEventListener('mouseover', handlerHover.bind(0.5)); // `this` becomes 0.5
// nav.addEventListener('mouseout', handlerHover.bind(1));    // `this` becomes 1


///////
//Sticky navigation. da navbar bude na vrhu, gde god da skrolujemo dole
// u cssu imamo .sticky nav klasu koja je pizicije fixed

//scroll event cemo koristiti. on je u windowu available
//getBoundindClient react koristimo da saznamo poiciju section1

const initialCoordinates = section1.getBoundingClientRect();
console.log(initialCoordinates);//ovde je bitan top value info


//RADI. ali bad practice ovako sa window
// window.addEventListener('scroll', function(e) {
//   //console.log(e);/. kad scrollujemo daje mnogo info o svim html pokretima
//   //console.log(this.window.scrollY);//daje nam po Y osi info sa brojevima

//   if(window.scrollY > initialCoordinates.top) {
//     nav.classList.add('sticky');
//   }else {
//     nav.classList.remove('sticky');
//   }
// });

////////////////
//INTERSECTION OBSERVER API
//da nas target element nadgleda(observes) drugi element ili nacin na 
//koji utice na viewport
//ovo ce biti korisno za sticky navigation
//new intersection observe je u sustini objekat, kao argumente ima
//callback funkciju i objekat

//callback ce se pozvati kad god nas target obradi root element na 10 procenata
//kao sto smo u threshold odredili
//u callbacku su argumenti entries i sam objekat
//entries su u stvari niz od threshold entriesa,


//root property u objektu ce biti element sa kojim ce target da radi
//treshold je procenat intersekcije odnosno rada za kojim ce callback funkcija da se pozove
// const obsCallback = function(entries, observer) { 
//   entries.forEach(entry => {
//     console.log(entry);//kada dodjemo do targeta, section1. Int obs entry nam daje info
//   });
// };

// const observerOptions = {
//   root: null,
//   //threshold: 0.1, //10 procenata
//   threshold: [0, 0.2],//threshold observed when moving into the view 0.2 and out of the view 0
//   //kada  bi imali i jos jedan element u nizu npr 1. 0, 1, 0.2 onda znaci da ce obradjivati samo kada je target 100 posto vidljiv u viewortu
// };

// const observer = new IntersectionObserver(obsCallback,observerOptions);
// observer.observe(section1);//ovo section1 je target


//implementing sticky navigation with observant api
//nav ce da nam bude sticku kada header ne bude vise u viewportu, kada skrolujemo
//i nema vise headera


const header = document.querySelector('.header');

const stickyNav = function(entries) {
  const [entry] = entries;//malo destructuringa
  console.log(entry);

  if(!entry.isIntersecting) {
    nav.classList.add('sticky');
  }else {
    nav.classList.remove('sticky');
  }
};

const options = {
  root: null,
  threshold: 0,//kada se 0 posto headera vidi.
  rootMargin: '-90px', //kada heder bude taman na 90 visine procitan, on ce ubaciti nav. znaci malo prostora samo da ostane
};

const headerObserver = new IntersectionObserver(stickyNav, options);
headerObserver.observe(header);

/////////////////////////
//revealing element on scroll
//using intesection observer api
//reveal elements when we scroll to them

//znaci kako skrolujemo, tako nam se pojavljuje svaka sekcija
//nekako slajduje unutra, tako izgleda animacija

//postoji css klasa sa kojom manipulisemo  .section--hidden opacity 0 transform translateY 8 rem
//moramo je prvo ubaciti u html klase svake sekcije taj class iz section hidden

//ovako ubacivanjem su automatski nevidljive sve sekcije...
//mi cemo sa js da ih ubacimo sa lepom animacijom

//BRISEMO KLASU HIDDEN IZ HTMLA ZA SEKCIJE...

//u sustini kada skrolujemo ili priblizimo se nekoj sekciji. Tada cemo da 
//REMOVE class hidden


//napravicemo allsections varijablu sa svim sekcijama, kroz koju cemo sa foreachom 
//da loopujemo ali koristimo i sectionOBserverver da observujemo sekcije

//REVEAL SECTIONS
const allSections = document.querySelectorAll('.section');



const revealSection = function(entries, observer) {
  //const [entry] = entries;//destructuring
  //console.log(entry);

  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;//ako nema intersekcije
    }
    entry.target.classList.remove('section--hidden');
  
    observer.unobserve(entry.target);
  });
};

const optionsHidden = {
  root: null,
  threshold: 0.15,//sekcija se pojavljuje kada je 15 posto vidljiva
};

const sectionObserver = new IntersectionObserver(revealSection, optionsHidden);
allSections.forEach(function(section) {
  sectionObserver.observe(section);
  //section.classList.add('section--hidden');//sakrivamo sekcije
});


/////
//fixing a bug. Svaki put kad refreshujemo stranicu, sekcije nestanu
//zato sto su sekcije sakrivene u pocetku, kada pokrenemo stranicu
//izbrisali smo destructuring za entries i stavili foreach petlju jer je
//svakako niz u pitanju i onda tu stavili onu if logiku sa menjanjem klasa
// i observer

////////////////////
//Lazy loading images

//slikesu po defaultu blurovane, fora je kada im se priblizimo sa scrollom
//da se lagano ucitaju
//div class features ima img u om su slike slike i atribut src img lazy. sa slabom rezolucijom, dakle jako male//
//a postoji i kopija u data src atributu od img! istih slika dosta vecu rezoluciju i 
//njih cemo da zamenimo tu, da se tako ucitava
//o oovme se radi
// src="img/digital-lazy.jpg"
// data-src="img/digital.jpg"-----ovo je special atribute sa ovom slikom replacujemo ovu gore
//takodje moramo i da izbrisemo klasu lazy-img i to je atribut imga
//.lazy-img ima filter blur(20px) u cssu

//necemo sve slike da budu lazy loaded, vec sao one sa data-src propertijem

const imgTargets = document.querySelectorAll(`img[data-src]`);//ovkao selektujemo samo one sa propertijem data src

const loadImg = function(entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) {
    return;
  }else {
    //replace src with data src
    entry.target.src = entry.target.dataset.src;
    
    entry.target.addEventListener('load', function() {//laod event handler
      entry.target.classList.remove('lazy-img');
    });
  }
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '+200px',
});

imgTargets.forEach(img => imgObserver.observe(img));


///////////
//implementing slider component
//u testimonials sekciji postoje strelice i kada kliknemo da se menja testimonial
//raznih usera
//treba da popravimo i poebana slova jer su svi slajdovi jedan preko drugog trenutno

//div klase slider u kojem su os tri diva klase slide--1 2 i 3
//fora je sto u style propertiju divova klase slide--1 2 i 3 ima 
//transform: translateX(-200%) za drugi (100%) i za treci 0 %

//prvo da uradimo da nisu slajdovi jedan preko drugog neko side by side

//Slider
const slides = document.querySelectorAll('.slide');

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');


//DOTS container
//create one element for each of the slides
const dotContainer = document.querySelector('.dots');
const createDots = function() {
  slides.forEach(function(_, i) {//_znak za throwaway varijablu, ne treba nam
    dotContainer.insertAdjacentHTML(`beforeend`, `<button class="dots__dot" data-slide="${i}" </button>`);
  });
};

//current dot activated
const activateDot = function(slide) {
  document.querySelectorAll('.dots__dot').forEach(dot => 
    dot.classList.remove('dots__dot--active'));

    document.querySelector(`.dots__dot[data-slide="${slide}"]`)    
    .classList.add('dots__dot--active');
};

createDots();
activateDot(0);
/////////
//starting as 0 and increasing as we go
let curSlide = 0;
const maxSlide = slides.length;//da bi se zaustavili negde kad slajdujemo

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(-800px)';//samo da bi mogli da vidimo slike
// slider.style.overflow = 'visible';//ovo je to sto su jedna preko druge
// //funkcija za slajdovanje


const goToSlide = function(slide) {
  slides.forEach((s, i) => s.style.transform 
  = `translatex(${100 *(i - curSlide)}%)`);
};

goToSlide(0);

//slides.forEach((s, i) => s.style.transform = `translatex(${100 * i}%)`);
// 0%, 100%, 200%, 300%

//next slide funkcija
const nextSlide = function() {
  if (curSlide === maxSlide - 1 /* jer nije zero based*/) {
    curSlide = 0;
  }else {
    curSlide++;

  }
  
  goToSlide(curSlide);
  activateDot(curSlide);

};


const prevSlide = function() {
  if (curSlide === 0) {
    curSlide = maxSlide -1;
  }else {
    curSlide--;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};

btnRight.addEventListener('click', nextSlide);
//Curslide = 1: -100%, 0%, 100%, 200% suprotono od gore
btnLeft.addEventListener('click', prevSlide);

//........
//KEYBOARD EVENT da slajdujemo sa strelicama
document.addEventListener('keydown', function(e) {
  console.log(e);//ArrowLeft i ArrowRight

  if (e.key === 'ArrowLeft') {
    prevSlide();
  }else if (e.key === 'ArrowRight'){
    nextSlide();
  }
});


/////////
//Implementing dots for scrolling
//postoji div u div slider sekciji div class"dots"

dotContainer.addEventListener('click', function(e) {
  if (e.target.classList.contains('dots__dot')) {
    //console.log('DOT');
    curSlide = Number(e.target.dataset.slide);
   // const {slide} = e.target.dataset;//destrucutirng slide
    goToSlide(curSlide);
    //goToSlide(slide);
    activateDot(curSlide);
  }
});

//currentslide dot ima drugaciju boju malo, to sada
//posle createDots cemo tu funkciju


