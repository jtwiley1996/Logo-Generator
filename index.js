const fs = require('fs');
const inquirer = require('inquirer');
const Triangle = require('./library/triangle')
const Circle = require('./library/circle')
const Square = require('./library/square')
const colorNames = require('./library/colors')
//Just a test to make sure the file exists
// const newShape = new Shape('circle').render();


function init() {

    function writeToFile(fileName, data){
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                return console.log(err);
            } else {
                console.log('Generated `logo.svg` sucessfully!');
            }
        })
    }


    const validateColorInput = (input) => {
        const testRegex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/;
    
        let convertedInput = input.toLowerCase();
        let convertedColor;
    
        if (colorNames[convertedInput]) {
            // If the input is a valid color name, convert it to the corresponding hex value
            convertedColor = colorNames[convertedInput];
        }
    
        if (!convertedColor && !testRegex.test(input)) {
            return 'Please enter a valid color name or a hexcode';
        }
    
        return true;
    };

    const validateAcronymInput = (input) => {
        if (!input) {
            return 'Please enter an acronym no longer than 3 characters'
        } else if (input.length > 3) {
            return 'Acronym cannot be longer than 3 characters'
        } 
        return true;
    }

    //Declare an async function to prompt the user for answers
    const promptForAnswers = async () => {
        const promptQuestions = [
            {
                type: 'input',
                name: 'acronym',
                message: 'Enter up to 3 characters for your logo text',
                validate: validateAcronymInput,
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter a color OR a hexadecimal number (with the #) for your text color',
                validate: validateColorInput,
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape',
                choices: ['circle', 'triangle', 'square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter a color OR a hexadecimal number (with the #) for your shape color',
                validate: validateColorInput,
            },
        ];

        return inquirer.prompt(promptQuestions);
    };

    const execute = async () => {
        const promptAnswers = await promptForAnswers();

        // Access answers based on question names
        const acronym = promptAnswers.acronym.trim();
        const textColor = promptAnswers.textColor.trim();
        const shapeColor = promptAnswers.shapeColor.trim();
        const shapeChoice = promptAnswers.shape;
        let shape;

        if (promptAnswers.shape === 'circle') {
            shape = new Circle(acronym, textColor, shapeChoice, shapeColor);
        } else if (promptAnswers.shape === 'triangle') {
            shape = new Triangle(acronym, textColor, shapeChoice, shapeColor);
        } else if (promptAnswers.shape === 'square') {
            shape = new Square(acronym, textColor, shapeChoice, shapeColor);
        }

        console.log(shape);
        const svgData = shape.render();

        writeToFile(`logo.svg`, svgData);
    };

    execute();
}

init();