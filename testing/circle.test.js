const Circle = require('../library/circle');

describe('circle.js', () => {

    describe('When all of the data is entered', () => {
        it('All of the properties should match the inquirer results', () => {
            const textColor = '#0000FF'; //blue
            const shapeColor = '#D2691E'; //chocolate
            const acronym = 'ABC';
            const circle = 'circle'
            const testShape = new Circle(acronym, textColor, circle,shapeColor);
            expect(testShape.generateSVG()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="100" cy="100" r="100" fill="${this.shapeColor}" />
<text x="100" y="100" fill="${this.textColor}" font-size="3rem" dominant-baseline="middle" text-anchor="middle">${this.acronym}</text>
</svg>`)
    })});
        });