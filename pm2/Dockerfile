FROM node

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY index.js ./
COPY ecosystem.config.js ./
ADD data ./data

CMD [ "yarn", "start" ]