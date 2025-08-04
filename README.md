# Overview

This is the code for the backend of my blog site. The frontend code can be found [here](https://github.com/robinsao/blog-frontend).

# Getting started

To get started, run

```sh
git clone https://github.com/robinsao/blog-backend
cd blog-backend
npm i --omit=dev
```

Next, configure the database. This project uses PostgreSQL. You can follow the database configuration [here](https://docs.strapi.io/cms/configurations/database) and [here](https://docs.strapi.io/cms/configurations/database#postgresql).

Then, configure the .env file (either `.env.dev` or `.env.prod`):
- For the `APP_KEYS` field, you can specify multiple keys. These keys can be generated via the `gen-secret.sh` script. Theses keys are internally used by Strapi in the User & Permissions Plugin and the Documentation Plugin.
- For env fields ending with `SECRET`, run the `gen-secret.sh` and paste values in.
- For fields ending with `SALT`, run the `gen-salt.sh` script and paste the values in.

You may also want tot customize the `./config/` files -- configure the CORS policies, for example.

You may also want to customze the api for the `Blog` content type -- for example, configure rate limiting.

If you're planning to integrate it with the frontend, you should test out the Strapi's API first -- with cURL or Postman -- once you've finished the above steps before continuing to setup the frontend.

# Running

To run in development mode, make a `.env.dev` file, copy the fields in `.env.example` file, and run `npm run dev`.

To run in production mode, make a `.env.prod` file, copy the fields in `.env.example` file, and run 
```sh
npm run build
NODE_ENV=production npm run start
```
