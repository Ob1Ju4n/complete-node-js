/**
 * Created by j.ortiz on 2/01/2019.
 */
console.log('Starting password manager...');

// Module init:
var storage = require('node-persist');
storage.initSync();

var crypto = require('crypto-js');

var argv = require('yargs')
    .command('create', 'Creates a new account', function (yargs) {
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                description: 'Your account name',
                type: 'string'
            },
            userName: {
                demand: true,
                alias: 'u',
                description: 'Your user name',
                type: 'string'
            },
            password: {
                demand: true,
                alias: 'p',
                description: 'Your account password',
                type: 'string'
            },
            masterPassword: {
                demand: true,
                alias: 'm',
                description: 'Your master password',
                type: 'string'
            }
        }).help('help')
    })
    .command('get', 'Gets a new account', function (yargs) {
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                description: 'Your account name',
                type: 'string'
            },
            masterPassword: {
                demand: true,
                alias: 'm',
                description: 'Your master password',
                type: 'string'
            }
        }).help('help')
    })
    .help('help')
    .argv;

function createAccount(account, secret) {
    var accounts = getAccounts(secret);
    var exists = accounts.find(element => element.name === account.name);
    if (!exists){
        accounts.push(account);
    }
    saveAccounts(accounts, secret);
    return account;
}

function getAccount(accountName, secret) {
    var accounts = getAccounts(secret);
    for (var acc of accounts) {
        if (acc.name === accountName){
            return acc;
        }
    }
    return undefined;
}

function getAccounts(secret) {
    var accountsEnc = storage.getItemSync(ACCOUNT_RECORDS);
    if (accountsEnc) {
        var bytes = crypto.AES.decrypt(accountsEnc, secret);
        var accountsDec = bytes.toString(crypto.enc.Utf8);
        return JSON.parse(accountsDec);
    } else {
        return [];
    }
}

function saveAccounts(accounts, secret) {
    var accountsEnc = crypto.AES.encrypt(JSON.stringify(accounts), secret);
    storage.setItemSync(ACCOUNT_RECORDS, accountsEnc.toString());
    return accounts;
}

// Constants
const ACCOUNT_RECORDS = 'accounts';
const COMMAND = argv._[0];

// Business logic:
if (COMMAND === 'create'){
    try {
        var created = createAccount({name: argv.name, userName: argv.userName, password: argv.password}, argv.masterPassword);
        console.log('Account created: ' + created.name);
    } catch (e) {
        console.log('Unable to create account.');
    }
} else if (COMMAND === 'get'){
    try {
        var fetchedAccount = getAccount(argv.name, argv.masterPassword);
        if (fetchedAccount) {
            console.log('Account found: ' + JSON.stringify(fetchedAccount));
        } else {
            console.log('Account not found!');
        }
    } catch (e) {
        console.log('Unable to fetch account.');
    }
}
