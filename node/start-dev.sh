#!/bin/bash

docker run -d -p 3000:3333 --name=node-dev -v $(pwd)/src:/usr/src/app/src noebezerra/node