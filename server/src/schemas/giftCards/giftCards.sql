CREATE TABLE gift_cards (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  remaining_quantity INT NOT NULL,
  expiration_date DATE NOT NULL,
  denomination DECIMAL(10, 2) NOT NULL
);