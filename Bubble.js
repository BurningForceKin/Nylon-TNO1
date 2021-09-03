  var start = 0;
   var inc = 0.001;
  var offs = 1;

class Bubble1 {
  constructor(){
    this.x = -width;
    this.y = 0;
    
    
  }
  

 move() {

   this.x = this.x + (cos(start) * offs);
   this.y = this.y + (sin(start) * offs);
   //  if(this.y > 500){
   //  this.y = 0;
   //  this.x = random(0,400);
   // }
   // if(this.y < 0){
   //   this.y = random(0,500);
   // }
  start += inc;
 }
  show(){

    vertex(this.x, this.y);
    
  }
  
  
  
}
