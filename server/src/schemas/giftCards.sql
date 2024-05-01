CREATE DATABASE sales_app;
USE sales_app;
CREATE TABLE gift_cards (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  remaining_quantity INT NOT NULL,
  expiration_date DATE NOT NULL,
  denomination DECIMAL(10, 2) NOT NULL
);
INSERT INTO gift_cards (
    name,
    remaining_quantity,
    expiration_date,
    denomination
  )
VALUES ('brandnewcard', 10, '1984-02-22', 50.00),
  ('newcard', 7, '1984-02-23', 75.00),
  ('sweetcard', 2, '1984-02-24', 100),
  ('smellscard', 1, '1984-02-25', 523),
  ('card', 9, '1984-02-26', 1);