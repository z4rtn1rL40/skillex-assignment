# Skillex Assignment

## Here you can find both solution of the assignment and the instructions how to run the code.
Pnpm is used as default package manager if you don't have it installed you can install it by running the following command:

## Prerequisits
I'm not using much for completing this assignment. However you might need to have docker compose and pnpm installed on your machine to be able to run the server

1 Run this to decrypt the envs.
```bash
$  openssl enc -md md5 -aes-256-cbc -d -a -in ./env.local.encrypted -out ./.env.local -k "YOUR_SUPER_SECRET_PASSWORD_FOR_LOCAL"
```

2 Run following command to install the dependencies:
```
  $ pnpm i
```

3 Run this to have a MySQL database running on the machine
```
  $ docker compose up
```

To run the server use this command
```
  $ pnpm start
```
