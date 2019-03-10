# acebook-team-byteme

### Intriduction
This repo contains the back-end logic for Acebook -- a Facebook clone developed by a remarkable agile team called Byte within 2-week timeframe. The features are built based on user stories listed in the following section. Read our [diary](./acebook_team_diary.md) to see our development journey and what we have learnt each day! <br>

### User Stories

```
As a user,
As a user, So i can share whats going on in my life,
I want to be able to create a post on acebook.
```

```
As a user,
So I can view whats going on within my friends list,
i want to be able to see a list of post in chronological order.
```

```
As a user,
I want to be able to see when a post was created,
So i want the post to show the time.
```

``` As a user,
I want to be able to able to have a personal account,
So i want to be able to register with my details 
```

``` As a user,
I want to be able see posts I and my friends have made,
So i want to be able to sign in to my account with my details
```

## Technical Approach

|Layer|Technology|
|:----|:----|
|Front-end|REACT|
|Back-end|Langauge: Node.js<br>Framework: Express<br>Testing: Jasmine|
|Database|NoSQL with MongoDB|

## Instructions

Run `npm install` in your terminal each time you pull or clone the repo to ensure that your local machine has the correct npm packages to run the app.

You need to setup the database url in the <i>.env </i> file to link the app to the cloud MongoDB database if you want to run your app on your own machine. As the url contains private information, it is not published in this repo.

Run `npm run dev` in your terminal to run the app in a local server. The port is set to 1234, and type `http://localhost:1234/` in your server.

### Usage

A user will need to register with his/her name, e-mail, and password, which will then be stored in the database. In order to create a post, a user will have to log in.
