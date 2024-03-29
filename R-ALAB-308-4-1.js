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

const csvParse = (csvString) => {
    const rows = csvString.split('\n');

    rows.forEach(row => {
        const parsed = row.split(',');
        // console.log(parsed);
        console.log(parsed.join('\t'));
    })
}

// const testString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// csvParsed(testString);

massString = 'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232';

csvParse(massString);



/* 
Part 2: Expanding Functionality
Now that you are familiar with your code, and perhaps have improved it, it is time to expand upon its functionality.
Begin with the following task:
Declare a variable that stores the number of columns in each row of data within the CSV.
Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
For example, if the first row of data (the headings) has eight entries, your program should create eight entries per row. You can safely assume that all rows that follow will contain the same number of entries per row.
After you have implemented the above:
Store your results in a two-dimensional array.
Each row should be its own array, with individual entries for each column.
Each row should be stored in a parent array, with the heading row located at index 0.
Cache this two-dimensional array in a variable for later use.
Using the original CSV example data, here is what the result of this step should look like:
ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
becomes
[["ID", "Name", "Occupation", "Age"],
["42", "Bruce", "Knight", "41"],
["57", "Bob", "Fry Cook", "19"],
["63", "Blaine", "Quiz Master", "58"],
["98", "Bill", "Doctor’s Assistant", "26"]]

*/

const csvParsed = (csvString) => {
    const rows = csvString.split('\n');
    // console.log(rows)

    const csvList = []
    rows.forEach(row => {
        const parsed = row.split(',');
        csvList.push(parsed)
    })

    return csvList;
}

const testString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// const testString = "ID,Name,Occupation,Age,Gender,Zipcode,City,State\n42,Bruce,Knight,41,Male,93546,Mammoth Lake,CA\n57,Bob,Fry Cook,19,Male,84060,Park City,UT\n63,Blaine,Quiz Master,58,Male,81611,Aspen,CO\n98,Bill,Doctor’s Assistant,26,Male,05751,Killington,VT"

// csvParsed(testString);



/* 
Part 3: Transforming Data
For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
Convert these keys to all lowercase letters for consistency.
Store these objects in an array, in the order that they were originally listed.
Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
For instance, the results of the example data above being passed through this step are as follows:
[["ID", "Name", "Occupation", "Age"],
["42", "Bruce", "Knight", "41"],
["57", "Bob", "Fry Cook", "19"],
["63", "Blaine", "Quiz Master", "58"],
["98", "Bill", "Doctor’s Assistant", "26"]]
becomes
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]
*/

const cvsParsedList = csvParsed(testString);

// const keys = [];
// // console.log(keys);
// cvsParsedList[0].forEach(key => {
//     key = key.toLowerCase();
//     keys.push(key);
// })
// console.log(keys)

const transform = (cvsParsedList) => {
    // store the keys
    // solution 1: ----
    // const keys = [];
    // cvsParsedList[0].forEach(key => {
    //     key = key.toLowerCase();
    //     keys.push(key);
    // })
    // solution 2: ------
    const keys = cvsParsedList[0].map(key => key.toLowerCase());
    // console.log(keys);

    const transformList = [];
    for (i = 1; i < cvsParsedList.length; i++) {
        const object = {}
        // In JavaScript, cannot use square brackets notation to dynamically assign keys in an object literal directly
        for (j = 0; j < 4; j++) {
            object[keys[j]] = cvsParsedList[i][j];
        }
        transformList.push(object);
    }

    return transformList;
    // console.log(transformList);
}

const transformedList = transform(cvsParsedList);
// console.log(transformedList);




/*
Part 4: Sorting and Manipulating Data
Using array methods, accomplish the following tasks, in order upon the result of Part 3:
Remove the last element from the sorted array.
Insert the following object at index 1:
{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
Add the following object to the end of the array:
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }
So far, the results should look like this:
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.
*/

transformedList.pop();

transformedList.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

transformedList.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log(transformedList)

// Solution 1: --------
// const totalAge = (transformedList) => {
//     let totalAge = 0;
//     for (k = 0; k < transformedList.length; k++) {
//         totalAge += Number(transformedList[k].age);
//     }

//     return totalAge;
// }
// console.log(totalAge(transformedList))

// Solution 2: ----------
let totalAge = 0;
transformedList.forEach(item => {
    totalAge += Number(item.age);
})
console.log(totalAge)




/*
Part 5: Full Circle
As a final task, transform the final set of data back into CSV format.
*/

const backToCVS = (parsedList) => {
    // get the first row of CVS
    const list0 = Object.keys(parsedList[0])
    let list0Up = []
    list0.forEach(item => {
        let itemU;
        if (item === 'id') {
            itemU = 'ID'
        } else {
            itemU = item.charAt(0).toUpperCase() + item.slice(1);
        }
        list0Up.push(itemU)
    })
    // console.log(list0Up)

    // create the list for the whole CVS
    const listCVS = [list0Up];
    // console.log(listCVS);

    // convert object's items to list of list
    parsedList.forEach(item => {
        listCVS.push(Object.values(item))
    })
    // console.log(listCVS)

    // generate CVS from listCVS
    cvsStringAgain = "";
    listCVS.forEach(item => {
        cvsStringAgain += item.join(',') + '\\n' 
    })

    return cvsStringAgain.slice(0,-2);
}

const cvsFormat = backToCVS(transformedList);
console.log(cvsFormat)
// console.log(cvsFormat == testString)