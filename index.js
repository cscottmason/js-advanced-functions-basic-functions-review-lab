// Your code here

function saturdayFun(activity ="roller-skate"){
    return (`This Saturday, I want to ${activity}!`)

}

function mondayWork(task="go to the office"){
    return(`This Monday, I will ${task}.`)
}

function wrapAdjective(something="*"){
    return function (type= "special"){
        return (`You are ${something}${type}${something}!`)

    }

}

const Calculator = {

    add: function(a,b) {
        return a + b;
    },

    subtract: function(a,b) {
        return a - b;
        
    },

    multiply: function(a,b) {
        return a * b;
        
    },

    divide: function(a,b) {
        return a / b;
        
    }

}

function actionApplyer(start, transform) {
    let a = start;

    for (let i = 0; i < transform.length; i++){
        a = transform[i](a)
    }
    return a;
}




   