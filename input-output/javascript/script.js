let arrayA = ["apple", "anaconda", "all"];
let arrayB = ["bubble", "bob"];
document.eventListener("keydown", showBusiness);
function showBusiness() {
  document.getElementById("main-container").classList.add("hidden");
  if (event.code === "KeyB") {
    document.getElementById(arrayB[1]).classList.remove("hidden");
  }
}