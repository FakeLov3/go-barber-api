-   API
-   yarn init -y (start package.json)
-   yarn add express
-   yarn add sucrase nodemon(nodemon detecta alterações para reiniciar o servidor) -D

*   Docker:

*   docker run container:
*   docker start database
*   docker run --name database -e POSTGRES:PASSWORD=docker -p 5433:5432 -d postgres
*   docker stop database
*   docker ps -a --> all of containers

*   MongoDB(BANCO DE DADOS Ñ RELACIONAL):

*   docker run --name mongobarber -p 27017:27017 -d -t mongo
*   yarn add mongoose

*   Sequelize(ORM BANCO DE DADOS RELACIONAL):

*   yarn sequelize migration:create --name=create-users
*   yarn sequelize db:migrate
*   yarn sequelize db:migrate:undo --> remove migrate of database
*   yarn add sequelize-cli -D
*   yarn add pg pg-hstore
*   yarn add sequelize

*   Criptografar Hash:

-   yarn add bcryptjs

*   Datas

-   yarn add date-fns@next

*   Autenticação:

-   yarn add jsonwebtoken
-   bcrypt

*   Validações:

-   yarn add yup

*   Emails:

-   yarn add nodemailer
-   Mailtrap (ambiente de desenvolvimento apenas)
