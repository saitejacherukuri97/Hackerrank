'use strict';

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

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    var flag = 0;
    
    var obj = {};
    for (let i=0; i<magazine.length; i++){
        obj[magazine[i]] = (obj[magazine[i]]) ? obj[magazine[i]]+1 : 1;
    }    
    
    for (let i=0; i<note.length; i++){
        if (!obj[note[i]]){
          console.log('No'); return;
        }  
        else {
            obj[note[i]]--;
        }
    }
    
    console.log('Yes');
    
    
    

}

function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    checkMagazine(magazine, note);
}
