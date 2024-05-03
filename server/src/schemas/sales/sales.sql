CREATE TABLE sales (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  number_of_gifts INT NOT NULL,
  gift_card_id INT NOT NULL,
  day_to_claim_gift INT NOT NULL,
  description TEXT,
  card_numbers TEXT,
  FOREIGN KEY (gift_card_id) REFERENCES gift_cards(id)
);
