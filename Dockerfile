FROM node:18-alpine

WORKDIR /app
COPY app/ .

RUN npm install

ENV PORT=3111 

EXPOSE ${PORT}
CMD ["npm", "start"]
