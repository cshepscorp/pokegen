DROP DATABASE IF EXISTS pokegen_db;
CREATE DATABASE pokegen_db;
USE pokegen_db;

CREATE TABLE users (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(30) NOT NULL
);

-- plural for pokemon is still pokemon
CREATE TABLE pokemon (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    type VARCHAR(8) NOT NULL,
    type2 VARCHAR(8),
    ability1 VARCHAR(25),
    ability2 VARCHAR(25),
    ability3 VARCHAR(25),
    user_id INTEGER NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE moves (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    power INTEGER NOT NULL,
    description VARCHAR(200) NOT NULL,
    -- Power Points means number of times a move can be used
    power_points INTEGER DEFAULT 15,
    pokemon_id INTEGER NOT NULL,
    CONSTRAINT fk_pokemon FOREIGN KEY (pokemon_id) REFERENCES pokemon(id) ON DELETE CASCADE ON UPDATE CASCADE
);


-- Instead of MOVES table- we can simply, 7 types ONLY
CREATE TABLE types (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(8),
    CONSTRAINT fk_types FOREIGN KEY (pokemon_id) REFERENCES pokemon(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Instead of having abilities be embeded in POKEMON we can create a separate table so that users can select each one
CREATE TABLE abilities(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    ability1 STRING(20) NULL,
    ability2 STRING(20) NULL,
    ability3 STRING(20) NULL,
    CONSTRAINT fk_abilities FOREIGN KEY (pokemon_id) REFERENCES pokemon(id) ON DELETE CASCADE ON UPDATE CASCADE
);