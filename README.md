# NODE.JS LOAD BALANCER TEST

## Native Cluster
```
$ cd cluster
$ docker-compose build
$ docker-compose up
```

## Nginx
```
$ cd nginx
$ docker-compose build
$ docker-compose up
```

## Nginx Inside Node Image (fibonacci)
```
$ cd nginx-inside
$ docker-compose build
$ docker-compose up
```

## pm2
```
$ cd pm2
$ docker-compose build
$ docker-compose up
```

## Iptables
```
$ cd iptables
$ docker-compose build
$ docker-compose up
```

## Single Node (fibonacci)
```
$ cd single-node
$ docker-compose build
$ docker-compose up
```


## Autocannon Command
```
autocannon -c 100 -d 40 -p 10 http://localhost
```
