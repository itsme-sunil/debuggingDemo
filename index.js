function accessWindow() {
  this.color = 'red';
};

accessWindow();

var myVar = 100;

function WhoIsThis() {
    var myVar = 200;
    var whichOne = this.myVar;
    return whichOne;
}

var whichThis = WhoIsThis();