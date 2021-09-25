CREATE DATABASE mh_db;

use mh_db;

CREATE TABLE board (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL
);