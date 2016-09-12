

 /**
 * name
 */
 abstract class Car {
    

    // method here door 1
    door(): number {
        return this.glass();
    }  
    // call abstract 
  abstract glass() : number ;

}


/**
 * car2
 */
class Car2  extends Car { // implymnt abstract method
    
    glass(){ return 1;}
        
}
//var obj1 = new Car(); //eroor show that

//mothod 1// here
//console.log(obj1.door()  );