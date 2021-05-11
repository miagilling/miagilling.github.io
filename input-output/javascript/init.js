// this function ensures that all of my divs don't show up on the page at once
function hideAllElements()
{
  // the query selector grabs all of my divs that have the class name business
  let allElements = document.querySelectorAll(".business");
  allElements.forEach(function(business) {
    // and makes sure that if their display style is set to block,
    if (business.style.display === "block") {
      // that it does not show up
      business.style.display = "none";
    }
  })
}

// each of these event listeners listens for a specific letter key to be pressed down
document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  // this first one is for the letter a, and its keycode is 65
  if(x==65)
  {
  hideAllElements();
  // when the a key is pressed, my div with the id adwoa will show up 
  var y = document.getElementById("adwoa");
  // its display style is initially set to none
  if (y.style.display === "none")
  {
    // but after you press the a key, the display style will change to block
  document.getElementById("adwoa").style.display = "block";
  }
  else
  {
  // if the a key isn't pressed, it will continue to have its display style set to none
  document.getElementById("adwoa").style.display = "none";
  }
  }
  })  

  // this same process is repeated for each key
document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  // this is where i change the key code to correspond with each letter key
  if(x==66)
  {
  hideAllElements();
  // and this is where i grab the div that corresponds with that key
  var y = document.getElementById("black");
  if (y.style.display === "none")
  {
  document.getElementById("black").style.display = "block";
  }
  else
  {
  document.getElementById("black").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==67)
  {
  hideAllElements();
  var y = document.getElementById("clare");
  if (y.style.display === "none")
  {
  document.getElementById("clare").style.display = "block";
  }
  else
  {
  document.getElementById("clare").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==68)
  {
  hideAllElements();
  var y = document.getElementById("dope");
  if (y.style.display === "none")
  {
  document.getElementById("dope").style.display = "block";
  }
  else
  {
  document.getElementById("dope").style.display = "none";
  }
  }
  })  


document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==69)
  {
  hideAllElements();
  var y = document.getElementById("ekua");
  if (y.style.display === "none")
  {
  document.getElementById("ekua").style.display = "block";
  }
  else
  {
  document.getElementById("ekua").style.display = "none";
  }
  }
  })  


document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==70)
  {
  hideAllElements();
  var y = document.getElementById("fenty");
  if (y.style.display === "none")
  {
  document.getElementById("fenty").style.display = "block";
  }
  else
  {
  document.getElementById("fenty").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==71)
  {
  hideAllElements();
  var y = document.getElementById("goodee");
  if (y.style.display === "none")
  {
  document.getElementById("goodee").style.display = "block";
  }
  else
  {
  document.getElementById("goodee").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==72)
  {
  hideAllElements();
  var y = document.getElementById("hyper");
  if (y.style.display === "none")
  {
  document.getElementById("hyper").style.display = "block";
  }
  else
  {
  document.getElementById("hyper").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==73)
  {
  hideAllElements();
  var y = document.getElementById("ivy");
  if (y.style.display === "none")
  {
  document.getElementById("ivy").style.display = "block";
  }
  else
  {
  document.getElementById("ivy").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==74)
  {
  hideAllElements();
  var y = document.getElementById("johanna");
  if (y.style.display === "none")
  {
  document.getElementById("johanna").style.display = "block";
  }
  else
  {
  document.getElementById("johanna").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==75)
  {
  hideAllElements();
  var y = document.getElementById("kendrick");
  if (y.style.display === "none")
  {
  document.getElementById("kendrick").style.display = "block";
  }
  else
  {
  document.getElementById("kendrick").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==76)
  {
  hideAllElements();
  var y = document.getElementById("lapp");
  if (y.style.display === "none")
  {
  document.getElementById("lapp").style.display = "block";
  }
  else
  {
  document.getElementById("lapp").style.display = "none";
  }
  }
  }) 

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==77)
  {
  hideAllElements();
  var y = document.getElementById("mahogany");
  if (y.style.display === "none")
  {
  document.getElementById("mahogany").style.display = "block";
  }
  else
  {
  document.getElementById("mahogany").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==78)
  {
  hideAllElements();
  var y = document.getElementById("nia");
  if (y.style.display === "none")
  {
  document.getElementById("nia").style.display = "block";
  }
  else
  {
  document.getElementById("nia").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==79)
  {
  hideAllElements();
  var y = document.getElementById("organic");
  if (y.style.display === "none")
  {
  document.getElementById("organic").style.display = "block";
  }
  else
  {
  document.getElementById("organic").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==80)
  {
  hideAllElements();
  var y = document.getElementById("partake");
  if (y.style.display === "none")
  {
  document.getElementById("partake").style.display = "block";
  }
  else
  {
  document.getElementById("partake").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==81)
  {
  hideAllElements();
  var y = document.getElementById("queen");
  if (y.style.display === "none")
  {
  document.getElementById("queen").style.display = "block";
  }
  else
  {
  document.getElementById("queen").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==82)
  {
  hideAllElements();
  var y = document.getElementById("roam");
  if (y.style.display === "none")
  {
  document.getElementById("roam").style.display = "block";
  }
  else
  {
  document.getElementById("roam").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==83)
  {
  hideAllElements();
  var y = document.getElementById("saint");
  if (y.style.display === "none")
  {
  document.getElementById("saint").style.display = "block";
  }
  else
  {
  document.getElementById("saint").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==84)
  {
  hideAllElements();
  var y = document.getElementById("twelve");
  if (y.style.display === "none")
  {
  document.getElementById("twelve").style.display = "block";
  }
  else
  {
  document.getElementById("twelve").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==85)
  {
  hideAllElements();
  var y = document.getElementById("uhai");
  if (y.style.display === "none")
  {
  document.getElementById("uhai").style.display = "block";
  }
  else
  {
  document.getElementById("uhai").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==86)
  {
  hideAllElements();
  var y = document.getElementById("virgo");
  if (y.style.display === "none")
  {
  document.getElementById("virgo").style.display = "block";
  }
  else
  {
  document.getElementById("virgo").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==87)
  {
  hideAllElements();
  var y = document.getElementById("wholistic");
  if (y.style.display === "none")
  {
  document.getElementById("wholistic").style.display = "block";
  }
  else
  {
  document.getElementById("wholistic").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==88)
  {
  hideAllElements();
  var y = document.getElementById("xn");
  if (y.style.display === "none")
  {
  document.getElementById("xn").style.display = "block";
  }
  else
  {
  document.getElementById("xn").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==89)
  {
  hideAllElements();
  var y = document.getElementById("yam");
  if (y.style.display === "none")
  {
  document.getElementById("yam").style.display = "block";
  }
  else
  {
  document.getElementById("yam").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==90)
  {
  hideAllElements();
  var y = document.getElementById("zou");
  if (y.style.display === "none")
  {
  document.getElementById("zou").style.display = "block";
  }
  else
  {
  document.getElementById("zou").style.display = "none";
  }
  }
  }) 
