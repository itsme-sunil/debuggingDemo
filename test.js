require('./index');

describe('this and the global context', () => {

  it('can reference the window or global object', () => {
    expect(window.color).toBe(/* FILL_ME_IN */);
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
    expect(obj.display()).toBe(/* FILL_ME_IN */);
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
    expect(bike.getBrand()).toBe(/* FILL_ME_IN */);
  })

  it('can be bound to a specific object', () => {

    var brand = bike.getBrand; // FIX_ME

    expect(brand()).toBe('Specialized');
  })

  it('can invoke a method in the context of another object', () => {

    var anotherBike = {
      brand: 'Cannondale'
    }

    var brand = bike.getBrand(anotherBike); // FIX_ME

    expect(brand()).toBe('Cannondale');
  })

});

