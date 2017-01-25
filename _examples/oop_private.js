---
---

var User = function(username, pass){
  var password = pass;
  this.username = username;

  this.login = function(checkPass){
    return checkPass === password;
  };
};

var tony = new User('tony', '12345');

assertTripleEqual(tony.pass, undefined, "the args aren't accessible");
assertTripleEqual(tony.password, undefined, "private properties aren't accessible");

assertTripleEqual(tony.login('foo'), false, "methods can access private vars");
assertTripleEqual(tony.login('12345'), true, "methods can access private vars, again");

// EXERCISE:
// create a Backbone-like model that has get() and set() methods that work for arbitrary attributes, e.g.
//
//   var bob = new User();
//   bob.set('phone', '123-456-7890');
//   var bobsPhone = bob.get('phone');
