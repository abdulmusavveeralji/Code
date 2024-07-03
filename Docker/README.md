## Docker Pull
```bash
docker pull ubuntu:latest
```

## List Docker Image
```bash
docker images
```

## Build Dockerfile
```bash
docker build -t <image-name> .
```

## List all docker containers
```bash
docker ps -a
```

## Create a new docker container
```bash
docker run -d -p 8080:8080 --name <docker-alias> -e <ENV-VARIABLE>=<DATA> <image-name>
```

## Print Logs
```bash
docker logs <containerId>
```

## Run terminal inside a container
```bash
docker exec -it <containerId> /bin/bash
```

## Start container
```bash
docker start <containerId>
```

## Stop container
```bash
docker Stop <containerId>
```

# Create Docker Network

## List Available networks
```bash
docker network ls
```

## Create new docker network
```bash
docker create network <networkName>
```

# Docker compose file Example
```yml
version: '3'
services:
  # Container Name and its configuration
  api-service:
    image: alji
    ports:
      -8080:8080

  auth-service:
    image: auth
    ports:
      -8081:8081
    environment:
      - KC_USER_NAME=admin
```

## Run Docker Composer file
```bash
docker-compose -f docker-composer.yml up
```

## Stop Docker Composer file
```bash
docker-compose -f docker-composer.yml down
```