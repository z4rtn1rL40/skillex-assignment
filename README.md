# Skillex Assignment


## Prerequisites
Pnpm is used as default package manager for the project. If you don't have it installed you can install it by running the following command:
```bash
  $ npm i -g pnpm
```
You'd also need to have docker and docker compose installed on the machine to run the server.

## Instructions how to run the server
1 Run this to decrypt the envs.
```bash
  $  openssl enc -md md5 -aes-256-cbc -d -a -in ./env.encrypted -out ./.env -k "YOUR_SUPER_SECRET_PASSWORD_FOR_LOCAL"
```

2 Run following command to install the dependencies:
```bash
  $ pnpm i
```

3 Run this to have a MySQL database running on the machine
```bash
  $ docker compose up
```

4 To migrate database use this command
```bash
  $ npm run migrate
```

5 To run the server use this command
```bash
  $ pnpm start
```
