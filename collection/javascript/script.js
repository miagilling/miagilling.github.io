// FOR TECHNICAL REFLECTION ASSIGNMENT: 
// i explained the code i added to this for my collection assignment
// starting on line 49



// FOLLOW THE COMMENTS STEP BY STEP
// log in to you your Airtable account
// make sure you have a base set up with at least one table with data inside it
// go to Account settings
// click the generate API key button
// copy and paste it into line 12 below
// then go to this link https://airtable.com/api?utm_source=google&utm_medium=cpc&utm_extra5=kwd-826617918193&utm_extra2=936407691&utm_extra10=110555501161&creative=465926015426&device=c&cx=us&targetid=kwd-826617918193&campaignid=936407691&adgroupid=110555501161&utm_campaign=brand_creator&utm_content=bofu_freetrial&gclid=Cj0KCQjwmIuDBhDXARIsAFITC_5ScBkfOcfy68SuLtNsXhLoTp8JoYwFlBuOK6yDpmKnA_eCAXZ3kKsaAptkEALw_wcB
// select your base
// copy and paste the base ID into line 13 below

var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyVkcd9aadb1WT6Q" }).base(
  "appuZjxbmS98gqhpf"
);

let allItems = [];

base('captcha').select({}).eachPage(function page(records, fetchNextPage) {
  records.forEach(function(record) {
    // push each item received into the allItems array on line 16
    allItems.push(record);
  });
  // if there is another page of items, get those too
  fetchNextPage();
}, function done(err) {
  if (err) { console.error(err); return; }
  // all items received!!
  // console log the allItems array, you should see all of your data in there now
  console.log(allItems);

  // call a new function to do stuff with your data and pass the allItems array to it!
  showImagesOne(allItems);
  showImagesTwo(allItems);
  showImagesThree(allItems);
  showImagesFour(allItems);
  showImagesFive(allItems);
  showImagesSix(allItems);
  showImagesSeven(allItems);
  showImagesEight(allItems);
  showImagesNine(allItems);
});

// this function is allowing me to display my first set of images on my site
function showImagesOne(){
// console.logging my functions showImagesOne & allItems to make sure they're working
    console.log("showImagesOne()");
    console.log(allItems[0]);
// creating a variable (boxOne) to grab my div with the id 'one' 
    let boxOne = document.getElementById("one");
// creating a variable (randomImage) to actually create an image in my div one
    let randomImage = document.createElement("img");
// using a random number generator to select a random image from all of my airtable images
    let randomNumber = Math.floor(Math.random() * allItems.length) + 1;
// this is where it's actually grabbing the image from- it's going to my airtable fields, then images, then getting the individual url
    randomImage.src = allItems[randomNumber].fields.images[0].url;
// finally, i'm appending the random image it grabs to my div boxOne
    boxOne.appendChild(randomImage)
}

// repeating this same function for all nine of my divs !
function showImagesTwo(){
    console.log("showImagesTwo()");
    console.log(allItems[0]);
    let boxTwo = document.getElementById("two");
    let randomImage = document.createElement("img");
    let randomNumber = Math.floor(Math.random() * allItems.length) + 1;
    randomImage.src = allItems[randomNumber].fields.images[0].url;
    boxTwo.appendChild(randomImage)
}

function showImagesThree(){
    console.log("showImagesThree()");
    console.log(allItems[0]);
    let boxThree = document.getElementById("three");
    let randomImage = document.createElement("img");
    let randomNumber = Math.floor(Math.random() * allItems.length) + 1;
    randomImage.src = allItems[randomNumber].fields.images[0].url;
    boxThree.appendChild(randomImage)
}

function showImagesFour(){
    console.log("showImagesFour()");
    console.log(allItems[0]);
    let boxFour = document.getElementById("four");
    let randomImage = document.createElement("img");
    let randomNumber = Math.floor(Math.random() * allItems.length) + 1;
    randomImage.src = allItems[randomNumber].fields.images[0].url;
    boxFour.appendChild(randomImage)
}

function showImagesFive(){
    console.log("showImagesFive()");
    console.log(allItems[0]);
    let boxFive = document.getElementById("five");
    let randomImage = document.createElement("img");
    let randomNumber = Math.floor(Math.random() * allItems.length) + 1;
    randomImage.src = allItems[randomNumber].fields.images[0].url;
    boxFive.appendChild(randomImage)
}

function showImagesSix(){
    console.log("showImagesSix()");
    console.log(allItems[0]);
    let boxSix = document.getElementById("six");
    let randomImage = document.createElement("img");
    let randomNumber = Math.floor(Math.random() * allItems.length) + 1;
    randomImage.src = allItems[randomNumber].fields.images[0].url;
    boxSix.appendChild(randomImage)
}

function showImagesSeven(){
    console.log("showImagesSeven()");
    console.log(allItems[0]);
    let boxSeven = document.getElementById("seven");
    let randomImage = document.createElement("img");
    let randomNumber = Math.floor(Math.random() * allItems.length) + 1;
    randomImage.src = allItems[randomNumber].fields.images[0].url;
    boxSeven.appendChild(randomImage)
}

function showImagesEight(){
    console.log("showImagesEight()");
    console.log(allItems[0]);
    let boxEight = document.getElementById("eight");
    let randomImage = document.createElement("img");
    let randomNumber = Math.floor(Math.random() * allItems.length) + 1;
    randomImage.src = allItems[randomNumber].fields.images[0].url;
    boxEight.appendChild(randomImage)
}

function showImagesNine(){
    console.log("showImagesNine()");
    console.log(allItems[0]);
    let boxNine = document.getElementById("nine");
    let randomImage = document.createElement("img");
    let randomNumber = Math.floor(Math.random() * allItems.length) + 1;
    randomImage.src = allItems[randomNumber].fields.images[0].url;
    boxNine.appendChild(randomImage)
}



// one.addEventListener("click", showImagesOne);



// get element by id, add event listener on click
// call showImages when you click on a box