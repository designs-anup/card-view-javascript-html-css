const petsData = [
  {
    name: "adult rhinosaurus",
	creator: "Keith Markilie",
    species: "Animal",
	location: "White Rhinos in the South African veld",
    favFoods: ["grass", "leafs"],
    birthYear: 2016,
	photo: "images/adult%20rhinosaurus.jpg"
  },
  {
    name: "brown and black tiger",
	creator: "Kar Ming Moo",
	location: "Singapore Zoo",
    species: "Animal",
	description: "brown and black tiger lying on ground",
    birthYear: 2008,
    photo: "images/brown%20and%20black%20tiger.jpg"
  },
  {
    name: "brown fox on snow field",
	creator: "Wildlife in Winter",
	location: "Lanoka Harbor, Berkeley Township, New Jersey, United States",
    species: "Animal",
    birthYear: 2018,
    photo: "images/brown%20fox.jpg"
  },
  {
    name: "photo of flamingo on water",
	creator: "Alejandro Contreras",
	location: "San Crisanto Mangrove Cenote Boat Tour, Sinanché, Mexico",
    species: "Bird",
	description: "In the middle of nowhere in the northern part of the Yucatan peninsula, in a narrow gravel road with water on both sides, suddenly we saw a patch of flamingos eating and sun bathing. The temperature was really high, the sun in it’s zenith and the mosquitos were ferocius, but the magic of seeing these birds in the wild made us stop for more tha an hour to contemplate them. What a great experience watching them eat, fly, even fight with us being so near to them.",
    birthYear: 2020,
    photo: "images/flamingo.jpg"
  },
  {
    name: "orange parrot",
	creator: "Kevin Mueller",
	location: "Saarbrucken, Germany",
    species: "Bird",
	favFoods: ["insects", "guava", "berries"],
    birthYear: 2023	,
    photo: "images/orange%20parrot.jpg"
  }
];

// debugger;

let petList = petsData.length;

let card = "";
let currentYear = new Date();

// debugger;

for(i=0; i < petList; i++){
	card += "<div class=\"card\">";
	card += "<img class=\"card-photo\" src=" + petsData[i].photo + " />";
	card += "<div class=\"card-info\">";
	card += "<h2>" + petsData[i].name + "<span class=\"species\"> ("+ petsData[i].species +")</span>"+"</h2>";
	card += "<div class=\"author\">" + petsData[i].creator +"</div>";
	card += petsData[i].location ? ("<div class=\"author-location\">" + petsData[i].location +"</div>") : "";
	card += petsData[i].description ? ("<div class=\"author-description\">" + petsData[i].description +"</div>") : "";
	card += "<p><strong>Age:</strong> ";
	card += currentYear.getFullYear() - petsData[i].birthYear;
	card += " years old</p>";
//	card += petsData[i].favFoods ? ("<h4>Favorite Foods</h4>" + petsData[i].favFoods) : "";
	card += "<div>"+ favFood(petsData[i].favFoods) +"</div>";
	card += "</div>"
	card += "</div>"
}

function favFood(food){
//	debugger;
	
	let a = "";
	
	if(food === undefined){
		a += "no fav food found";
	}else{
		a += "<h4>Favorite Foods</h4>" + food;
	}
	
	return a;
}

document.getElementById('app').innerHTML = card;
