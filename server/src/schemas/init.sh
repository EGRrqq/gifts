#!/bin/bash

sql_files=(
    "sales_app.sql"
    "remove_tables.sql"
    "giftCards.sql"
    "check_expiration_date_c.sql"
    "check_expiration_date_u.sql"
    "insertGiftCards.sql"
    "sales.sql"
    "check_card_numbers_c.sql"
    "check_claim_value_c.sql"
    "check_description_c.sql"
    "check_quantity_value_c.sql"
    "check_card_numbers_u.sql"
    "check_claim_value_u.sql"
    "check_description_u.sql"
    "check_quantity_value_u.sql"
)

# Create a temporary file
temp_file=$(mktemp)

# Find each SQL file by name recursively and concatenate them into the temporary file
for sql_file in "${sql_files[@]}"
do
    find . -name "$sql_file" -print0 | while IFS= read -r -d '' path; do
        cat "$path" >> "$temp_file"
        echo -e "\n" >> "$temp_file"
    done
done

# Pipe the temporary file into MySQL
cat "$temp_file" | mysql -u root -p

# Remove the temporary file
rm "$temp_file"
