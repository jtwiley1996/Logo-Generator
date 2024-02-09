const Circle = require('../library/circle');

describe('circle.js', () => {

    describe('When all of the data is entered', () => {
        it('All of the properties should match the inquirer results', () => {
            const textColor = '#0000FF'; //blue
            const shapeColor = '#D2691E'; //chocolate
            const acronym = 'ABC';
            const circle = 'circle'
            const testShape = new Circle(acronym, textColor, circle,shapeColor);
            expect(testShape.generateSVG()).toEqual(`<svg width="300" height="200">
        <circle cx="100" cy="100" r="100" height= "200px" fill="#d2691e"></circle>
        <text x="100" y="100" fill="#0000ff" font-size="3rem" dominant-baseline="middle" text-anchor="middle">ABC</text>
        </svg>`)
    })});
        });