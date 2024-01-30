CREATE DATABASE USERS;
USE USERS;

CREATE TABLE user(
   id int not null,
   username varchar(100) not null,
   email varchar(100) not null,
   password varchar(100) not null,
   PRIMARY KEY(ID)
);

insert into user(Id,username,email,password)
values(0 , "itay" , "i@walla.com " , "pass");