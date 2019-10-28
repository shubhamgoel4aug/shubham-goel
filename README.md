# Docker Support
- Use the following command to build the docker image
    docker build -f DockerFile -t shubham-goel:dev dist
- Use the following command to start the container. The website will hosted on http://localhost:8080/
    docker run --name shubham-goel -d -p 8080:80 shubham-goel:dev
