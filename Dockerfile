FROM node
WORKDIR /app
ENV NODE_ENV=production
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
COPY package.json package.json
COPY src src
RUN yarn
ENTRYPOINT [ "yarn", "start" ]