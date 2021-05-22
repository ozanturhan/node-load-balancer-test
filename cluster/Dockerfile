FROM node

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY index.js ./
COPY worker.js ./
ADD data ./data
EXPOSE 8080
CMD [ "node", "/usr/src/app/index" ]