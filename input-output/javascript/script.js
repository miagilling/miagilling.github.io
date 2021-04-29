let arrayA = ["ayesha", "aj", "adwoa"];
let arrayB = ["black", "base", "becki"];
let arrayC = ["clare","cheyenne", "cushnie"];
let arrayD = ["dope", "defy"];
let arrayE = ["eleven","ekua", "enda"];
let arrayF = ["frolic", "fear", "fenty"];
let arrayG = ["goodee", "gold", "glow"];
let arrayH = ["harlem", "hyper", "helmer"];
let arrayI = ["ivy", "iya", "island"];
let arrayJ = ["johanna", "jam", "jacqs"];
let arrayK = ["kendrick", "kosa", "kihry"];
let arrayL = ["lapp", "luv"];
let arrayM = ["mahogany", "mented", "maki"];
let arrayN = ["nia", "nancy"];
let arrayO = ["oat", "organic", "octave"];
let arrayP = ["partake", "pat", "perry"];
let arrayQ = ["queen"];
let arrayR = ["roam", "rich", "red"];
let arrayS = ["semicolon", "sankofa", "saint"];
let arrayT = ["twelve", "theopolis", "thirteen"];
let arrayU = ["uoma", "uncle", "uhai"];
let arrayV = ["vavvuone","viz","virgo"];
let arrayW = ["white", "wholistic"];
let arrayX = ["xn", "xoxo"];
let arrayY = ["yam", "yusef"];
let arrayZ = ["zou", "zashadu", "zoezi"];

document.eventListener("keydown", showBusiness);
function showBusiness() {
  document.getElementById("main-container").classList.add("hidden");
  if (event.code === "KeyB") {
    document.getElementById(arrayB[1]).classList.remove("hidden");
  }
}