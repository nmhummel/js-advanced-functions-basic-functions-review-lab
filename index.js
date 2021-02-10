// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(flair = "*") {
    return function(param = "special") {
        return `You are ${flair}${param}${flair}!`
    }
}

// Call example: let encouragingPromptFunction = wrapAdjective("!!!")
// Thus a total call should be: wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!"

const Calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b;
    },
    multiply: function(a,b) {
        return a*b;
    },
    divide: function(a,b) {
        return a/b;
    }
}

// Defines a function called actionApplyer that receives two arguments: 
// a starting integer and an array of functions
// 1) returns the given starting point, unchanged, when the array is empty
// 2) Given 13, returns 4 after being acted on by several functions

function actionApplyer(start, array) {
    let a = start
    for (let i = 0; i < array.length; i++) {
        a = array[i](a)
    }
    return a
}