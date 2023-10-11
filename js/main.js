// all
$('.toggler').click(function(e){
  e.preventDefault();
  $(this).toggleClass('active');
});

// dropdown
$('.dropdown-toggle').click(function(e){
  e.preventDefault();
  $(this).parent().toggleClass('open');
  $(document).mouseup(function(e){
    let item = $(".dropdown.open");
    if (item.has(e.target).length === 0){
        item.removeClass('open');
    }
  })
});

// fake-select
$('.fake-select__item').click(function(){
  $(this).parents(".fake-select").find('.fake-select__item').removeClass('active');
  $(this).addClass('active');
  $(this).parents('.fake-select').find('.fake-select__value').html(this.innerHTML)
  $(this).parents('.fake-select').removeClass('open');
});

// collapse
$(".collapse-link").click(function(e){
  e.preventDefault();

  if($(this).hasClass("active")){
    $(this.getAttribute("href")).slideUp(300);
  } else{
    $(this.getAttribute("href")).slideDown(300);
  }

  $(this).toggleClass("active");
});

// tabs
$('.tab-link').click(function(e){
    e.preventDefault();
    $(this).parents(".tab-nav").find('.tab-link').removeClass('active');
    $(this).addClass('active');
    $(this).closest('.tab-section').find('.tab-pane').removeClass('active');
    $(this.getAttribute("href")).addClass('active');
});

// modal
$(".modal-open").click(function(e){
  e.preventDefault();
  $(".modal").removeClass("show");
  $(this.getAttribute("href")).addClass("show");
  $('body').removeClass('modal-open');
  $('body').addClass('modal-open');
})
$(".modal").mousedown(function(e){
  let closeLinks = document.querySelectorAll(".modal-close");
  let modalsGroup = document.querySelectorAll(".modal");

  for(let elem of closeLinks){
    if(e.target == elem){
      $(this).removeClass("show");
      $('body').removeClass('modal-open');
      $('.login__mobile-link').removeClass('active');
    }
  }
  for(let elem of modalsGroup){
    if(e.target == elem){
      $(this).removeClass("show");
      $('body').removeClass('modal-open');
      $('.login__mobile-link').removeClass('active');
    }
  }
})

// home
if (window.innerWidth > 767){
  new Swiper(".project-slider", {
    slidesPerView: 2,
    spaceBetween: 35,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  new Swiper(".discounts-slider", {
    spaceBetween: 35,
    loop: true,
    slidesPerView: 'auto',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.discounts-next',
      prevEl: '.discounts-prev',
    },
  });
}

new Swiper(".virtues-slider", {
  spaceBetween: 35,
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.virtues-next',
    prevEl: '.virtues-prev',
  },
});

new Swiper(".team-slider", {
  spaceBetween: 35,
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.team-next',
    prevEl: '.team-prev',
  },
});

new Swiper(".review-slider", {
  spaceBetween: 35,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.review-next',
    prevEl: '.review-prev',
  },
});

Fancybox.bind("[data-fancybox]", {});

// fake-select
$('.fake-select__item').click(function(){
  $(this).parents(".fake-select").find('.fake-select__item').removeClass('fake-select__item_active active');
  $(this).addClass('fake-select__item_active');
  $(this).parents('.fake-select').find('.fake-select__value').html(this.innerHTML)
  $(this).parents('.fake-select').find('.fake-select__link').addClass('active');
});

