FROM node:18-alpine

WORKDIR /app
COPY app/ .

RUN npm install

ENV PORT=3011 

EXPOSE ${PORT}
CMD ["npm", "start"]
