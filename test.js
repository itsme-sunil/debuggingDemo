require('./index');

/*
 *
 *
 * INSTRUCTIONS:
 *  - There are 5 tests that you will need to make pass.
 *  - FILL_ME_IN -> fill in the value you expect it to be
 *  - FIX_ME -> refactor that line of code to make the test pass.
 */

describe('this and the global context', () => {

  it('can reference the window or global object', () => {
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
    var obj = new WhoIsThis();
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
    expect(bike.getBrand()).toBe('Specialized');
  })

  it('can be bound to a specific object', () => {

    var brand = bike.getBrand.bind(bike);

    expect(brand()).toBe('Specialized');
  })

  it('can invoke a method in the context of another object', () => {

    var anotherBike = {
      brand: 'Cannondale'
    }

    var brand = bike.getBrand.bind(anotherBike);

    expect(brand()).toBe('Cannondale');
  })

});

