DROP DATABASE IF EXISTS pokegen_db;
CREATE DATABASE pokegen_db;
USE pokegen_db;

CREATE TABLE users (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(20) NOT NULL,
    password VARCHAR(30) NOT NULL
);

-- plural for pokemon is still pokemon
CREATE TABLE pokemon (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    pokemon_name VARCHAR(20) NOT NULL,
    pokemon_type VARCHAR(8) NOT NULL,
    pokemon_type2 VARCHAR(8) NOT NULL,
    ability1 VARCHAR(15),
    ability2 VARCHAR(15),
    ability3 VARCHAR(15),
    user_id INTEGER NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


CREATE TABLE moves (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    move_name VARCHAR(25) NOT NULL,
    move_power INTEGER NOT NULL,
    move_desc VARCHAR(200) NOT NULL,
    -- PP means number of times a move can be used
    move_PP INTEGER DEFAULT 15,
    pokemon_id INTEGER NOT NULL,
    CONSTRAINT fk_pokemon FOREIGN KEY (pokemon_id) REFERENCES pokemon(id) ON DELETE CASCADE
);