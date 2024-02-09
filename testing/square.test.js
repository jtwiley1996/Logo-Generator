const Square = require('../library/square');

describe('square.js', () => {

    describe('When all of the data is entered', () => {
        it('All of the properties should match the inquirer results', () => {
            const textColor = '#0000FF'; //blue
            const shapeColor = '#D2691E'; //chocolate
            const acronym = 'ABC';
            const square = 'square'
            const testShape = new Square(acronym, textColor, square ,shapeColor);
            expect(testShape.generateSVG()).toEqual(`<svg width="300" height="200">
<rect x="0" y="0" width="200px" height= "200px" fill="#d2691e">
</rect>
<text x="100" y="100" fill="#0000ff" font-size="3rem" dominant-baseline="middle" text-anchor="middle">ABC</text>
</svg>`)
    })});
        });