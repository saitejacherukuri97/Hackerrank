'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    var obj = {};
    var obj2 = {};
    var count = 0;
    for (let i=0; i<a.length; i++){
        obj[a[i]] = (obj[a[i]]) ? obj[a[i]]+1 : 1;
    }
    
    for (let i=0; i<b.length; i++){
        obj2[b[i]] = (obj2[b[i]]) ? obj2[b[i]]+1 : 1;
    }
    
    for (var ob of Object.keys(obj)){
        if (obj2[ob]) count += Math.abs(obj2[ob] - obj[ob]); 
        else count += obj[ob];
    }
    
    for (var ob of Object.keys(obj2)){
        if (!obj[ob]) count += obj2[ob]; 
    }
    
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + '\n');

    ws.end();
}
