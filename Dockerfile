
FROM node:24-alpine
RUN apk update
RUN apk upgrade
WORKDIR /app
# Resolve o host manualmente
RUN echo "172.20.0.5 api-escola" >> /etc/hosts
# Instala dependências globais úteis para desenvolvimento
# RUN npm install -g @vue/cli @vue/cli-service

# Copia os arquivos de configuração do projeto
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todo o código fonte (excluindo node_modules via .dockerignore)
COPY . .

# RUN npm run build

# Expõe a porta padrão do Vue CLI
EXPOSE 8080

# Comando para iniciar o servidor de desenvolvimento
# CMD ["npm", "run", "serve"]

# Production stage
# FROM nginx:stable-alpine
# COPY --from=build-stage /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]