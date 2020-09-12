
/* Portfolio Mix jQuery Plugin   Call   */

$(document).ready(function(){
    
  //Mixitup
    var mixer = mixitup('.container');
});



/* After Click Portfolio Button Color          */

document.querySelector(".btn1").addEventListener("click",function(){
    document.querySelector(".btn1").setAttribute("style","background:#fff;")
});
document.querySelector(".btn2").addEventListener("click",function(){
    document.querySelector(".btn2").setAttribute("style","background:#fff;")
});
document.querySelector(".btn3").addEventListener("click",function(){
    document.querySelector(".btn3").setAttribute("style","background:#fff;")
});
document.querySelector(".btn4").addEventListener("click",function(){
    document.querySelector(".btn4").setAttribute("style","background:#fff;")
});


/* After click One Portfolio Button Other Button  Color     */

document.querySelector(".btn2").addEventListener("click",function(){
    document.querySelector(".btn1").setAttribute("style","background:#ebc985")
    document.querySelector(".btn3").setAttribute("style","background:#ebc985")
    document.querySelector(".btn4").setAttribute("style","background:#ebc985")
});

document.querySelector(".btn3").addEventListener("click",function(){
    document.querySelector(".btn1").setAttribute("style","background:#ebc985")
    document.querySelector(".btn2").setAttribute("style","background:#ebc985")
    document.querySelector(".btn4").setAttribute("style","background:#ebc985")
});

document.querySelector(".btn4").addEventListener("click",function(){
    document.querySelector(".btn1").setAttribute("style","background:#ebc985")
    document.querySelector(".btn2").setAttribute("style","background:#ebc985")
    document.querySelector(".btn3").setAttribute("style","background:#ebc985")
});

document.querySelector(".btn1").addEventListener("click",function(){
    document.querySelector(".btn2").setAttribute("style","background:#ebc985")
    document.querySelector(".btn3").setAttribute("style","background:#ebc985")
    document.querySelector(".btn4").setAttribute("style","background:#ebc985")
});

//Stickey Menu

     window.addEventListener("scroll",function(){
     var x = document.querySelector("nav");
     x.classList.toggle("stickey",window.scrollY > 50 );
 });
     

 document.querySelector(".scrollbtn").addEventListener("click",function(){
    window.scrollTo({top:0,behavior:"smooth"});
});




// Mobile Menu


   function openNav(){
    document.querySelector("#mainNav").setAttribute("style","width:100%")
};
   function closeNav(){
    document.querySelector("#mainNav").setAttribute("style","width:0%")
};
