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
    // let imageUrl = item.fields.images[0].url;

    // if (name === "Cup") {
    //   for (var i=0; i<3; i++) {
    //     let cup = document.createElement('img');
    //     cup.src = imageUrl;
    //     cup.classList.add("cup");
    //     if (i === 0) {
    //       cup.style.left = "550px";
    //     }
    //     if (i === 1) {
    //       cup.style.left = "500px";
    //       cup.style.top = "150px";
    //     }
    //     if (i === 2) {
    //       cup.style.left = "60px";
    //       cup.style.top = "30px";
    //     }
    //     container.appendChild(cup);
    //   }
    // }
    // if (name === "Plate") {
    //   for (var i=0; i<3; i++) {
    //     let plate = document.createElement('img');
    //     plate.src = imageUrl;
    //     plate.classList.add("plate");
    //     if (i === 0) {
    //       plate.style.left = "650px";
    //     }
    //     if (i === 1) {
    //       plate.style.left = "400px";
    //       plate.style.top = "250px";
    //     }
    //     if (i === 2) {
    //       plate.style.left = "40px";
    //       plate.style.top = "120px";
    //     }
    //     container.appendChild(plate);
    //   }
    // }
    // if (name === "Tablecloth") {
    //   let tablecloth = document.createElement('img');
    //   tablecloth.src = imageUrl;
    //   tablecloth.classList.add("tablecloth");
    //   container.appendChild(tablecloth);
    // }
  })
}