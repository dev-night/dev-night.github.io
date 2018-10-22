#!make
include .env
export $(shell sed 's/=.*//' .env)

# Variables
NAME = "abiosoft/caddy"
ROOT_DIR = $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

all: run

run:
	set -x
	docker run \
		--env-file=$(ROOT_DIR)/.env \
		-v $(ROOT_DIR):/srv \
		-v $(ROOT_DIR)/Caddyfile:/etc/Caddyfile \
		-p $(PORT):$(PORT) \
		$(NAME):no-stats

.PHONY: all run
