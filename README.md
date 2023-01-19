# E-commerce Backend
Created using node express + MySQL sequelize
## Description
A basic node application that can communicate with a MySQL server and commit CRUD operations on the database.
## Installation
First you will have to run the schema.sql in the db folder on your MySQL server. All it does is creates a new database.
After downloading the application, navigate to the directory using your preferred terminal and run the following commands:
npm run seed
node server.js
After the server starts, you will be able to make calls to your MySQL database using GET, POST, PUT and DELETE routes.
## Available routes
GET ==/api/categories== - shows all categories
GET ==/api/categories/#== - shows a specific category. replace # with the id number of a specific category.
POST ==/api/categories/== - creates a new category. request body only needs category_name.
PUT ==/api/categories/#== - edits a specific category. replace # with the id number of a specific category. request body only needs category_name.
DELETE ==/api/categories/#== - deletes a specific category. replace # with the id number of a specific category.
GET ==/api/tags== - shows all tags
GET ==/api/tags/#== - shows a specific tag. replace # with the id number of a specific tag.
POST ==/api/tags/== - creates a new tag. request body only needs tag_name.
PUT ==/api/tags/#== - edits a specific tag. replace # with the id number of a specific tag. request body only needs tag_name.
DELETE ==/api/tags/#== - deletes a specific tag. replace # with the id number of a specific tag.
GET ==/api/products== - shows all products and their associated tags
GET ==/api/products/#== - shows a specific product and its associated tags. replace # with the id number of a specific product.
POST ==/api/products/== - creates a new product. request body should be as indicated below:
```
{
      "product_name": "Basketball",

      "price": 200.00,

      "stock": 3,

      "tagIds": [1, 2, 3, 4]
    }
```
PUT ==/api/products/#== - edits a specific product. replace # with the id number of a specific category. request body should follow the example above.
DELETE ==/api/products/#== - deletes a specific product. replace # with the id number of a specific product.
