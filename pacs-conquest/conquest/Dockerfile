FROM ubuntu:18.04

ARG ORTHANC_HOST
ARG ORTHANC_PORT

RUN apt-get -y update && apt-get install -y wget unzip libpq-dev make g++ apache2 p7zip-full sudo dos2unix

RUN wget https://ingenium.home.xs4all.nl/dicomserver/dicomserver1419d1.zip && \
    unzip dicomserver1419d1.zip -d conquest

WORKDIR ./conquest

RUN a2enmod cgi \
 && mkdir /usr/local/man/man1/ \
 && chmod 777 ./maklinux \
 && dos2unix ./maklinux \
 && echo "2" | bash ./maklinux

RUN printf "MY_ORTHANC\t${ORTHANC_HOST}\t${ORTHANC_PORT}\tun\n" >> acrnema.map

COPY ./ ./

EXPOSE 5678 80

CMD ["./entrypoint.sh"]





