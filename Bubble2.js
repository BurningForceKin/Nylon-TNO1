  var start = 0;
   var inc = 0.0001;
  var offs = 10;

class Bubble2 {
  constructor(){
    this.x = -width;
    this.y = -height;
    
    
  }
  

 move() {

   this.x = this.x + (start*2);
   this.y = this.y + (cos(start)*(offs));
  start += inc;
 }
  show(){

    vertex(this.x, this.y);
    
  }
  
  
  
}
