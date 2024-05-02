DELIMITER //
CREATE TRIGGER check_expiration_date
BEFORE INSERT ON gift_cards
FOR EACH ROW
BEGIN
  IF NEW.expiration_date < CURDATE() THEN 
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Cannot insert a past date in expiration_date.';
  END IF;
END;//
DELIMITER ;