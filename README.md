# Introduction

This repository contains an Angular 8 web application. The application is all about my professional Resume. Please feel free tp fork it and convert it to your own Resume.

# Building the application

## Pre-requisites

- NPM
- Git
- Angular CLI 8.3.6

## Build

- Perform:

  		npm install
  	 	ng build --prod

- To serve on localhost (http://localhost:4200/) :

		ng serve

# Docker Support

- Use the following command to build the docker image

		docker build -f DockerFile -t shubham-goel:dev dist

- Use the following command to start the container. The website will hosted on http://localhost:8080/

		docker run --name shubham-goel -d -p 8080:80 shubham-goel:dev
