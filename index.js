const inquirer = require("inquirer");
const prompts = require("./prompts");

function init(){
inquirer.prompt(prompts).then((answers)=>{
    // TODO database navigation
    // TODO database manipulation
    // TODO database inner-join
});
}

init()