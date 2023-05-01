var oldNumbers = [12.465, 23];
var newNumbers = [12.465, 23];
var update = oldNumbers.push.apply(oldNumbers, newNumbers);
console.log(update);
