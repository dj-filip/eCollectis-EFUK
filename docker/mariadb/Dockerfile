FROM mariadb/server:10.3

COPY ./docker/mariadb/init_db.sh /docker-entrypoint-initdb.d/
COPY ./docker/mariadb/electususers.sql /docker-entrypoint-initdb.d/electususers.sql
COPY ./docker/mariadb/FUKTabele.sql /docker-entrypoint-initdb.d/FUKTabele.sql
RUN chmod +x /docker-entrypoint-initdb.d/init_db.sh

