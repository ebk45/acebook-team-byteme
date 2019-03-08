### Day 1

Decided our MVP is to make bits and read bits ( with timestamps depending on progress).
Agreed that only one person did all the packages set up, and others just run in their terminal
`npm install`
install node, express, mongoose

Mob:
set-up mongodb account to set-up database on cloud

Went through the C operation with the demo.

Solved the whitespace IP address issue, allow all server to have access to MongoDB.
Solved bodyParse issue on router by end of the day

<b>What we learnt:</b><br>
Project management, such as task estimation, and use of Trello for project planning.<br>
Development environment management.<br>
Understand the Express framework.<br>
Use of document databases: data structure in MongoDB, which is a NoSQL.


### Day2
Continued with RUD operations with the demo.

Team collaboration approach: Use ABCD format and fith person will work on FE/BE depending on the work load on each team.
MVP by Wednesday: Create and Read posts.
Stack decision: Cypress for FE, and Jasmine for BE (future possibility to test REACT)

Git sanitation and work environment:
Each time when work on a branch again, always rebase, to ensure that I include the most up-to-date from dev branch.
`git pull origin dev`

set up jasmine and cypress frameworks
Include lint

run lint  in terminal:
`npm run lint`

BE:
Create testing environment.
Create a testing cluster on Mongo
Divert dev_db_url to testing url when testing.

FE:
Created index.html
Set up .env to hide mongodb account information.

<b> What we learnt: </b><br>
Develop CRUD operations with Express.<br>
Understand the MVC structure in Express.<br>
Possible testing techniques for database.

### Day3

FE team wrote RUD routes and functions in the controller file to interact with the database.
This led to a slight confusion with the BE team on their role. As the RUD functionalities are out of the scope of our second sprint. It took the BE team some time to understand and read the code wrote by FE team before getting back on track to our second sprint.


FE team: Developed the index.html

BE team: get bits from the database. Since we are using mongoose and mongoDB -- external APIs, we have decided that we do not need to do any unit testing in creating our database. Instead, we utilised Postman to manually test that our HTTP request functionality works.

The main challenges faced was first the communication problem, and then to solve the issue of not being able to make a get request to fetch bit posts from our database.

Solution:
We have raised the issue of lack of communication between FE and BE. Jake maintained the cohesion between the FE and BE teams by checking the progress and information needed in both teams.

The get request error was due to unfamiliarity to the route naming in express. Through reflection on our debugging process, we have learnt/ ehanced the methodic approach to decugging, and we should hopefully be able to notice and fix a bug sooner in future.

<b>What we learnt:</b><br>
Good commnication skills are important in agile process or time will spent on resolving misunderstanding instead of spending on our production.<br>
More familiar with Express after a day of debugging.



### Day4
Show all bits on home page by adding render.js. Use of fetch method and go through each bit object with a loop to display.

<b>What we learnt:</b><br>
Use of  `fetch` and `.then` to retrieve data.


### Day 5

BE: Clean MongoDB clusters, and rename clusters on MongoDB.
Add timestamps functionality using mongoose.
Run in terminal
`npm install mongoose-timestamp`
and use the timestamp plugin in the BitsSchema.
Instructions can be found [here](https://www.npmjs.com/package/mongoose-timestamp).

Deployment to Heroku, solving the connection to MongoDB.

<b>What we learnt:</b><br>
Standups format.<br>
Deploy database-backed web app on Heroku.<br>
Use of timestamp to include `createdAt` and `updatedAt` information

### Day6

BE:
Implemented salting and hashing on user's password with bcrypt
Ensure that user e-mail is unique
User can log-in and authenticate.

to use bcrypt:

`
npm install bcrypt
`

to  make unique document:
`
mongoose-unique-validator
`

Resources:
- [password authentication](https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1)

Reading about session and how to implement, choices are:
- [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage),
- [Jason Web Token (JWT)](https://techbrij.com/token-authentication-nodejs-express-mongo-passport),
- [express-session](https://github.com/Createdd/Writing/blob/master/2017/articles/AuthenticationIntro.md),
- passport

### Day 7

BE: Authentication and generate session/token. The team has divided to go for JWT after researching as it follows the industry standard.<br>

Json Web Tokens (JWT) : open, industry standard RFC 7519 method for representing claims securely between two parties. Got to [here](https://jwt.io/) for details.<br>

Good explanation of JWT [here](https://medium.com/dev-bits/a-guide-for-adding-jwt-token-based-authentication-to-your-single-page-nodejs-applications-c403f7cf04f4) and diagram [here](https://medium.com/@siddharthac6/json-web-token-jwt-the-right-way-of-implementing-with-node-js-65b8915d550e)<br>

Implement token following this [instructions](https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens) and [Github repo](https://gist.github.com/umidjons/857013a6c8fbd1c99ada)<br>

FE: seperate app.js into front-end and back-end. <br>
BE serves as an api to REACT, and implement cors to allow FE having ascces to the BE API.
Relevant article [here?](https://medium.freecodecamp.org/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c)

### Day 8

BE:
- Work on the `LIKES` and `DISLIKES` functionality.
- Look into testing frameworks.


FE:
- Connected with the back-end API.

### Day 9

BE:
- Added the `LIKES` and `DISLIKES` functionality.
- Look into testing frameworks.
- Bridge the backend api with front end.

FE: Styling

Learning:
Discussion about security and how to keep our user information safe.

### Day 10

FE: Further styling

BE: specific status error

Work on presentation
