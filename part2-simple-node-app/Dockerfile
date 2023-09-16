FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./
RUN npm install

COPY . .

RUN npm build

CMD ["npm", "start"]

EXPOSE 3000
