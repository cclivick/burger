# Eat-da-Burger App
### (MySQL, Handlebars, Express) 


## Basic Concept


> This is a simple application involving MySQL, Handlebars.js, and Express.js. The file structure was set up using the MVC pattern and the live application can be accessed at [Heroku.com](https://boiling-dusk-49639.herokuapp.com/). The application allows users to do a couple different functions:

## Functions
>1. See a list of "burger" items that have been stored in a MySQL database (schema.sql and seeds.sql files included in db folder above). These items are displayed in a green box, titled "Burgers to devour".



>2. "Devour" a burger. When users click a "devour it" button, the MySQL database is updated to change the state of the clicked burger from "undevoured" to "devoured". Devoured burgers are then displayed in an orange box, titled "Burgers you devoured".

>3. Add a burger. Users may also type the name of a new burger into the input field in a blue box and click an "Add Burger" button to also update the MySQL database and display the newly created burger in the "Burgers to devour" box. 
 


## Example


## Purpose / Technologies Used
>* I developed this simple application in order to further my understanding (and hopefully help other aspiring developers) with Express.js, Handlebars, and API creation.
>* This is my first time experimenting with live deploying to Heroku, and developing my own server and API database (thus the simple functionality of the deployed application).
>* Handlebars was used to create the HTML displayed on the home route in my server, as well as the line items displayed from the MySQL database.
>* I also experimented with ORMs for MySQL calls.
