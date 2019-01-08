/**
 * Created by j.ortiz on 3/01/2019.
 */
function doWork() {
    throw new Error('Unable to work');
}

try {
    doWork();
} catch (e) {
    console.log(e.message);
} finally {
    console.log('Finally block...');
}

console.log('Program ended');