# nginx-load-balancer


### Single Server

```
docker-compose -f docker-compose-single.yaml up --build
```

In another Window

```
ab -n 5000 -c 50 http://localhost:8085/
```

### Three Servers

```
docker-compose up --build
```

In another Window

```
ab -n 5000 -c 10 http://localhost:7070/
```