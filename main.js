// 1 Function to calculate sum of even numbers

function sumOfEvenNumbers(numbers) {
    let i, sum = 0;

    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            sum += numbers[i];
        }
    }
    return sum;
}
let sum = sumOfEvenNumbers([17, 9, 6, 10, 4, 18, 20]);

console.log("Sum of even numbers is " + sum);

// ******************************************************



// 2 Function to count vowels in a String.

function countVowels(string) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < string.length; i++) 
    {
        for (let j = 0; j < vowels.length; j++) 
        {
            if (string[i] == vowels[j]) 
            {
                count++;
                break;
            }
        }
    }
    return count;
}
console.log("Vowels are " + countVowels("Arqam Sarwar"));

// ******************************************************



// 3 Function to find the longest string

function findStringLength(strings) 
{
    let stringLength = strings[0].length;

    for (let i = 1; i < strings.length; i++) 
    {
        if (strings[i].length > stringLength) {
            stringLength = strings[i].length;
        }
    }
    console.log("Max string length is " + stringLength);
}

let strings = ["apple", "strawberry", "banana", "grapes", "pear"]

findStringLength(strings);

// *******************************************************



// 4 Function to find average

function average(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

let result = average([7, 1, 6, 8, 2]);

console.log("Average is " + result);

// ******************************************************



// 5 Function to return an array of all the keys in an object.

function findKeys() 
{
    let person = {
        name: "Arqam",
        age: 22,
        city: "Karachi",
    };

    return Object.keys(person);
}

console.log(findKeys());

// ******************************************************



// 6 Function to return an array of all the values for a specified key in each object

function objectKeyValues(person) {
    let names = [];

    for (let index = 0; index < person.length; index++) {
        names.push(person[index].name);
    }

    return names;
}

let person = [
    { name: "Arqam", age: 22 },
    { name: "Ahmed", age: 18 },
    { name: "Ali", age: 20 },
];

result = objectKeyValues(person);
console.log(result);

// *******************************************************



// 7 Function to return an array of all the unique strings in an array.

function uniqueStrings(strings) 
{
    for (let i = 0; i < strings.length - 1; i++) 
    { 
        for (let j = i+1; j < strings.length; j++) {          
            if (strings[i] == strings[j])
            {
                strings.splice(j,1)
                j--
            }
        }
    }
    console.log(strings);
}

let arr = ["apple", "banana", "apple", "pear", "pear", "orange", "orange"]

uniqueStrings(arr);

// *******************************************************



// 8 Function to return the product of all the numbers in an array

function productOfNumbers(numbers) {
    let product = 1;

    for (let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }

    console.log("Product is " + product);
}

productOfNumbers([4, 5, 3, 2, 2]);