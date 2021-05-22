FROM node

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY index.js ./
COPY worker.js ./
ADD data ./data

CMD [ "node", "/usr/src/app/index" ]