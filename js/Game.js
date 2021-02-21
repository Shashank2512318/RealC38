class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player()
      player.getCount()
      form = new Form()
      form.display()
    }

    cars[0]= createSprite(windowWidth/3, windowHeight-100, 50, 50)
    cars[1]= createSprite(windowWidth/3+200, windowHeight-100, 50, 50)
    cars[2]= createSprite(windowWidth/3+400, windowHeight-100, 50, 50) 
  }

  play(){
    form.hideD()
    textSize(20)
    text("Game Start", windowWidth/2-100, windowHeight/2)
    Player.getPlayerInfo()
    if(allPlayers!== undefined){
      //var pos= 100
      var j= 0
      var x= windowWidth/3
      var y= windowHeight-100
      for(var i in allPlayers){
      y= windowHeight-100-allPlayers[i].distance
      cars[j].x= x
      cars[j].y= y

      if(j=== player.index-1) {
        cars[j].shapeColor= "red"
        camera.position.x= windowWidth/2
        camera.position.y= cars[j].y
      }

      j = j+1
      x= x+200
    }
  }
    if(keyDown("UP_ARROW") && player.index!== null) {

      player.distance= player.distance+50
      player.update()
    }

  }
}
