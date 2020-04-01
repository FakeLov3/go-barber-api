- API
- yarn init -y (start package.json)
- yarn add express
- yarn add sucrase nodemon(nodemon detecta alterações para reiniciar o servidor) -D

* Docker:

* docker run container:
* docker start database
* docker run --name database -e POSTGRES:PASSWORD=docker -p 5433:5432 -d postgres
* docker stop database
* docker ps -a --> all of containers

* Sequelize(ORM BANCO DE DADOS NOSQL):

* yarn sequelize migration:create --name=create-users
* yarn sequelize db:migrate
* yarn sequelize db:migrate:undo --> remove migrate of database
* yarn add sequelize-cli -D
* yarn add pg pg-hstore
* yarn add sequelize

* Criptografar Hash:
- yarn add bcryptjs
