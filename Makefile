init:
	docker-compose rm -fsv app
	docker-compose up -d app --build
	cd ./src && npm i

up:
	docker-compose up -d app

down:
	docker compose stop app

restart:
	docker compose restart app