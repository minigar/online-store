# FROM node:16-alpine AS builder

# WORKDIR /app

# COPY package.json ./package.json
# COPY yarn.lock ./yarn.lock
# COPY tsconfig.build.json ./tsconfig.build.json
# COPY tsconfig.json ./tsconfig.json
# COPY prisma ./prisma/
# COPY .env ./.env

# RUN yarn

# COPY . .

# RUN npx prisma generate

# RUN yarn build

# FROM node:16-alpine

# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./
# COPY --from=builder /app/tsconfig.json ./
# COPY --from=builder /app/tsconfig.build.json ./
# COPY --from=builder /app/yarn.lock ./
# COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/prisma ./prisma

# EXPOSE 3001

# CMD [ "yarn", "start:migrate"]