# 18 NoSQL: Social Network API
by Dan McKay
* This is the assignment for Week 18 of the Full Stack Coding Bootcamp as offered through UC Berkeley Continuing Education in partnership with edX.

## Overview
* This is a back-end API for social network app, for the purpose of demonstrating server functionality for creating, retrieving, updating, and deleting users, thoughts (posts), and reactions (replies).

## Demo Video
### A demo video can be viewed [here](https://drive.google.com/file/d/1qV1IvXh6J1E-UTecCUJ5VVedTVqG4cmw/view)
* It is recommended to watch it on 1080p or the highest available quality.

* Screenshot of app on Postman interface
![image](https://github.com/DanielFMcKay/Social-Network-API/assets/123746582/01c4d57a-1fb8-4717-9a40-57c387657966)

### Installation
* Clone the repo to a local directory. After doing so, please navigate there in real time.
* enter the line "npm i" to install dependencies.
* use "npm start" to start the app.
* You can use the Postman app to interface with it using the routes in Instructions, at `http://localhost:3001`.

### Instructions
* Once the server is started, you can use the following routes to interface with the app on Postman:
  
* to Retrieve all Users: GET: `http://localhost:3001/api/users`
* to Retrieve all Thoughts: GET: `http://localhost:3001/api/thoughts`
 
* to Create one User: POST: `http://localhost:3001/api/users`
* to Retrieve one User: GET: `http://localhost:3001/api/users/:userId` (:userId is an internal variable that should be replaced by the actual 24-digit hexadecimal user id)
* to Update one User: PUT: `http://localhost:3001/api/users/:userId`
* to Delete one User: DELETE: `http://localhost:3001/api/users/:userId`

* to Create one Thought: POST: `http://localhost:3001/api/thoughts`
* to Retrieve one Thought: GET: `http://localhost:3001/api/thoughts/:id` (:id is an internal variable that should be replaced by the actual thought id)
* to Update one Thought: PUT: `http://localhost:3001/api/thoughts/:id`
* to Delete one Thought: DELETE: `http://localhost:3001/api/thoughts/:id`

* to Create a Reaction to a Thought: POST: `http://localhost:3001/api/thoughts/reactions`
* to Delete a Reaction: DELETE: `http://localhost:3001/api/thoughts/reactions/:reactionId` (:reactionId is an internal variable that should be replaced by the actual reaction id)

* to Add a Friend to a User: POST: `http://localhost:3001/api/users/friends`
* to Remove a Friend: DELETE: `http://localhost:3001/api/users/friends/:friendsId` (:friendId is an internal variable that should be replaced by the actual friend id)



### Technologies
* Express.js
* Node.js
* MongoDB
* Mongoose
* Postman

* Note: timestamps are created and properly formatted using a function located in and imported from utils/helpers.js

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API

WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database

WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database

WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

AND WHENEVER I say "Insomnia"
I ACTUALLY mean "Postman"
```

### License
This application is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

MIT License

Copyright (c) [2023] Dan McKay

