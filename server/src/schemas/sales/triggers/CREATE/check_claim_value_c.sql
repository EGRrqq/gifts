DELIMITER //
CREATE TRIGGER check_claim_value_c
BEFORE INSERT ON sales
FOR EACH ROW
BEGIN
  DECLARE exp_date DATE;
  SELECT expiration_date INTO exp_date FROM gift_cards WHERE id = NEW.gift_card_id;
  IF NEW.day_to_claim_gift <= 0 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'day_to_claim_gift must be greater than zero.';
  ELSEIF DATEDIFF(exp_date, CURDATE()) - NEW.day_to_claim_gift - 2 < 0 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'day_to_claim_gift must be at least two days before the expiration_date.';
  END IF;
END//
DELIMITER ;
