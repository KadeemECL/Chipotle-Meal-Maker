/*var type = ["burrito", "taco","salad",'bowl'];
var protein = ["steak", "chicken", "barbacoa", "carnitas"];
var rice = ["brown", "white"];
var beans = ["pinto", "black"];
var extra = ["guac", "salsa", "cheese", "lettuce", "sour cream"];

function makeIt() {
    var rand = type[Math.floor(Math.random() * type.length)];
    document.getElementById("first").innerHTML = rand;


    var rand1 = protein[Math.floor(Math.random() * protein.length)];
    var rand2 = rice[Math.floor(Math.random() * rice.length)];
    var rand3 = beans[Math.floor(Math.random() * beans.length)];
    var rand4 = extra[Math.floor(Math.random() * extra.length)];



    console.log(rand);
    console.log(rand1);
    console.log(rand2);
    console.log(rand3);
    console.log(rand4);
}

makeIt();

*/

var tests = [
  ["Burrito", "Taco","Salad","Bowl"],
  ["Steak", "Chicken", "Barbacoa", "Carnitas"],
  ["Brown Rice", "White Rice"],
  ["Pinto Beans", "Black Beans"],
  ["Mild Salsa", "Medium Salsa", "Hot Salsa"],
  ["Guacamole", "Cheese", "Lettuce", "Sour Cream"]
];

for(var i = 0; i < tests.length; i++){
    console.log(tests[i][Math.floor(Math.random() * tests[i].length)]);
    var answer = tests[i][Math.floor(Math.random() * tests[i].length)];

    document.write('<p class="answerStyle">' + answer + '</p>');


}
