#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
        return {};
      }
      this.width = w;
      this.height = h;
    }
  
    toString() {
      return 'Rectangle {}';
    }
  }
  
  module.exports = Rectangle;