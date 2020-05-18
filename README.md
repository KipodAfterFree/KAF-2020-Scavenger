# Scavenger

## Challenge exploit

Path traversal on user creation (AuthenticationTemplate path traversal on names)

## Challenge solution

Create a user with the name of `../../invoices/USERID-thing.php`, then on your USERID account, save some PHP code to the `thing.php` invoice. The `type="number"` is only validated on the client side, so this should not be a problem.

## Building and installing

[Clone](https://github.com/NadavTasher/Bsides-2020-Scavenger/archive/master.zip) the repository, then type the following command to build the container:
```bash
docker build . -t scavenger
```

To run the challenge, execute the following command:
```bash
docker run --rm -d -p 1000:80 scavenger
```

## Usage

You may now access the challenge interface through: `http://localhost:1000`

## Flag

Flag is:
```flagscript
KAF{n3xt_lic3nse_w1ll_n0t_ev3n_p3rmit_us3ing_the_4pp}
```

## License
[MIT License](https://choosealicense.com/licenses/mit/)