/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

-- DROP db if already exists
DROP DATABASE IF EXISTS movies_db;

-- CREATE the db
CREATE DATABASE movies_db;

-- USE db
USE movies_db;

-- CREATE table(S)
CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  quantity INT(3) NOT NULL
);

-- seed some data


-- INSERT INTO movies (name, quantity)
-- VALUES  ('Frozen Blueberries', 2),
--         ('Frozen Mango', 32),
--         ('Frozen Spinach', 25),
--         ('Pizza', 3),
--         ('Bananas', 3)

