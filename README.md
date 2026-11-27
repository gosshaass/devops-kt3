# devops-kt3

Простое приложение на Node.js и Express.

## Запуск

```bash
npm ci
npm start
```

Сервер: http://localhost:3000

- GET / — строка KT3 App.
- GET /health — JSON {"status":"ok"}.

## Проверки

```bash
npm run lint
npm test
```

## Docker

```bash
docker build -t devops-kt3 .
docker run --rm -p 3000:3000 devops-kt3
```

## CI/CD

Ветки main и develop проверяются при push и pull request.
Сначала запускается lint, затем test с сервисом PostgreSQL 16.
Приложение не использует базу: контейнер и параметры подключения добавлены по заданию.
После успешных тестов при push в main образ публикуется в GHCR
с тегами latest и полным хэшем коммита.
