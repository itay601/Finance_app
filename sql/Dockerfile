FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root

COPY ./db_user.sql  ./docker-entrypoint-initdb.d/

RUN pip3 install pymysql

EXPOSE 3456

CMD ["mysqld"]