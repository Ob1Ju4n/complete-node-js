/**
 * Created by j.ortiz on 3/01/2019.
 */
console.log('Challenge:');

function printInTwoSecs(message) {
    setTimeout(() => console.log(message), 2000);
}

printInTwoSecs('Hello async!');