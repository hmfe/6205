FROM node:12.13.1-alpine3.10
WORKDIR /App
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "test", "--", "--coverage"]
CMD ["npm", "start"]