FROM node:14.17.5
WORKDIR /api

RUN node -v

RUN npm -v

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1012

CMD [ "npm", "run", "start" ]
