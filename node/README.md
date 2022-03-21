# Docker Node

## Building image

Go to the directory that has your Dockerfile and run the following command to build the Docker image.

```
$ docker build . -t <your username>/node-web-app
```

## List images

```
$ docker images
```

## Run the image

```
$ docker run -p 49160:8080 -d <your username>/node-web-app
```

## See logs

Get container ID

```
$ docker ps
```

Print app output.

```
$ docker logs <container id>
```

## Enter the container

```
$ docker exec -it <container id> /bin/bash
```

## Starting Typescript

```
$ yarn tsc --init
```

Set strict `false` in tsconfig.json.

## Convert code from typescript to javascript

```
$ yarn tsc
```

## Automatizing

Automatizing conversion code from typescript for a way that the node can understand.

```
$ ts-node-dev src/server.ts
```

or run

```
$ yarn dev
```
