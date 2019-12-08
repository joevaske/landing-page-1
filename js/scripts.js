
 function myFunction(x) {
    x.classList.toggle("change");
   // document.getElementById("menu-items").classList.remove("invisible");
   
 
    var menu1 = document.getElementById('menu-items');
  

     menu1.classList.toggle("invisible");
    
   


  }


  $( ".menu-bar-left" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      // Animation complete.
    });
  });