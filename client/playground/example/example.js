import bunnyImage from './bunny.png'

export default {
  run: function(ws) {

    var app = new PIXI.Application(800, 600, {backgroundColor: 0x1099bb});
    document.body.appendChild(app.view);

    // create a new Sprite from an image path
    this.bunny = PIXI.Sprite.fromImage(bunnyImage)

    // center the sprite's anchor point
    this.bunny.anchor.set(0.5);

    // move the sprite to the center of the screen
    this.bunny.x = app.screen.width / 2;
    this.bunny.y = app.screen.height / 2;

    app.stage.addChild(this.bunny);

    // Listen for animate update
    app.ticker.add(function (delta) {
      // just for fun, let's rotate mr rabbit a little
      // delta is 1 if running at 100% performance
      // creates frame-independent transformation

      this.bunny.rotation += 0.1 * delta;
    }.bind(this));
  },

  onmessage: function(msg){
    console.log(msg.data);
    if(msg.data === 'left'){
      this.bunny.x -= 10;
    }
    else if(msg.data === 'right'){
      this.bunny.x += 10;
    }
    else if(msg.data === 'up'){
      this.bunny.y -= 10;
    }
    else if(msg.data === 'down'){
      this.bunny.y += 10;
    }
  }
}