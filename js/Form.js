class Form {
  constructor() {
    this.input = createInput("Name")
    this.button = createButton('Play')
    this.greeting= createElement('h3')
    
  }

  hideD() {

    this.input.hide()
    this.button.hide()
    this.greeting.hide()
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game")
    title.position(windowWidth/2-100, 0)      
    
    
    this.input.position(windowWidth/2-100, windowHeight/2-100);
    this.button.position(windowWidth/2-100, windowHeight/2-70);

    this.button.mousePressed(()=>{
      this.input.hide()
      this.button.hide()

      player.name = this.input.value()
      
      playerCount+=1;
      player.index= playerCount
      player.update()
      player.updateCount(playerCount)
      this.greeting.html("Hello " + player.name )
      this.greeting.position(windowWidth/2-100, windowHeight/2-100)
    })

  }
}
