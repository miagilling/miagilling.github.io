// $(document).ready(function() {
//  var entryCount = 0;
//  var displayCount = 0;

//   $(document).on("keypress", function(e) {
//     e.preventDefault();
//     entryCount ++;
//     displayCount ++;
       
//     var char = String.fromCharCode(e.which);
//     console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
//     createElement(char);
//   });

//   $(document).on("keydown", function(e) {
//     if (e.which == 8){
//       e.preventDefault();
//       entryCount ++;
//       displayCount --;
//       console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
//       deleteElement();
//     }
//   });

// });

// let arrayA = ["ayesha", "aj", "adwoa"];
// let arrayB = ["black", "base", "becki"];
// let arrayC = ["clare","cheyenne", "cushnie"];
// let arrayD = ["dope", "defy"];
// let arrayE = ["eleven","ekua", "enda"];
// let arrayF = ["frolic", "fear", "fenty"];
// let arrayG = ["goodee", "gold", "glow"];
// let arrayH = ["harlem", "hyper", "helmer"];
// let arrayI = ["ivy", "iya", "island"];
// let arrayJ = ["johanna", "jam", "jacqs"];
// let arrayK = ["kendrick", "kosa", "kihry"];
// let arrayL = ["lapp", "luv"];
// let arrayM = ["mahogany", "mented", "maki"];
// let arrayN = ["nia", "nancy"];
// let arrayO = ["oat", "organic", "octave"];
// let arrayP = ["partake", "pat", "perry"];
// let arrayQ = ["queen"];
// let arrayR = ["roam", "rich", "red"];
// let arrayS = ["semicolon", "sankofa", "saint"];
// let arrayT = ["twelve", "theopolis", "thirteen"];
// let arrayU = ["uoma", "uhai"];
// let arrayV = ["vavvuone","virgo"];
// let arrayW = ["white", "wholistic"];
// let arrayX = ["xn", "xoxo"];
// let arrayY = ["yam", "yusef"];
// let arrayZ = ["zou", "zashadu", "zoezi"];

// function createElement(k) {
//   var elem = $('#cursor');
//   if (k == "a" || k == "A") { elem.before(''); }
//   if (k == "b" || k == "B") { elem.before('<span class="inner">B</span>'); }
//   if (k == "c" || k == "C") { elem.before('<span class="inner"><img src="http://a.deviantart.net/avatars/i/n/infinitenyancatplz.gif"></span>'); }
//   if (k == "d" || k == "D") { elem.before('<span class="inner">D</span>'); }
//   if (k == "e" || k == "E") { elem.before('<span class="inner">E</span>'); }
//   if (k == "f" || k == "F") { elem.before('<span class="inner">F</span>'); }
//   if (k == "g" || k == "G") { elem.before('<span class="inner">G</span>'); }
//   if (k == "h" || k == "H") { elem.before('<span class="inner">H</span>'); }
//   if (k == "i" || k == "I") { elem.before('<span class="inner">I</span>'); }
//   if (k == "j" || k == "J") { elem.before('<span class="inner">J</span>'); }
//   if (k == "k" || k == "K") { elem.before('<span class="inner">K</span>'); }
//   if (k == "l" || k == "L") { elem.before('<span class="inner">L</span>'); }
//   if (k == "m" || k == "M") { elem.before('<span class="inner">M</span>'); }
//   if (k == "n" || k == "N") { elem.before('<span class="inner">N</span>'); }
//   if (k == "o" || k == "O") { elem.before('<span class="inner">O</span>'); }
//   if (k == "p" || k == "P") { elem.before('<span class="inner">P</span>'); }
//   if (k == "q" || k == "Q") { elem.before('<span class="inner">Q</span>'); }
//   if (k == "r" || k == "R") { elem.before('<span class="inner">R</span>'); }
//   if (k == "s" || k == "S") { elem.before('<span class="inner">S</span>'); }
//   if (k == "t" || k == "T") { elem.before('<span class="inner">T</span>'); }
//   if (k == "u" || k == "U") { elem.before('<span class="inner">U</span>'); }
//   if (k == "v" || k == "V") { elem.before('<span class="inner">V</span>'); }
//   if (k == "w" || k == "W") { elem.before('<span class="inner">W</span>'); }
//   if (k == "x" || k == "X") { elem.before('<span class="inner">X</span>'); }
//   if (k == "y" || k == "Y") { elem.before('<span class="inner">Y</span>'); }
//   if (k == "z" || k == "Z") { elem.before('<span class="inner">Z</span>'); }
//   if (k == " ") { elem.before('<span class="inner">&nbsp;</span>') };
// }

// function deleteElement() {
//   $(".inner").last().remove();
// }



function hideAllElements()
{
  let allElements = document.querySelectorAll(".business");
  allElements.forEach(function(business) {
    if (business.style.display === "block") {
      business.style.display = "none";
    }
  })
}

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==65)
  {
  hideAllElements();
  var y = document.getElementById("adwoa");
  if (y.style.display === "none")
  {
  document.getElementById("adwoa").style.display = "block";
  }
  else
  {
  document.getElementById("adwoa").style.display = "none";
  }
  }
  })  

document.addEventListener("keydown", function(){
  var x=event.keyCode || event.which;
  if(x==66)
  {
  hideAllElements();
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