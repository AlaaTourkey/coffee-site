$(document).ready(function () {

// loading screen
  $('#loading').fadeOut(1000 ,function () {
    $('body').css('overflow','auto');
  })
  
  // colorBox
  $('#colorBox i').click(function () {
    // $('.box').toggle(1000) solution
    let boxWidth=$('.box').outerWidth();
    if ($('#colorBox').css('left')=='0px') {
      $('#colorBox').animate({left:`-${boxWidth}`},1000)
    }
    else{
      $('#colorBox').animate({left:0},1000)
    }
  })


// header
  $(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
  });

// nav  change color
  let aboutOffset = $('.about').offset().top;

  $(window).scroll(function () {
    let windowScroll = $(window).scrollTop()
    if (windowScroll > aboutOffset - 70) {
      $('.navbar').css('backgroundColor', 'rgba(54, 38, 38, 0.795)');
      $('.navbar').css('padding-left', '30px');
      $('.navbar').css('padding-right', '30px');
      $('#btnUp').fadeIn(500)
    }
    else {
      $('.navbar').css('backgroundColor', 'transparent');
      $('.navbar').css('padding-left', '0')
      $('.navbar').css('padding-right', '0')
      $('#btnUp').fadeOut(500)
    }
  })

// 
var mixer = mixitup('.mix-it-up');



// offer hour
  let getOur = () => {
    let date = new Date();
    document.getElementById("clock").innerHTML = `
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
    `
    setInterval(getOur, 1000);
  }
  getOur()

// btnUp
  $('#btnUp').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 1000)
  })

// links

  $('a[href^=#]').click(function (e) {
    let linkHreff = $(e.target).attr('href');
    let sectionOffset = $(linkHreff).offset().top;
    $('html,body').animate({ scrollTop: sectionOffset }, 3000)
    // $('window').scrollTop(hotOffset); without smothing
  })

// about counter

  $(".counter").counterUp({
    delay: 7,
    time: 1000
  });
})


