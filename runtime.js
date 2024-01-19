const perf = require('execution-time')();

function doublerAppend(nums){
    let new_nums = [];
    for (let i = 0; i < nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }
    return new_nums;
}

function doublerInsert(nums){
    let new_nums = [];
    for (let i = 0; i < nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }
    return new_nums;
}

function getSizedArray(size){
    let array = [];
    for (let i = 0; i < size; i++){
        array.push(i);
    }
    return array;
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// Measure time for tinyArray
perf.start();
doublerAppend(tinyArray);
let resultsAppendTiny = perf.stop();

perf.start();
doublerInsert(tinyArray);
let resultsInsertTiny = perf.stop();

// Measure time for smallArray
perf.start();
doublerAppend(smallArray);
let resultsAppendSmall = perf.stop();

perf.start();
doublerInsert(smallArray);
let resultsInsertSmall = perf.stop();

// Measure time for mediumArray
perf.start();
doublerAppend(mediumArray);
let resultsAppendMedium = perf.stop();

perf.start();
doublerInsert(mediumArray);
let resultsInsertMedium = perf.stop();

// Measure time for largeArray
perf.start();
doublerAppend(largeArray);
let resultsAppendLarge = perf.stop();

perf.start();
doublerInsert(largeArray);
let resultsInsertLarge = perf.stop();

// Measure time for extraLargeArray
perf.start();
doublerAppend(extraLargeArray);
let resultsAppendExtraLarge = perf.stop();

perf.start();
doublerInsert(extraLargeArray);
let resultsInsertExtraLarge = perf.stop();

// Print results
console.log('Results for tinyArray');
console.log("unshift", resultsInsertTiny.preciseWords);
console.log("push", resultsAppendTiny.preciseWords);

console.log('Results for smallArray');
console.log("unshift", resultsInsertSmall.preciseWords);
console.log("push", resultsAppendSmall.preciseWords);

console.log('Results for mediumArray');
console.log("unshift", resultsInsertMedium.preciseWords);
console.log("push", resultsAppendMedium.preciseWords);

console.log('Results for largeArray');
console.log("unshift", resultsInsertLarge.preciseWords);
console.log("push", resultsAppendLarge.preciseWords);

console.log('Results for extraLargeArray');
console.log("unshift", resultsInsertExtraLarge.preciseWords);
console.log("push", resultsAppendExtraLarge.preciseWords);
