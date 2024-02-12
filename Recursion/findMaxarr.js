function findMax(arr) {
    var maxSoFar = -Infinity;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxSoFar) {
            maxSoFar = arr[i];
        }
    }
    return maxSoFar;
}
var res = findMax([10, 1, 2, 3, 100, 1,25,-180,270,3990,820,640,1000])
console.log(res);
