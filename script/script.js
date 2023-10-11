const homeLink = document.querySelector('nav ul li:nth-child(1) a');
const page1Link = document.querySelector('nav ul li:nth-child(2) a');
const page2Link = document.querySelector('nav ul li:nth-child(3) a');
const page3Link = document.querySelector('nav ul li:nth-child(4) a');


homeLink.addEventListener('click', function(event) {
  event.preventDefault(); 
  window.location.href = 'index.html'; 
});

page1Link.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = 'page1.html';
});

page2Link.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = 'page2.html';
});
page3Link.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = 'page3.html'; 
});

const burger = document.querySelector('#burger');
const menu = document.querySelector('.burger_slide');
const links = document.querySelectorAll('.disp');

burger.addEventListener('click', () => {
    menu.classList.toggle('disp');
});


links.forEach(link => {
    link.addEventListener('click', (event) => {
        const targetPage = link.getAttribute('data-target');
        if (targetPage) {
            window.location.href = targetPage;
        } else {
            menu.classList.remove('disp'); 
        }
    });
});
const links1 = document.querySelectorAll('.menu_list a');

links1.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetPage = link.getAttribute('href');
        if (targetPage) {
            window.location.href = targetPage;
        }
    });
});

