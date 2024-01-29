#!/bin/env bash
docker image ls | grep botplayer | awk {'print $1'} | xargs -r docker image rm -f