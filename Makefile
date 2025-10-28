# Makefile para levantar Mongo + backend
.PHONY: up down build run

up: build
	docker-compose up -d

down:
	docker-compose down

build:
	docker-compose build

run:
	docker-compose exec backend npm start
