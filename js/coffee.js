$(document).ready(function(){

  $(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav : true,
  
  });
  console.log("dfdddddddddddddddd");

  $(".counter").counterUp({
    delay:7,
    time:1000
  });

  let getOur=()=>{
    let date=new Date();
    document.getElementById("clock").innerHTML=`
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
    `
    setInterval(getOur,1000);
  }
  getOur()
  

})




