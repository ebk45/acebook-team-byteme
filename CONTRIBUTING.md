# Contributing Guidelines

Do not modify the`master` branch directly. You can only merge to it.

## Starting a New Feature

- Make a new branch from **inside** `dev`: `git checkout -b branch-name`
- Always rebase your branch to update it with the latest changes from `dev`: `git pull origin dev --rebase`
- Now you can make changes
- Once changes are commited, push them: `git push origin branch-name`
- Create a pull request from GitHub and assign a team member to review your code

## Troubleshooting

- If you start working without first running rebase :(

1.  run `git stash` (hides away changes that could be potential conflicts)
2.  run `git pull origin dev --rebase`
3.  fix conflicts :)
4.  run `git stash pop` (reintroduces changes)
5.  maybe fix conflicts again :) :)
