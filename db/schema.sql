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
  movie_id INT,
  title VARCHAR(100),
  rating DECIMAL(4,2),
  vote_count INT,
  poster_path VARCHAR(50),
  imdb_Rating DECIMAL(4,2),
  duration INT,
  release_date VARCHAR(20),
  description VARCHAR(1000),
  genres VARCHAR(50),
  director VARCHAR(50),
  starring VARCHAR(50)
  -- UNIQUE KEY (movie_id)
);


