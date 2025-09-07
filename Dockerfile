# Stage 1: build
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build:ssr:rohan

# Stage 2: production
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY --from=build /app/dist/rohan/browser ./dist/rohan/browser
COPY --from=build /app/dist/rohan/server ./dist/rohan/server

EXPOSE 4000

CMD ["npm", "run", "serve:ssr:rohan"]
