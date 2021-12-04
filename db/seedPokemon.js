// import the db connection and the model you're seeding up here
const sequelize = require("../config/connection");
const { Pokemon, User } = require("../models");

// create an array of rows that you want to seed the model with
const userData = [
    {
      username: "Ash Ketchum",
      password: "password"
    },
    {
      username: "Goro Akechi",
      password: "password"
    },
  ];

// create an array of rows that you want to seed the model with
const pokemonData = [
    {
      name: "Pikachu",
      type: "Electric",
      type2: null,
      move1: "Thundershock",
      move2: "Tail Whip",
      move3: "Volt Tackle",
      move4: null,
      ability1: "Static",
      ability2: null,
      ability3: "Lightningrod",
      user_id: 1,
    },
    {
      name: "Squirtle",
      type: "Water",
      type2: null,
      move1: "Bubble",
      move2: "Tackle",
      move3: "WIthdraw",
      move4: "Bubblebeam",
      ability1: "Torrent",
      ability2: null,
      ability3: "Rain Dish",
      user_id: 1,
    },
    {
      name: "Robin Hood",
      type: "Fighting",
      type2: "Dark",
      move1: "Kougaon",
      move2: "Eigaon",
      move3: "Megaton Raid",
      move4: "Mamudoon",
      ability1: "Tactical Mind",
      abilit2: "Attack Master",
      ability3: "Emboldened Spirit",
      user_id: 2,
    },
  ];
  
// create an asynchronous seeding script
const seedUsers = () => {
    console.log("Seeding User data now...");
    console.log("\n=================\n");
    User.bulkCreate(userData);
    return;
};

// create seeding script
const seedPokemon = () => {
    console.log("Seeding Pokemon data now...");
    console.log("\n=================\n");
    Pokemon.bulkCreate(pokemonData);
    return;
};
  
// call the seeding script to seed the table
seedUsers();

// call the seeding script to seed the table
seedPokemon();