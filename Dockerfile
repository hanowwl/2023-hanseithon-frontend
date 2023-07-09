FROM node:18-alpine AS dependencies

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

#####################################

FROM node:18-alpine AS builder

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

RUN yarn build

#####################################

FROM node:18-alpine AS runner

WORKDIR  /app

COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone .
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

USER node

EXPOSE 3000
CMD ["node", "server.js"]