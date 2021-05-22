FROM node

RUN apt-get -y update
RUN apt-get -y install iptables


WORKDIR /usr/src/app

COPY config/iptables.conf ./
COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY index.js ./
COPY worker.js ./
ADD data ./data
ADD start.sh /
RUN chmod +x /start.sh

CMD ["/start.sh"]