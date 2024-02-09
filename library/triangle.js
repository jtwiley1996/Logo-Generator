const Shape = require('./shape');

class triangle extends Shape{
    constructor(acronym, textColor, shape, shapeColor){
        super(acronym, textColor, shapeColor);
        this.shape = shape;
    }
    generateSVG(){ //Overwrites the generateSVG method from the Shape class.  This is technically encapsulated by the Shape Class's render method.
        console.log(`${this.shapeColor} ${this.shape} with text ${this.acronym} and color ${this.textColor}`);
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,0 0,200 200,200" fill="${this.shapeColor}" />
            <text x="100" y="125" fill="${this.textColor}" font-size="3rem" dominant-baseline="middle" text-anchor="middle">${this.acronym}</text>
        </svg>
    `
    }
}

module.exports = triangle;