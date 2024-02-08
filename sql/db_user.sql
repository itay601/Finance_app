CREATE DATABASE USERS;
USE USERS;

CREATE TABLE user(
   id int not null,
   username varchar(100) not null,
   email varchar(100) not null,
   password varchar(100) not null,
   PRIMARY KEY(ID)
);

CREATE TABLE  blog_posts(
    name TEXT(30)NOT NULL ,
    title TEXT(100) NOT NULL,
    content TEXT(1000) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

insert into user(id,username,email,password)
values(0 , 'itay' , 'i@walla.com' , 'pass');

insert into blog_posts(name,title,content)
values('itay' , 'blog is cool', 'thats why' );