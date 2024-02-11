const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');


async function promptUser() {
    
    const { answers } = await inquirer.prompt([
        {
          type: 'list',
          name: 'shape',
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
          name: 'text',
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
      switch (answers.shape) {
        case 'Square':
            shape = new Square(answers.shapeColor);
            break;
        case 'Triangle':
            shape = new Triangle(answers.shapeColor);
            break;
        case 'Circle':
            shape = new Circle(answers.shape);
            break;
        default: 
            console.error('Invalid selection');
            break;
      }
    

    }