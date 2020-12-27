class Food{
    constructor(){
      this.milk = loadImage("images/Milk.png");
      this.foodStock=0;
      this.lastFed;
    }
    getFoodStock(){
      return this.foodStock;
    }

    updateFoodStock(foodStock){
      this.foodStock = foodStock;

    }

    deductFood(){
      if(this.foodStock>0){
      this.foodStock = this.foodStock - 1;
      }
    }
    getFedTime(lastFed){
      this.lastFed = lastFed;
    }
    display(){
      var x=80, y=100;
      imageMode(CENTER)
      //image(this.milk, 700, 250, 50,50);
      if(this.foodStock!= 0){
        for(var i= 0; i<this.foodStock; i++){
          if(i% 10==0){
            x=80;
            y=y+50;
          }
          image(this.milk, x,y,50,50);
          x= x+30;
        }
      }
    }
  }

  
