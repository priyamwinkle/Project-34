var dog,dogImg,happyDog,happyDogImg,database,foodS,foodStock,database;

function preload(){
    dogImg=loadImage("dogImg.png");
    happyDogImg=loadImage("dogImg1.png");
}

function setup() {
	  createCanvas(500,500);

    database=firebase.database();

    foodStock=database.ref("food");
    foodStock.on("value",readStock)

    dog=createSprite(250,300,50,50);
    dog.addImage(dogImg);
    dog.scale=0.3

}


function draw() {
    background(46,139,87);

    if(keyWentDown(UP_ARROW)){
        writeStock(foodS);
        dog.addImage(happyDogImg);
    }
  
    drawSprites();

    text()
}

function readStock(data){
    foodS=data.val();
}

function writeStock(x){

    if(x<0){
      x=0;
    }
    else{
      x=x-1;
    }

    database.ref("/").update({
        Food:x
    })
}



