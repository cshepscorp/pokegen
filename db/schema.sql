DROP DATABASE IF EXISTS pokegen_db;
CREATE DATABASE pokegen_db;
USE pokegen_db;

CREATE TABLE users (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(100) NOT NULL
);

-- plural for pokemon is still pokemon
CREATE TABLE pokemon (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    type VARCHAR(8) NOT NULL,
    type2 VARCHAR(8),
    move1 VARCHAR(25),
    move2 VARCHAR(25),
    move3 VARCHAR(25),
    move4 VARCHAR(25),
    ability1 VARCHAR(25),
    ability2 VARCHAR(25),
    ability3 VARCHAR(25),
    user_id INTEGER NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO users (username, password)
VALUES
("Ash Ketchum", "password"),
("Goro Akechi", "password");

INSERT INTO pokemon (name, type, type2, move1, move2, move3, move4, ability1, ability2, ability3, user_id)
VALUES
("Pikachu", "Electric", null,
 "Thundershock", "Tail Whip", "Volt Tackle", null,
 "Static", null,  "Lightningrod",
  1),
("Squirtle", "Water", null,
 "Bubble", "Tackle", "Withdraw", "Bubblebeam",
 "Torrent", null,  "Rain Dish",
  1),
("Robin Hood", "Fighting", "Dark",
 "Kougaon", "Eigaon", "Megaton Raid", "Mamudoon",
 "Tactical Mind", "Attack Master",  "Emboldened Spirit",
  2);




-- CREATE TABLE moves (
--     id INTEGER AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(25) NOT NULL,
--     power INTEGER NOT NULL,
--     description VARCHAR(200) NOT NULL,
--     -- Power Points means number of times a move can be used
--     power_points INTEGER DEFAULT 15,
--     pokemon_id INTEGER NOT NULL,
--     CONSTRAINT fk_pokemon FOREIGN KEY (pokemon_id) REFERENCES pokemon(id) ON DELETE CASCADE
-- );