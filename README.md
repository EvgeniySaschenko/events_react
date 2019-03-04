# Webpack React
* **npm i webpack-dev-server webpack nodemon pm2 -g** - устанока webpack глобально

**Корневой каталог (разработка)**
```
npm i - установка модулей
npm run server - запуск dev сервера (http://localhost:2000)
npm run build - сборка проэкта
```

**Каталог server-web (web sever - настроен на папку dist)**
```
npm i - установка модулей
nodemon - запуск web сервера (http://localhost:3000)
```

**Каталог server-data (сервер для получения данных)**
```
npm i - установка модулей
nodemon - запуск data сервера (http://localhost:4000)
```

**Запуск демонов для server-data и server-web**
```
pm2 start bin/www --name server-data
pm2 start bin/www --name server-web
```