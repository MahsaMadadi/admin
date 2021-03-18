docker build -t cinciti-admin:$1 .

docker tag cinciti-admin:$1 registry.digitalocean.com/pookid/cinciti-admin:$1

docker push registry.digitalocean.com/pookid/cinciti-admin:$1

