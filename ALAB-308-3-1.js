/*
Part 1: Fizz Buzz ================================
To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
Accomplish the following:
Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.
Remember to commit your solution once it is working.
*/

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 !== 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//         console.log('Buzz');
//     } else if (i % 3 === 0 && i % 5 === 0) {
//         console.log('Fizz Buzz');
//     } else {
//         console.log(i);
//     }
// }



/*
Part 2: Prime Time ==========================
Now we will move onto something slightly more complex.
Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
Write a script that accomplishes the following:
Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop.
Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
Be careful! If you set n to a number too large, your loop could take a long time to process.
*/

// let isPrime = false;
// let n = 15;

// while (isPrime === false) {
//     isPrime = true;
//     n++;
//     for (let i = 2; i*i <= n; i++) {
//         if (n % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }
// console.log(n);



/*
Part 3: Feeling Loopy ==========================





*/