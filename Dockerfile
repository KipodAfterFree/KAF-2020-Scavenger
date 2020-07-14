FROM php:7.3-apache

COPY src/flag.txt /flag.txt
COPY src/web /var/www/html

RUN useradd nopermissions
RUN useradd -g www-data permissions

RUN chown permissions:www-data /var/www/html -R

RUN chmod 755 /var/www/html -R
RUN chmod 777 /var/www/html/files/invoices -R
RUN chmod 777 /var/www/html/files/authenticate -R
