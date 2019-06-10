
# Redux Feedback Loop 

This is a full-stack feedback app for students and admins. 

## Built With

* React
* Material-UI
* Redux
* Node
* Express
* PostgreSQL


## Description

This is a feedback app that allows a user to enter feedback for a class or instructor. The app takes the user through a series of four feedback steps. The first three ask the student to enter a score between 0 and 5, with 5 being the best. The last asks for comments. 

Throughout the process, the student is able to see their scores after they are entered. After the last step, the user is again given the chance to review the scores before submitting. Upon submitting, they are brought to a thank you page, where they are given the opportunity to go through the feedback process again.

The admin page allows an admin user to view all of the entries. The admin user can also delete entries from here.

### Getting Started 

Fork and clone the repository. Then install NPM and PostgreSQL using the steps listed below. Create a database called prime_feedback and a table using the data.sql file in the repo.

### Prerequisites 
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Material-UI](https://material-ui.com/)
* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Postgres](https://www.postgresql.org/)


### Installing 

1. Fork and clone the repository
2. `npm install`
3. `npm run server` to start server.js file
4. `npm run client` to start React
5. Install PostGreSQL if you don't already have it
6. Run PostGreSQL through Brew or manually
7. Set up a database called prime_feedback 
8. Create a table using the data.sql file in the repo
9. Have fun! 

### Completed Features

- [x] Multi-step feedback process
- [x] Get, Post, Delete calls to database
- [x] Admin page to view all feedback submissions


### Next Steps

- [x] Ability for user to step back and forward
- [x] Student information - Name, email
- [x] Ability for admin to login

### Authors

* Ben Ragsdale

### Acknowledgments

* Atbash, Mary Mosman
