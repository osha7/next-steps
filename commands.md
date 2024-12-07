# Used Commands 

### React Version

npm view react version
18.3.1

### React Router installation (library)

npm i react-router

## ES LINT & PRETTIER
https://medium.com/@sindhujad6/setting-up-eslint-and-prettier-in-a-node-js-project-f2577ee2126f

### Eslint: 

npm install eslint --save-dev
npx eslint --init

### Prettier: 

npm install prettier --save-dev

### Postgres
<!-- postgreSQL shell -->
psql
<!-- create a new database -->
createdb <database-name> 
<!-- quit -->
\q
<!-- database connection info -->
\conninfo 

You are connected to database "your_database" as user "user_name" on host "host_name" at port "port_number" 
<!--  -->
SELECT CURRENT_USER usr, :'HOST' host, inet_server_port() port;
<!-- lists databases -->
\list
<!--  change database  -->
\connect < database-name > 
<!-- show the tables in the database -->
next_steps=# \dt+

                                     List of relations
 Schema |   Name   | Type  |   Owner    | Persistence | Access method | Size  | Description 
--------+----------+-------+------------+-------------+---------------+-------+-------------
 public | my_table | table | oshagroetz | permanent   | heap          | 16 kB | 
(1 row)

<!-- show all rows of data from my_table -->
SELECT * FROM my_table;

### dotenv
npm install dotenv
