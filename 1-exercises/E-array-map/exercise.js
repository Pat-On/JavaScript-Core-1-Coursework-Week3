// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// arrow 
var numbers2 = numbers.map(item => item * 100);
console.log("Array numbers2 is doing arrrr: " + numbers2);

//anonymous fun
var numbers3 = numbers.map(function to100(item){return item * 100});
console.log("Array numbers3 is doing arrrrggggggh: " + numbers3);

function sparta100(arr) {
    var sparta100x100 = []
    for(let i in arr) {
        sparta100x100.push(arr[i] * 100);
    }
    return sparta100x100
}

var number4 = sparta100(numbers);
console.log("This is sparta! " +  number4)

