# Docker Monitoring Tool

Author: Cathal Tracey

Instructions
1 - Ensure Docker is installed on your machine


2 - Open Docker Machine and run sudo docker -d -H unix:///var/run/docker.sock -H 0.0.0.0:4243 &. 

   (This will open a port at 4243 so the application can communicate with Docker)
                                                                                                
3 - npm install

4 - bower install

5 - type 'node server' into terminal

6 - Navigate to localhost:3000

7 - That's it.

Commands to delete all images and containers (Using Docker Terminal)
# Delete all containers
docker rm $(docker ps -a -q)
# Delete all images
docker rmi $(docker images -q)