#!/bin/sh

mysql -u root --password="$MYSQL_ROOT_PASSWORD"  << EOF
GRANT ALL PRIVILEGES ON  *.* TO '${MYSQL_USER}'@'${MYSQL_HOST}';
EOF
