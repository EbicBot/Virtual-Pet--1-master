class Doggo{
    constructor(x,y,width,height,options){
        options={
            "isStatic":true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/dogImg.png")
        this.image = loadImage("images/dogImg1.png")
    }
    display(){

    }
}