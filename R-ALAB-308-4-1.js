/*

Part 1: Refactoring Old Code
revisit your code from ALAB 308.3.1 - Loops and Iteration.

*/

/* Code from ALAB 308.3.1 - Loops and Iteration: 
const str1 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

const rows = str1.split('\n')
// console.log(rows)

for (let i = 0; i < rows.length; i++) {
    const eachRow = rows[i].split(',');
    console.log(eachRow.join('\t'))
}
*/

