FROM node
WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY index.js ./
ADD data ./data
ADD start.sh /
RUN chmod +x /start.sh

CMD ["/start.sh"]