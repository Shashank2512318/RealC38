var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;
var allPlayers;

var form, player, game

var cars= []


function setup(){
  canvas = createCanvas(windowWidth-50, windowHeight-50)
  database = firebase.database()
  game = new Game()
  game.getState()
  game.start()
}


function draw(){

if(playerCount=== 3){
  game.update(1)
}
if(gameState=== 1){

  clear()
  game.play()
  drawSprites()
}


}
