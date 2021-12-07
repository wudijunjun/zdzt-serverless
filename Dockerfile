FROM node

RUN mkdir -p /home/dockerfile/zdzt-serverless

WORKDIR /home/dockerfile/zdzt-serverless

COPY package.json /home/dockerfile/zdzt-serverless/package.json

RUN npm i --registry=https://registry.npm.taobao.org

COPY . /home/dockerfile/zdzt-serverless/

EXPOSE 7001

CMD npm run dev