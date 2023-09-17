FROM node:14

WORKDIR /usr/src/app

COPY . .
ENV API_KEY=123
RUN npm install
RUN npm run build

CMD ["npm", "start"]

EXPOSE 3000
