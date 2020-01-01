#!/bin/bash

CURRENT_DIR="${PWD}";
IMG_BASE_DIR="$CURRENT_DIR/img/events";
IMG_THUMB_DIR="$IMG_BASE_DIR/thumbs"
IMG_CONVERT_DIR="$CURRENT_DIR/img/events/to_convert";

cd $IMG_CONVERT_DIR;

echo "Number of /dev/night? (e.g. 003) "
read DevNightNo

echo "Normalize extension names..."
find . -name '*.*' -exec sh -c ' a=$(echo "$0" | sed -r "s/([^.]*)\$/\L\1/"); [ "$a" != "$0" ] && mv "$0" "$a" ' {} \;

echo "Renaming files..."
for file in *.jpg
do
    mv "$file" "$(echo $DevNightNo)_$file"
done

echo "Optimizing images..."
mogrify -strip -interlace Plane -gaussian-blur 0.05 -filter Lanczos -resize 1920 -quality 85% -path $IMG_BASE_DIR *.jpg;

echo "Creating thumbnails..."
mogrify -strip -interlace Plane -filter Lanczos -resize 300 -quality 85% -path $IMG_THUMB_DIR *.jpg;

# Delete all files?
read -p "Delete converted files? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    rm $IMG_CONVERT_DIR/*.jpg
    echo "Files deleted."
fi

echo "Conversion successful."

cd $CURRENT_DIR;
