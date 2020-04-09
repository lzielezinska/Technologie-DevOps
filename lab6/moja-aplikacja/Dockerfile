FROM node:alpine as builder
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
CMD ["yarn", "build"]

# FROM nginx:alpine
# COPY --from=builder /app/build /usr/share/nginx/html