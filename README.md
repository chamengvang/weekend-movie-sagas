# Project: Movie - Saga

## Description

This week at Prime Session, we learned about API and redux.saga and how to use it to incorporate it into react and redux’s altogether. Similarly to redux reducers, redux.saga is a middleware library used to allow a Redux store to interact with resources outside of itself asynchronously. This helps make user be able to freely use outside external resources like API’s to bring in different information outside of the internal local source. 

For this week project, no API were used. There are two parts for this weekend challenge, a movie sagas SQL practice, and the movie saga app itself. The weekend challenge is to expand on a movie management application. Movies data are already existed in the database, and we’ll need to be able to see detailed view for each individual movie, including all genres associated with that movie. 

My first initial process to complete this weekend challenge is to start on part 1 of the challenge which is the movie sagas SQL practice. The tables and data are the same as part 2 of the weekend challenge and will be used to help reference it. First to understand the tables and data, I drew a map on how each table are related and how I can join them together to get a specific information out of each table. Once I was done with part 1, I moved on to part 2 of the weekend challenge and start on setting up folders/files and linking up routers. Next, I start on the details page and how to make a GET request for a specific movie using req.params and :id. Once all route was working as intended, I render the movie information using some basic material UI and styling. I also added in a add movie functionality page to add new movies to the list. 

Here is screenshot of the final product that I have style with some basic material UI styling. 
<img width="1440" alt="Screen Shot 2022-10-02 at 8 28 55 PM" src="https://user-images.githubusercontent.com/105823509/193487198-0918a14f-45d6-4fd7-9057-b94b8feb6023.png">
![Screen Shot 2022-10-02 at 7 05 30 PM](https://user-images.githubusercontent.com/105823509/193487219-228c4d7d-442d-4d62-8f80-41a5deb5080e.png)
![Screen Shot 2022-10-02 at 1 59 32 PM](https://user-images.githubusercontent.com/105823509/193487267-3d536c84-5bba-49d7-83c4-852a5ecdf411.png)
![Screen Shot 2022-10-02 at 7 40 46 PM](https://user-images.githubusercontent.com/105823509/193487289-ce88bed3-9846-4a26-8294-3c4fbda58bcc.png)

## Prerequisites:

    •	axios
    •	body-parser
    •	express
    •	node.js
    •	pg
    •	react
    •	redux
    •	material ui

## Installation

1. Create a database named saga_movies_weekend,
2. The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an npm install
4. Run npm run server in your terminal
5. Run npm run client in your terminal
6. The npm run client command will open up a new browser tab for you!

## Usage

Once everything is set up and ready to go. Please make sure both client and server are running at the same time.

1.	In the web browser, the movies should already been generated from the database. 
2.	Click on a movie and it will send you to the details page. 
3.	Once in the details page, it should show you all the information. 
4.	To go back to the movies list homepage, click on the back to list button. 
5.	To add a movie, click on the add movie button. 
6.	There should be four inputs and a quick preview on how it will look like in the details page. 
7.	Once all info is added, hit the add movie button and it should automatic take you back to the home page.
8.  New movie should have been added and repeat any of the above step to add or view movie.  

## Acknowledgement

Thanks to Prime Digital Academy who equipped and helped me to make this application a reality.

## Support

If you have suggestions or issues, please email me at chameng.vang@outlook.com
