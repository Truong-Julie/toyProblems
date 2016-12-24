// var minimumTotal = function(triangle) {
//     return triangle.map(function(arr){
//         return arr.sort(function(a, b) {
//           return a - b;
//         })
//     }).reduce(function(before, now) {
//         return +before + now[0];
//     })
// };


// console.log(minimumTotal([
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]))
// console.log(minimumTotal([
//      [10],
//     [10,9]
// ]))

var a = '1 3 2 6 1 2'.split(' ');
var k = 3

function main () {
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        for(var j = i+1; j < a.length; j++) {
            
            if ( a[i] < a[j]) {
                console.log(a[i], a[j], 'and then', a[i]+a[j])
                if (a[i]+a[j] % k === 0) {
                    count++;
                }
            }
        }
    }
    console.log(count)
}
main()
