sessionStorage.setItem('key','value');
var sesGet  = sessionStorage.getItem('key');
sessionStorage.clear();
 sessionStorage.setItem('username','pawam')
 sessionStorage.getItem('username');
var removeItem =sessionStorage.removeItem('username')
// jsonstrings convert to objects 

var jsonString  = '{name":"pawan"}'
  var objS  ={
  name:"pawan",
  age:19
  }
var onjEx  =  sessionStorage.setItem('username',JSON.stringify(objS));
console.log(objEx.name);
var oyt = sessionStorage('usernme',jsonString)
var onjQw = JSON.parse(sessionStorage.getItem('usernme'));
console.log(usernme.name)