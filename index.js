// code your solution here
function saturdayFun(something = "roller-skate"){
    return `This Saturday, I want to ${something}!`;
}
const mondayWork = function(something = "go to the office"){
    return `This Monday, I will ${something}.`;
}
function wrapAdjective(flair)
{
    let message;
    return function(message = "special"){
        return `You are ${flair}${message}${flair}!`;
    }
}