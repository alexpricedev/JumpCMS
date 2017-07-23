# JumpCMS API

This is the backend of JumpCMS. It provides a REST endpoints for the admin
interface and front-end website.

## Quick start

1. Clone and `cd` into directory
2. `yarn`
3. `yarn start`
4. Visit [localhost:4000](http://localhost:4000)

You'll need to create a user so you can login using the admin UI.
The easiest way is to add a line to the top of the `data/users.db` file with something like this:

``` JSON
{"email":"admin@example.com","password":"$2a$10$JejwwtMTqg9TNiYT7QBUSu4L0PxQwPjKGVhXjVVlsPvj2l7MKIEhq","_id":"BlL3r83dPLHoW5wY"}
```

That password hash equates to `password`.

## FeathersJS

This project uses [Feathers](http://feathersjs.com). An open source web
framework. Checkout their docs to understand how this project is structured.
