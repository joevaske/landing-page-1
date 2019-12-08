
 function myFunction(x) {
    //x.classList.toggle("change");
   // document.getElementById("menu-items").classList.remove("invisible");
   
 
    
   
    

  }



  $(document).ready(function(){

      
   var  menuBar = $("#menu-bar");
   var menuItems = $("#menu-items");
   
   menuBar.click(function(){
      menuItems.toggleClass("invisible");
      menuBar.toggleClass("change");
      
      //menuItems.slideToggle("invisible");
     
    });
    
  });