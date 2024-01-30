FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root

COPY ./db_user.sql /docker-entrypoint-initdb.d/

EXPOSE 80

CMD [pip ,  install  , pymysql ]  