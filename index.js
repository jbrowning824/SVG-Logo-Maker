const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');


async function promptUser() {
    
    // walk user through required Logo creation info
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'shapeType',
            message: 'Select a shape:',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color:',
        },
        {
            type: 'input',
            name: 'logoText',
            message: 'Enter up to three characters for the logo text:',
            validate: input => input.length <= 3,
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color:',
        },
    ]);


    let shape;
    // switch case to create shape based on user input
    switch (answers.shapeType) {
    case 'Square':
        shape = new Square(answers.shapeColor, 150, 135);
        break;
    case 'Triangle':
        shape = new Triangle(answers.shapeColor, 150, 135);
        break;
    case 'Circle':
        shape = new Circle(answers.shapeColor, 150, 100);
        break;
    default: 
        console.error('Invalid selection');
        break;
    }

    //write svg to file
    fs.writeFile('logo.svg', 
        shape.createSVG(answers.textColor, 
        answers.logoText, shape.render()), (err) => {
            if(err){
                console.error(err);
            }
        });
}

// start prompts
async function init(){
    promptUser();
}

// initializtion point
init();