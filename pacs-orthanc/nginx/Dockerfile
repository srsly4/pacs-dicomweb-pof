FROM nginx:1.17-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY ./ssl/private/* /etc/ssl/private/
COPY ./ssl/certs/* /etc/ssl/certs/
COPY ./snippets/* /etc/nginx/snippets/
COPY .htpasswd* /etc/nginx/conf/