# 13 Object-Relational Mapping (ORM): E-Commerce Back End

## Project Description 

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.

Your task is to build the back end for an e-commerce site by modifying starter code. You’ll configure a working Express.js API to use Sequelize to interact with a MySQL database.

## DEMO

https://drive.google.com/file/d/1I5zmNlyTxtBA-EFULdISdjMIpgvyosg7/view
https://drive.google.com/file/d/17Y-U5qvLWOHEZzQjox6L15wGtvxvZlR8/view
https://drive.google.com/file/d/1nE2MOS2XZCxBSq-gfIxxvXsMKwovPghX/view
https://drive.google.com/file/d/1T5TIvppKg9VpkJPa32yyd_KCva8Z4QKk/view
https://drive.google.com/file/d/113XO200ADXdijeoZXfHSIdSWssmgP4sH/view
https://drive.google.com/file/d/1sBBu7xWEBEoa2Mnd9rT9qsvTHJygHhPK/view
https://drive.google.com/file/d/1nUxanHbZTovZfOnMIqIVik5h1wWcxvkw/view

https://user-images.githubusercontent.com/91545451/164313428-77edf5f2-c35d-4d9f-a463-1cc794faee51.mp4


https://user-images.githubusercontent.com/91545451/164313446-7465e34c-aaf0-4818-9d11-40ffcff7238d.mp4


https://user-images.githubusercontent.com/91545451/164313457-21395d38-b87d-4cf6-b88b-75ac0b98f5b9.mp4


https://user-images.githubusercontent.com/91545451/164313471-ed0352e2-932a-4f86-90f1-5686496080f8.mp4


https://user-images.githubusercontent.com/91545451/164313463-5050c464-613f-4dd1-8547-5d53753be5f7.mp4



## Getting Started

You’ll need to use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect your Express.js API to a MySQL database and the [dotenv](https://www.npmjs.com/package/dotenv) package to use environment variables to store sensitive data.

Use the `schema.sql` file in the `db` folder to create your database with MySQL shell commands. Use environment variables to store sensitive data like your MySQL username, password, and database name.


### Additional Instructions

You'll need to execute association methods on your Sequelize models to create the following relationships between them:

* `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

* `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

> **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.

### Fill Out the API Routes to Perform RESTful CRUD Operations

Fill out the unfinished routes in `product-routes.js`, `tag-routes.js`, and `category-routes.js` to perform create, read, update, and delete operations using your Sequelize models.

Note that the functionality for creating the many-to-many relationship for products has already been completed for you.

> **Hint**: Be sure to look at the mini-project code for syntax help and use your model's column definitions to figure out what `req.body` will be for POST and PUT routes!

### Seed the Database

After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.

### Sync Sequelize to the Database on Server Start

Create the code needed in `server.js` to sync the Sequelize models to the MySQL database on server start.

