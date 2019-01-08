/**
 * Created by j.ortiz on 2/01/2019.
 */
var argv = require('yargs')
    .command('hello', 'Greets the user', function (yargs) {
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                description: 'Your first name goes here',
                type: 'string'
            },
            lastName: {
                demand: true,
                alias: 'l',
                description: 'Your last name goes here',
                type: 'string'
            }}
        ).help('help');
    })
    .help('help')
    .argv;
var command = argv._[0];
if (command === 'hello' && argv.name && argv.lastName){
    console.log('Hello ' + argv.name + ' ' + argv.lastName + '!');
} else if (command === 'hello' && argv.name){
    console.log('Hello ' + argv.name + '!');
} else if (command === 'hello'){
    console.log('Hello world!');
}