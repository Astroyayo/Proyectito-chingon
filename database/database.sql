CREATE DATABASE ng_Control;

USE ng_Control;

CREATE OR REPLACE TABLE users
(
    id INT
(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR
(50) NOT NULL,
    surname VARCHAR
(50) NOT NULL,
    secondSurname VARCHAR
(50),
    telephone VARCHAR
(50) NOT NULL,
    email VARCHAR
(50) NOT NULL,
    password VARCHAR
(20) NOT NULL,
    userType INT
(1),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE OR REPLACE TABLE userTypes
(
    id INT
(1) NOT NULL PRIMARY KEY,
    name VARCHAR
(15) NOT NULL
);

CREATE OR REPLACE TABLE debts
(
    id INT
(5) NOT NULL PRIMARY KEY,
    concept VARCHAR
(50) NOT NULL,
    amount DECIMAL
(10,2) NOT NULL,
    creationDate DATE NOT NULL
);

CREATE OR REPLACE TABLE debtDetails
(
    id INT
(5) NOT NULL PRIMARY KEY,
    id_debt INT
(5) NOT NULL,
    debtor INT
(5) NOT NULL
);

CREATE OR REPLACE TABLE payments
(
    id INT
(5) NOT NULL PRIMARY KEY,
    id_debt INT
(5) NOT NULL,
    id_user INT
(5) NOT NULL,
    amount INT
(5) NOT NULL,
    paymentDate DATE NOT NULL
    

);

ALTER TABLE users
add foreign key
(userType) references userTypes
(id);
ALTER TABLE payments
add foreign key
(id_debt) references debts
(id);
ALTER TABLE payments
add foreign key
(id_user) references users
(id);
ALTER TABLE debtDetails
add foreign key
(debtor) references users
(id);
ALTER TABLE debtDetails
add foreign key
(id_debt) references debts
(id);


CREATE USER '1234554321'@'%' IDENTIFIED BY 'qweRty789';
GRANT USAGE ON *.* TO '1234554321'@'%';
GRANT SELECT, DELETE, INSERT, UPDATE  ON 'ng_Control'.* TO '1234554321'@'%';
FLUSH PRIVILEGES;
SHOW GRANTS FOR '1234554321'@'%';