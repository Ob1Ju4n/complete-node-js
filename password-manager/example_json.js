/**
 * Created by j.ortiz on 2/01/2019.
 */
var animal = '{"name": "Halley"}';
var animalObject = JSON.parse(animal);
animalObject.age = 3;
animal = JSON.stringify(animalObject);
console.log(animal);