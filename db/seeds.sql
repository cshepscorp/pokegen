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

-- -- INSERT INTO moves (name, power, description, power_points, pokemon_id)
-- -- VALUES
-- -- ("Thundershock", 40, "A weak bolt of electricity. 10% chance of paralysis.", 40, 1),
-- -- ("Tail Whip", 0, "The pokemon wags its tail cutely to lower its opponent's guard. Lowers defense.", 40, 1),
-- -- ("Bubble", 20, "Hardened bubbles are spat at the opponent. 10% chance of lowering speed.", 40, 2),
-- -- ("Eigaon", 100, "A wave of cursed fire rises from the ground.", 10, 3);