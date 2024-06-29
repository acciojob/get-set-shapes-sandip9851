class Rectangle {
	constructor(width,height){
    this.w=width;
    this.h=height;
  }
  
  get width(){
    return this.w
  }
  
  get height(){
    return this.h;
  }
  getArea(){
    return this.width*this.height
  }
}

class Square extends Rectangle {
	 constructor(side){
    super(side,side)
  }
  getPerimeter(){
    let ans=2*(this.w+this.h)
    return ans
  }
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;