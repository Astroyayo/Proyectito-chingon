CREATE DATABASE ng_Control;

USE ng_Control;

CREATE OR REPLACE TABLE users
(
    id INT
(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR
(50),
    surname VARCHAR
(50),
    secondSurname VARCHAR
(50),
    telephone VARCHAR
(50),
    email VARCHAR
(50),
    password VARCHAR
(20),
    userType INT
(1),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE OR REPLACE TABLE userTypes
(
    id INT
(1),
    name VARCHAR
(15)
);

CREATE OR REPLACE TABLE debts
(
    id INT
(5),
    concept VARCHAR
(50),
    amount DECIMAL
(10,2)
);

CREATE OR REPLACE TABLE debtDetails
(
    id INT
(5),
    id_debt INT
(5),
    debtor INT
(5)

);

CREATE OR REPLACE TABLE payments
(
    id INT
(5),
    id_debt INT
(5),
    id_user INT
(5),
    amount INT
(5),
    paymentDate DATE
);

CREATE USER '1234554321'@'%' IDENTIFIED BY 'qweRty789';
GRANT USAGE ON *.* TO '1234554321'@'%';
GRANT SELECT, DELETE, INSERT, UPDATE  ON 'ng_Control'.* TO '1234554321'@'%';
FLUSH PRIVILEGES;
SHOW GRANTS FOR '1234554321'@'%';