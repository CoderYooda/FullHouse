FROM node:22.12.0-alpine AS node-base

WORKDIR /application

FROM node-base AS front-builder

COPY src/package.json src/package-lock.json ./
RUN NODE_ENV=production npm ci
# Copy only required files for webpack
COPY src/resources/ ./resources/
COPY src/public/ ./public/
COPY src/webpack.*.js ./

ARG FRONT_BUILD_MODE
RUN touch artisan \
    && npm run $FRONT_BUILD_MODE

FROM nginx:1.28-alpine AS nginx-base

WORKDIR /application

ENV NGINX_CLIENT_MAX_BODY_SIZE=128m \
    NGINX_ENVSUBST_OUTPUT_DIR=/etc/nginx \
    NGINX_REALIP="# Placeholder for realip options" \
    NGINX_RESOLVER="# Placeholder for resolver options" \
    LISTEN_HTTPS_PORT=443 \
    LISTEN_HTTP_PORT=80 \
    # PHP Swoole
    ADMIN_HOST=php-backend \
    ADMIN_PORT=8020 \
    # Hosts
    VIRTUAL_HOST=main.holdem.localhost

COPY docker/nginx/default.conf /etc/nginx/templates/conf.d/default.conf

FROM nginx-base AS nginx

COPY --from=front-builder --chown=www-data:www-data /application/public/ public/