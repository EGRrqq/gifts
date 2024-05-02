DELIMITER //
CREATE TRIGGER card_numbers_check BEFORE INSERT ON sales
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.card_numbers) > 5000 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Card numbers should not exceed 5000 characters';
    ELSEIF NEW.card_numbers NOT REGEXP '^[0-9,]+$' THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Card numbers should only contain numbers and commas';
    END IF;
END;//
DELIMITER ;
