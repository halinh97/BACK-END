
var z = 'hello';
var x =true;
var y = 10;
var a = null;
var b = undefined;
var a1 = NaN;
var a2 = {
  name : 'a2',
  age: 10,
  show: function () {
    console.log("I'm a2");

  }
};
var t9 =[9,1,2,3,4,5];
var t10 =t9.filter(function (element) {
return element % 2 ==0;

});
//t9.splice(1,3,8);
var t11 = t9.slice(1,5);
//console.log(t9);
console.log(t11);
//array.splice(index,howmany,iteml,....,itemX)
//array.slice(start,end)
a2.name;
a2['name'];
a2
function show(message) {
  console.log(message);
}
show('hello');
show();

var t8 = function (message) {
  console.log(message);
}
t8('hellolo');

function callfunction(func) {
  func('hi');
}
callfunction(t8);


//operator
console.log(1=='1');
console.log(1==='1');
console.log(1=='1'&2=='2');
