var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function(food) {
  if(this.food === food) { 
    return "Yum!";
  } else {
    return "Yuck!"
  }
};
