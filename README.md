# strapi-project

### Target environment

Tested on:

* Windows10/Ubuntu22
* Node v14
* npm v6

### Setup and run

1. **Clone** repo to your local machine
2. **! Make sure you are using tested node/npm versions**
    * node/npm versions can be easily switched with [nvm](https://github.com/nvm-sh/nvm)
3. Do **clean install** in root and subdirectories:
    * `npm ci && cd frontend/ && npm ci && cd ../backend/ && npm ci`
4. **Check that** `backend/.env` file is exist
   * If it's not, you can rename `.env.example` to `.env`
5. **Go back** to root directory and **run project**
    * `cd ../ && npm run develop`
6. **Follow instructions** from console
