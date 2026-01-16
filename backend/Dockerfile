FROM node:20
WORKDIR /app
# Копіюємо файли з ПОВТОЧНОЇ папки (яка буде вказана в context)
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "run", "start"]