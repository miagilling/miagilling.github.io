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
  "appoVv1qskvYYLgW0"
);

let allItems = [];

base('table').select({}).eachPage(function page(records, fetchNextPage) {
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
  setTable(allItems);
});

function setTable(allItems) {
  console.log(allItems);
  let container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);
  allItems.forEach(function(item) {
    let name = item.fields.name;
    console.log(name);
    let imageUrl = item.fields.images[0].url;

    if (name === "pancakes") {
      let pancakes = document.createElement('img');
      pancakes.src = imageUrl;
      pancakes.classList.add("pancakes");
      container.appendChild(pancakes);
      pancakes.style.width = "50%";
    }

    if (name === "fork") {
      let fork = document.createElement('img');
      fork.src = imageUrl;
      fork.classList.add("fork");
      container.appendChild(fork);
      fork.style.width = "25%";
    }

    if (name === "fruit") {
      let fruit = document.createElement('img');
      fruit.src = imageUrl;
      fruit.classList.add("fruit");
      container.appendChild(fruit);
      fruit.style.width = "25%";
    }

    if (name === "syrup") {
      let syrup = document.createElement('img');
      syrup.src = imageUrl;
      syrup.classList.add("syrup");
      container.appendChild(syrup);
      syrup.style.width = "15%";
    }

    if (name === "coffee") {
      let coffee = document.createElement('img');
      coffee.src = imageUrl;
      coffee.classList.add("coffee");
      container.appendChild(coffee);
      coffee.style.width = "30%";
    }

    if (name === "cream") {
      let cream = document.createElement('img');
      cream.src = imageUrl;
      cream.classList.add("cream");
      container.appendChild(cream);
      cream.style.width = "15%";
    }

    if (name === "tablecloth") {
      let tablecloth = document.createElement('img');
      tablecloth.src = imageUrl;
      tablecloth.classList.add("tablecloth");
      container.appendChild(tablecloth);
    }

    
  })
}

if (item.fields.type === "food") {
  allFoodItems.push(item);
}

let showFoodButton = document.getElementById("show-food");
showFoodButton.addEventListener('click', showAllTheFood);

function showAllTheFood() {
  allFoodItems.forEach(function(foodItem) {
    let food = document.createElement('img');
    food.src = foodItem.fields.images[0].url;
    food.classList.add(foodItem.fields.class_name);
    food.style.display = "block";
    container.appendChild(food);
  })
}