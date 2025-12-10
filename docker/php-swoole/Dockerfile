FROM php:8.4-cli-bullseye

ENV COMPOSER_HOME=/var/composer
ENV COMPOSER_VERSION=2.8.9

ENV REDIS_VERSION=6.2.0
ENV RDKAFKA_VERSION=6.0.5
ENV SWOOLE_VERSION=6.0.2
ENV APCU_VERSION=5.1.26
ENV EXCIMER_VERSION=1.2.5


ARG BUILD_DEPS="\
    cmake \
    libfreetype6-dev \
    libjpeg-dev \
    libmcrypt-dev \
    libpng-dev \
    libpq-dev \
    librdkafka-dev \
    libwebp-dev \
    libxml2-dev \
    libzip-dev \
    libgmp3-dev \
    libssl-dev \
    libcurl4-openssl-dev \
"

ARG RUNTIME_DEPS="\
    libfreetype6 \
    libjpeg62-turbo \
    libpng16-16 \
    libpq5 \
    librdkafka1 \
    unzip \
    bind9-host \
"

RUN apt-get update -qq \
    && apt-get install -qqy --no-install-recommends \
        $BUILD_DEPS \
        $RUNTIME_DEPS \
    && docker-php-ext-install \
        bcmath \
        gmp \
        intl \
        opcache \
        pcntl \
        pdo \
        pdo_mysql \
        pdo_pgsql \
        soap \
        sockets \
        zip \
        exif \
    && yes '' | pecl install --configureoptions 'enable-sockets="yes" enable-swoole-curl="yes" enable-swoole-pgsql="yes"' \
        redis-${REDIS_VERSION} \
        rdkafka-${RDKAFKA_VERSION} \
        apcu-${APCU_VERSION} \
        swoole-${SWOOLE_VERSION} \
        excimer-${EXCIMER_VERSION} \
    && docker-php-ext-enable \
        redis \
        rdkafka \
        apcu \
        swoole \
        excimer \
    && docker-php-ext-configure \
        gd \
        --with-freetype \
        --with-jpeg \
        --with-webp \
    && docker-php-ext-install \
        gd \
    && curl -fsSL https://getcomposer.org/installer | php -- \
        --filename=composer \
        --install-dir=/usr/local/bin \
        --version=$COMPOSER_VERSION \
        && cp -vf "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

ENV NODE_VERSION=24
RUN curl -fsSL "https://deb.nodesource.com/setup_$NODE_VERSION.x" | bash - && \
    apt-get install -y nodejs \
    build-essential

COPY src/composer.json src/composer.lock /application/

COPY --chown=www-data:www-data src /application

WORKDIR /application