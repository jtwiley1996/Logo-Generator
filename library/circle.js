const shapes = require('./shape');

class circle extends shapes{
    constructor(acronym, textColor, shape, shapeColor){
        super(acronym, textColor, shapeColor);
        this.shape = shape;
    }
    generateSVG(){
        console.log(`${this.shapeColor} ${this.shape} with text ${this.acronym} and color ${this.textColor}`);
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="100" fill="${this.shapeColor}" />
            <text x="100" y="100" fill="${this.textColor}" font-size="3rem" dominant-baseline="middle" text-anchor="middle">${this.acronym}</text>
        </svg>
    `
    }
}

module.exports = circle;