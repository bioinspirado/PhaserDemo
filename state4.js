demo.state4 = function(){};
demo.state4.prototype = {
  preload: function(){

  },
  create: function(){
    game.stage.backgroundColor = '#85e085';
    console.log('state4');
    addChangeStateEventListeners();
    
  },
  update: function(){

  }
};