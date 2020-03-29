

### Przesłanie danych do obliczeń:
```
curl -X POST --header 'Content-Type:application/json' --header 'Accept:text/html' -d "{\"number1\":50, \"number2\":5}" http://localhost:8081/send
                                                                                  
```
### Wyświetlenie wyniku:
``` 
curl http://localhost:8081/take

```