FROM node

RUN apt-get -y update
RUN apt-get -y install nginx

COPY config/default.conf /etc/nginx/conf.d/default.conf
COPY config/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY index.js ./
COPY worker.js ./
ADD data ./data
ADD start.sh /
RUN chmod +x /start.sh

CMD ["/start.sh"]