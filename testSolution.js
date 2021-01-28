require('./index');

describe('this and the global context', () => {

  it('can reference the window or global object', () => {

    // the 'this' keyword can refer to the window, or global object, and set properties to it.

    // Check index.js. The this.color is referencing the global object since accessFunction() is part of the global as well.
    expect(window.color).toBe('red');
  })

  it('can be a bit tricky', () => {
    var myVar = 100;

    function WhoIsThis() {
        this.myVar = 200;

        this.display = function() {
            var myVar = 300;

            return myVar;
        };
    }

    // using the 'new' operator, the 'this' keyword now refers to obj
    var obj = new WhoIsThis();

    //  obj.display() -> this.display()
    //  this.display() creates a local variable, myVar, with value 300 and returns it.
    expect(obj.display()).toBe(300);
  });
});

describe('this and method invocation', () => {

  var bike = {
    brand: 'Specialized',
    getBrand: function () {
        return this.brand;
    }
  }

  it('refers to an object when used inside the invocation of a method', () => {

    // bike.getBrand() will return this.brand;
    // the 'this' keyword will refer to the 'bike' object
    expect(bike.getBrand()).toBe('Specialized');
  })

  it('can be bound to a specific object', () => {

    // If we did not add the .bind(bike), then brand() will return undefined.
    // In this instance, 'this' is NOT referring to the bike object, and is referring to the function outside of it(the it() test function.)

    // we assign a variable, brand, to the bike.getBrand method.
    // we add a .bind(bike) to ensure that the getBrand() method is run in the context of the bike object.
    var brand = bike.getBrand.bind(bike);

    expect(brand()).toBe('Specialized');
  })

  it('can invoke a method in the context of another object', () => {

    var anotherBike = {
      brand: 'Cannondale'
    }

    // We can pass a different object to the .bind() with a brand property.
    // The getBrand() method will run in the context of the anotherBike object.

    //     getBrand: function () {
    //       return this.brand; -> this refers to 'anotherBike'
    //      }

    var brand = bike.getBrand.bind(anotherBike);

    expect(brand()).toBe('Cannondale');
  })

});
