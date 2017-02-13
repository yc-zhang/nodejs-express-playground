#! /bin/bash
echo "start to build docker image"

docker build -t $app_name .
docker tag $app_name $app_name:latest
docker tag $app_name $app_name:$version

echo "the image has been built with version $version"
