const colors = require('./colors');

class shapes {
    constructor(acronym, shapeColor, textColor){
        textColor = textColor.toLowerCase();
        shapeColor = shapeColor.toLowerCase();

        const hexRegex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/;
        if (acronym.length > 3) {
            throw new Error('3 characters or less');
        }
        if (!(hexRegex.test(textColor) || colors[textColor.toLowerCase()])){
            throw new Error('invalid input: must be valid hex code or color name')
        }
        if (!(hexRegex.test(shapeColor) || colors[shapeColor.toLowerCase()])){
            throw new Error('invalid input: must be valid hex code or color name')
        }

        this.acronym = acronym.toUpperCase();

        if (hexRegex.test(textColor)) {
            this.textColor = textColor;
        } else {
            this.textColor = colors[textColor];
        }
        
        if (hexRegex.test(shapeColor)) {
            this.shapeColor = shapeColor;
        } else {
            this.shapeColor = colors[shapeColor];
        }
    }
    render(){
        const svgData = this.generateSVG();
        return svgData;
    }
}

module.exports = shapes;