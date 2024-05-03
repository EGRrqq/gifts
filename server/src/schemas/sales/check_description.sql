DELIMITER //
CREATE TRIGGER check_description BEFORE INSERT ON sales
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.description) > 500 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Description length should not exceed 500 characters';
    END IF;
END;//
DELIMITER ;
