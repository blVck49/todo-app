FROM node:14.17.5

WORKDIR /api

COPY package*.json ./

COPY . .

RUN npm install

RUN npm test

EXPOSE 1012

CMD [ "npm", "run", "start" ]
