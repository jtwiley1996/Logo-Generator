const Shapes = require('../library/shape')

//Test that the properties are being set in the correct case (lowercase)
describe('Color validation of textColor and shapeColor', () => {

    describe('When textColor is entered lowercase red', () => {
      it('should be set to  hexcode', () => {
        const textColor = 'red';
        const testShape = new Shapes('TNT', textColor, 'purple');
        expect(testShape.textColor).toEqual('#FF0000');
      });
    });
  
      describe('When textColor is entered uppercase red', () => {
      it('should be set to  hexcode', () => {
        const textColor = 'Red';
        const testShape = new Shapes('TNT', textColor, 'purple');
        expect(testShape.textColor).toEqual('#FF0000');
      });
    });
  });

    describe('When shapeColor is entered lowercase purple', () => {
    it('should be set to purple hexcode', () => {
      const shapeColor = 'purple';
      const testShape = new Shapes('TNT', 'purple', shapeColor);
      expect(testShape.shapeColor).toEqual('#800080');
    });
  });

    describe('When shapeColor is entered uppercase purple', () => {
    it('should be set to purple hexcode', () => {
      const shapeColor = 'Purple';
      const testShape = new Shapes('TNT', 'purple', shapeColor);
      expect(testShape.shapeColor).toEqual('#800080');
    });
  });

    describe('When a color hex code is entered with more than 7 characters', () => {
    it('should throw an error', () => {
    const testShape = () => new Shapes('TNT', '#00000000000000000000000000000000000000000000000000000000000000000000000000000000000000', 'purple');
    expect(testShape).toThrow(Error);
    });
  })

    //Test when the textColor input is a hex, to see if it is stays as a hexidecimal.  
    describe('When the entered textColor is a hexidecimal code', () => {
      it('should be set to a hexidecimal code', () => {
        const textColor = '#000000';
        const testShape = new Shapes('TNT', textColor, '#ffffff')
    expect(testShape.textColor).toEqual('#000000');
      })
    })

    //Teset when the shapeColor input is a hex, to see if it is stays as a hexidecimal.
    describe('When the entered shapeColor is a hexidecimal code', () => {
      it('should be set to a hexidecimal code', () => {
        const shapeColor = '#000000';
        const testShape = new Shapes('TNT', '#ffffff', shapeColor)
    expect(testShape.shapeColor).toEqual('#000000');
      })
    })

  //Test when a color name does not exist in the colorNames file
  describe('When a color name does not exist in the colorNames file', () => { 
    it('should throw an error', () => {
      const textColor = 'BlueberryFactory';
      const testShape = () => new Shapes('TNT', textColor, '#ffffff')
      expect(testShape).toThrow(Error)})
    })