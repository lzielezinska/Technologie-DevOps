## lab8  Docker-project
Przykładowe zmienne środowiskowe:
```
export REDIS_HOST=redis-server REDIS_PORT=6379 PG_USER=postgres PG_HOST=postgres-server PG_DATABASE=postgres PG_PASSWORD=123abc123 PG_PORT=5432
```

## lab7
Node.js + redis + postgress

Uruchomienie redisa:
```
docker run -p 6379:6379 redis
```

Uruchomienie postgresa:
```
docker run -e POSTGRES_PASSWORD=123abc123 -p 5432:5432 postgres
```

## lab6
### travis:

[![Build Status](https://travis-ci.com/lzielezinska/Technologie-DevOps.svg?branch=master)](https://travis-ci.com/lzielezinska/Technologie-DevOps)

## lab5
### auto-refresh:

```
docker run -it -v /opt/app/node_modules -v ${PWD}:/opt/app -p 3000:3000 mydockerfrontend_web:latest
```
## lab4
### Przesłanie danych do obliczeń:
```
curl -X POST --header 'Content-Type:application/json' --header 'Accept:text/html' -d "{\"number1\":50, \"number2\":5}" http://localhost:8081/send
                                                                                  
```
### Wyświetlenie wyniku:
``` 
curl http://localhost:8081/take

```
