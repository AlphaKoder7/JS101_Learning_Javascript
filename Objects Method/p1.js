const Rectangle = {
  length: 0,
  width: 0,

  setDimensions(length, width) {
    this.length = length;
    this.width = width;
  },

  area() {
    return this.length * this.width;
  },

  perimeter() {
    return 2 * (this.length + this.width);
  },
};

Rectangle.setDimensions(5, 7);
console.log("Area:", Rectangle.area());
console.log("Perimeter:", Rectangle.perimeter());
