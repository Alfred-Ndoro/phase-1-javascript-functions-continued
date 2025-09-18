//function saturdayFun(activity= "roller-skate") {
  //console.log(`This Saturday, I want to ${activity}!`);
//}
//console.log(saturdayFun("go hiking"));
//console.log(saturdayFun());

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}


console.log(saturdayFun("go hiking")); // Output: This Saturday, I want to go hiking!
console.log(saturdayFun());            // Output: This Saturday, I want to roller-skate!

console.log(1 + 1);

console.log("Razzle" + "dazzle");


const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};


console.log(mondayWork("work from home")); // Output: This Monday, I will work from home.
console.log(mondayWork());

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a hard worker"));

const defaultPrompt = wrapAdjective ();
console.log(defaultPrompt());

