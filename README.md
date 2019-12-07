# Accounting101

Accounting101 is an information security challenge in the Web category, and was presented to participants of [KAF Rolling](https://kaf.sh)

## Challenge story

The KipodLand administration requested this software company to build them a new accounting software. Our insiders got hold of the release-candidate secret version. We thought you might be able to spot 0days in there, which we will use to get KipodLand residents' secret information.

## Challenge exploit

Path traversal on user creation (AuthenticationTemplate path traversal on names)

## Challenge solution

Create a user with the name of `../../invoices/USERID-thing.php`, then on your USERID account, save some PHP code to the `thing.php` invoice. The `type="number"` is only validated on the client side, so this should not be a problem.

## Building and installing

[Clone](https://github.com/NadavTasher/2020-Accounting101/archive/master.zip) the repository, then type the following command to build the container:
```bash
docker build . -t accounting101
```

To run the challenge, execute the following command:
```bash
docker run --rm -d -p 1000:80 accounting101
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