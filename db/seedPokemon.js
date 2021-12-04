// import the db connection and the model you're seeding up here
const sequelize = require('../config/connection');
const { Pokemon, User } = require('../models');
// create an array of rows that you want to seed the model with
const userData = [
    {
        username: 'Ash Ketchum',
        password: 'password',
        user_id: 1
    },
    {
        username: 'Goro Akechi',
        password: 'Gollum is a fictional monstrous character from J. R. R. Tolkiens Middle-earth legendarium. He was introduced in the 1937 fantasy novel The Hobbit, and became important in its sequel, The Lord of the Rings. Gollum was a Stoor Hobbit of the River-folk who lived near the Gladden Fields.',
        user_id: 2
    },
];

const pokemonData = [
    {
        name: 'Pikachu',
        type: 'electric',
        move1: 'thundershock',
        move2: 'Tail Whip',
        move3: 'Volt Tackle',
        ability1: 'Static',
        ability2: '',
        ability3: 'lightningrod',
        user_id: 1
    },
    {
        name: 'Squirtle',
        type: 'Water',
        move1: 'Bubble',
        move2: 'Tackel',
        move3: 'WIthdraw',
        move4: 'Bubblebeam',
        ability1: 'Torrent',
        abilit2: '',
        ability3: 'Rain Dish',
        user_id: 2
    },
    {
        name: 'Robin Hood',
        type: 'Fighting',
        type2: 'Dark',
        move1: 'Kougaon',
        move2: 'Eigaon',
        move3: 'Megaton Raid',
        move4: 'Mamudoon',
        ability1: 'Tactical Mind',
        abilit2: 'Attack Master',
        ability3: 'Emboldened Spirit',
        user_id: 3

    },
];
// create an asynchronous seeding script
const seedUsers = async () => {
    console.log('Seeding data now...');
    console.log('\n=================\n');
    try {
        // use await to handle the async sequelize method
        // call the bulk create method on the model you want to seed
        // pass in the array of objects you want to seed the table with
        await Post.bulkCreate(userData);
        // catch: handle any errors that might pop up
    } catch (err) {
        console.log(err);
        return;
    }
    console.log('\n=================\n');
    console.log('Seeding successful.');
};
// create an asynchronous seeding script
const seedPokemon = async () => {
    console.log('Seeding data now...');
    console.log('\n=================\n');
    try {
        // use await to handle the async sequelize method
        // call the bulk create method on the model you want to seed
        // pass in the array of objects you want to seed the table with
        await Post.bulkCreate(pokemonData);
        // catch: handle any errors that might pop up
    } catch (err) {
        console.log(err);
        return;
    }
    console.log('\n=================\n');
    console.log('Seeding successful.');
};
// call the seeding script to seed the table
seedPokemon();
// call the seeding script to seed the table
seedUsers();