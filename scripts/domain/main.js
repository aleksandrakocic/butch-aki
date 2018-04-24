console.log("hello");




//----------------SCROLL-------------------
$(function() {
    var header = $("#nav");
    var logo = $(".logo")
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            header.addClass("scrolled");
   
        } else {
            header.removeClass("scrolled");
        }
    });
})
//---------------------------------------------

//------------------ API --------------------
var URL ='https://api.myjson.com/bins/kit4z';

  var request = new XMLHttpRequest();
  request.open('GET', URL);
request.responseType = 'json';
request.onload = function () {
 
var i;
var j;
for ( i=0; i<request.response.events.length;i++){

var club = document.querySelectorAll('.club');
//loop - club class
for(j=0;j<club.length; j++){
  
  club[i].innerHTML=request.response.events[i].club

  
}
var x;
  var date = document.querySelectorAll('.date');
//loop - date class
      for (x=0;x<date.length;x++){
 date[i].innerHTML=request.response.events[i].date
  
    }  
  
var b;

    var place = document.querySelectorAll('.place');
// loop - class place
      for (b=0;b<place.length;b++){
 place[i].innerHTML=request.response.events[i].place
  
    }  

  
 }

}


request.send();





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


//FORM
var forma = document.getElementById("form");
forma.addEventListener("submit", validation);
function validation(event){
    event.preventDefault();
    var verified = true;



// NAME validation
    var name = document.getElementById("fullName").value;
    if (name === "") {
      verified=false;
      document.getElementById("fullName").style.background = '#190a3d';
      console.log('prazan ali ne menja style');
    } else {
        document.getElementById('fullName').style.background = '#cb3040';
        console.log('ovo ostaje ako je dobro');
    }

    var i;  
    for ( i=0; i<8; i++){
      var name = document.getElementById("fullName").value;
      var errorNumb;
      if (name.indexOf(i) > -1) {
        verified =false;
        document.getElementById('fullName').style.background = '#190a3d';
      } else{
        document.getElementById('fullName').style.background = '#cb3040';
      }
      
    }


// EMAIL validation
  var email = document.getElementById("email").value;
  if (email.indexOf("@") < 1) {
    verified= false;
    document.getElementById('email').style.background = '#190a3d';
  }else{
    document.getElementById('email').style.background = '#cb3040';   
  }
 if (verified) {
   forma.submit();
 }
}

















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






