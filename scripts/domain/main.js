console.log("hello");




//----------------SCROLL-------------------
// $(function() {
//     var header = $("#nav");
  
//     $(window).scroll(function() {    
//         var scroll = $(window).scrollTop();
//         if (scroll >= 50) {
//             header.addClass("scrolled");
//         } else {
//             header.removeClass("scrolled");
//         }
//     });
//---------------------------------------------

//------------------ ZA API --------------------
// var URL ='https://api.myjson.com/bins/1b031f';

//   var request = new XMLHttpRequest();
//   request.open('GET', URL);
// request.responseType = 'json';
// request.onload = function () {
// console.log(request.response)

// }
// request.send();
//-----------------------------------------------

//--------------------SLICK-------------------------
// $('.responsive').slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
//   });

















//-----------------FORM VALIDATION----------------------------

// var form = document.getElementById("form");

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
// var fullname = document.getElementById("fulname").value;

// if (fullname == "") {
//     document.getElementById("upozorenje").innerHTML = "ime";
// }
// if (fullname.charAt(0) == "") {
//    document.getElementById('upozorenje').innerHTML = "bez space";
// }
// //za email
// var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// })
//---------------------------------------------------------------------------------------------







//-------------ZA NAV ON SCROLL---------------

// $(function() {
//     var header = $("#nav");
  
//     $(window).scroll(function() {    
//         var scroll = $(window).scrollTop();
//         if (scroll >= 50) {
//             header.addClass("scrolled");
//         } else {
//             header.removeClass("scrolled");
//         }
//     );