# web-app

# How to run this app

### Note: Remember to fill the server/src/config/database.js with databse information

* Clone the repo
* cd server
* run *yarn install* to install the back-end dependencies
* run *yarn sequelize db:migrate* to create the database
* run *yarn dev* or *node src/server.js* to run the back-end
* cd public/app
* run *npm install* to install the front-end dependencies
* run *ng serve -o* to run the front-end

# How to access the deployed application on AWS

* Front-end is deployed on a S3 instance: http://devices-and-categories-app.s3-website.us-east-2.amazonaws.com
* Back-end is deployed on a EC2 instance: http://52.15.144.207:8888/devices or http://52.15.144.207:8888/categories
* The database is deployed on a RDS instance.

### Note: Make sure to reload the *devices* and *categories* pages after you create a new one.
