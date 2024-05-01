CREATE DATABASE sales_app;
USE sales_app;
CREATE TABLE gift_cards (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);
INSERT INTO gift_cards (title)
VALUES ("brand new title"),
  ("sweet title");