Card = function(status){
  this.status = status;
};

Card.prototype.setStatus = function() {
  this.status = "checked";
};

exports.cardModule = Card;
