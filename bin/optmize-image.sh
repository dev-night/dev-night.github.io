#!/bin/bash

CURRENT_DIR="${PWD}";
IMG_DIR="$CURRENT_DIR/img/events";

cd $IMG_DIR;

echo "normalize extension names..."
find . -name '*.*' -exec sh -c ' a=$(echo "$0" | sed -r "s/([^.]*)\$/\L\1/"); [ "$a" != "$0" ] && mv "$0" "$a" ' {} \;

echo "Optimizing images..."
mogrify -strip -interlace Plane -gaussian-blur 0.05 -filter Lanczos -resize 1920 -quality 85% *.jpg;

echo "Creating thumbnails..."
mogrify -debug "Transform" -strip -interlace Plane -filter Lanczos -resize 300 -quality 85%  -log "%u %m:%l %e" -path thumbs *.jpg;

cd $CURRENT_DIR;
