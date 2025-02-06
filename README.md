# Skillex Assignment

## Here you can find both solution of the assignment and the instructions how to run the code.
Pnpm is used as default package manager if you don't have it installed you can install it by running the following command:

Run this to decrypt the envs.
```bash
$  openssl enc -md md5 -aes-256-cbc -d -a -in ./env.local.encrypted -out ./.env.local -k "YOUR_SUPER_SECRET_PASSWORD_FOR_LOCAL"
```

Run following command to install the dependencies:
```
  $ pnpm i
```

To run the code you can use the following command:
```
  $ pnpm start
```
