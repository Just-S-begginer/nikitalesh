let burgerButton = document.querySelector('.burger__btn');
let phoneMenu = document.querySelector('.phone_container');
let menuLinks = document.querySelectorAll('.item-link');
let containers = document.querySelectorAll('.anchor');
let aboutMeInfo = document.querySelector('.about_me')
let aboutMeBtn = document.querySelector('#about_me_btn');
let containerData;

aboutMeBtn.addEventListener('click', () => {
  aboutMeInfo.classList.add('active');
  aboutMe.classList.add('active');
  bodyLock();
})

aboutMe.addEventListener('click', function (e) {
  if (!e.target.closest('.about_me_content')) {
    aboutMeInfo.classList.remove('active');
    aboutMe.classList.remove('active');
    bodyUnLock();
  }
})

menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    let currentLink = event.target.getAttribute('href');
    containers.forEach((container) => {
      if (currentLink == container.getAttribute('data')) {
        window.scrollTo(0, container.offsetTop);
      }
    });
    if (phoneMenu.classList.contains('active_menu')) {
      phoneMenu.classList.remove('visible');
      burgerButton.classList.remove('active')
      setTimeout(() => {
          phoneMenu.classList.remove('active_menu');
        }, 100
      )
    }
    event.preventDefault();
  });
});



burgerButton.onclick = () => {
  burgerButton.classList.toggle('active');
  if (burgerButton.classList.contains('active')) {
    phoneMenu.classList.add('active_menu');
    setTimeout(() => {
        phoneMenu.classList.add('visible');
      }, 100
    )
  }
  else {
    phoneMenu.classList.remove('visible');
    setTimeout(() => {
        phoneMenu.classList.remove('active_menu');
      }, 600
    )
  }
}

function bodyLock() {
  body.classList.add('locked');
}

function bodyUnLock() {
  body.classList.remove('locked');
}
