const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');


async function promptUser() {
    
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
    console.log(answers);

    let shape;
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
    //create the svg based on user input in 300px x 200px container
    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="${shape.textPosition.x}" 
            y="${shape.textPosition.y}" font-family="Arial" 
            font-size="40" 
            fill="${answers.textColor}" 
            text-anchor="middle">
        ${answers.logoText}
        </text>
        </svg>
    `;

    //write svg to file
    fs.writeFile('logo.svg', svgContent, (err) => {
        console.error(err);
    })
}

async function init(){
    promptUser();
}

// initializtion point
init();