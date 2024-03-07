FROM php:8.1-fpm-alpine

RUN apk update && apk add --no-cache $PHPIZE_DEPS \
	libzip-dev zip; \
	docker-php-ext-install pdo pdo_mysql zip; \
    apk del $PHPIZE_DEPS;

RUN curl -sS https://getcomposer.org/installer​ | php -- \
     --install-dir=/usr/local/bin --filename=composer

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app

# COPY . .
RUN git clone 

RUN composer install

EXPOSE 8001