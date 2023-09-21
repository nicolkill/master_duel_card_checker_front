RUN_STANDARD := docker run --rm -v `pwd`:/app -w /app hexpm/elixir:1.13.4-erlang-25.0-rc3-alpine-3.15.3

all: build image

up:
	docker compose up
