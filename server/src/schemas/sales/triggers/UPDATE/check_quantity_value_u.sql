DELIMITER //
CREATE TRIGGER check_quantity_value_u
BEFORE UPDATE ON sales
FOR EACH ROW
BEGIN
  DECLARE quantity_of_gifts INT;
  SELECT remaining_quantity INTO quantity_of_gifts FROM gift_cards WHERE id = NEW.gift_card_id;
  IF NEW.number_of_gifts <= 0 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'number_of_gifts must be greater than zero.';
  ELSEIF NEW.number_of_gifts > quantity_of_gifts THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'number of_gifts must be less than or equal to the number of_gifts.';
  END IF;
END//
DELIMITER ;
