#!/usr/bin/en bash
rm -f sqlite-sakila-{schema,insert-data,drop-objects,delete-data}.sql
wget https://raw.githubusercontent.com/jOOQ/sakila/main/sqlite-sakila-db/sqlite-sakila-{schema,insert-data,drop-objects,delete-data}.sql
rm -f sakila.db
cat sqlite-sakila-schema.sql | sqlite3 sakila.db
cat sqlite-sakila-insert-data.sql | sqlite3 sakila.db 