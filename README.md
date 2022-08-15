# Docker Compose setup for NestJS + Redis + Postgres (with Prisma)
## Local setup

Here's how to setup locally.

1. Clone this repo
2. Run `npm run install` to install dependencies
3. Copy the `.env.example` file over to your own `.env` file and update the variables
4. Run `docker-compose up -d` to setup local environment with Docker
5. Run `npx prisma migrate dev` to run local database migrations

This setup will handle hot reloading, so any updates you make to the NestJS code will update the container in realtime. 

## Installing new pacakages / database changes

If you install new dependencies or make any database changes, you'll need to run the following commands to ensure your docker containers also use the new depenencies: 

```bash
docker-compose down
```

And then run the command:

```bash
docker-compose up -d --build -V
