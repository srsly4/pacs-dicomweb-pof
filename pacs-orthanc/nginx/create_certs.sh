#!/bin/bash

openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./ssl/private/nginx-selfsigned.key -out ./ssl/certs/nginx-selfsigned.crt
openssl dhparam -out ./ssl/certs/dhparam.pem 2048
