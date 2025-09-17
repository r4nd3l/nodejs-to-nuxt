FROM node:20-alpine AS build
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable && pnpm i --frozen-lockfile; \
  else yarn install; fi

# copy source and build
COPY . .
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  else yarn build; fi

FROM node:20-alpine AS run
WORKDIR /app
ENV NODE_ENV=production

# nitro output only
COPY --from=build /app/.output ./.output

EXPOSE 3000
# runtime envs come from docker-compose
CMD ["node", ".output/server/index.mjs"]
