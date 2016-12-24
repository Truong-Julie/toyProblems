const main = function main(n, m) {
    if (n === 0 || m === 0) {
        return console.log(0);
    } else if (n === 1 && m === 1) {
        return console.log( 1 );
    } else if (m === 1) {
        return console.log( n - 1 );
    }  else if (n === 1) {
        return console.log( m - 1 );
    } else {
        return console.log((n - 1) * (m - 1)) 
    }
}



main(0, 0)
main(0, 1)
main(1, 0)
main(2, 0)
main(3, 0)
console.log('//')
main(1, 1)
main(1, 2)
main(2, 1)
main(2, 2)
console.log('//')
main(2, 6)
main(3, 6)
console.log('//')

main(6, 6)
