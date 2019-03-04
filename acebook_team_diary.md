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
`git pull --rebase origin/dev`

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
