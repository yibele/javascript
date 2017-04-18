

var a = ['A','B','C','D'];
/*

var m = new Map([['name','yibu'],['age',20]]);

m.forEach(function(value, key, map){
        console.log(`${key} = ${value}`);
    });

*/
/*
 *
var a = function(){
    for(i =1;i<10;i++){
    console.log(i)
    }
};
a();
console.log(i+1);

*/

/*

var scope = 'golbal';
function chescope(){
    console.log(scope);
    var scope = 'local';
    console.log(scope);
};

chescope();
*/
/*

var a = 4;
var b = a;
a = 3;
console.log(b)

var a = [1,2,3,4,4]
var b = a;
b[0] = 99;
console.log(a);
*/
/*
'use strict';

var xiaoming ={
    name: 'xiaoming',
    brith: 1991,
    age: function(){
        var that = this;
        function getAgeFromBirth(){
            var y  = new Date().getFullYear();
            return y-that.birth;
            }
        return getAgeFromBirth();
    }
}

age = xiaoming.age();
console.log(age);

*/
/*

function CO(){
    this.p = ' in constructed oject';
    this.alertP = function(){
        console.log(this.p);
        }

    this.x = 'this is in the function';

    }

CO.prototype.x = 'this is prototype';


var a = new CO();
var b = new CO();

console.log(a.x);
console.log(a.p);
console.log(b.x);
console.log(a.alertP());


**/
/**
function check(args){
    var actural = args.length;
    var expected = arts.callee.length;
    if(actural != expected){
        throw new Error("Wrong number");
    }
}

function f(x,y,z){
    check(arguments);
    return x+y+z;
}
*/

/*

function check(args){
    var actural = args.length;
    var expected = args.callee.length;
    console.log('args.length'+ args.length);
    console.log('this.length'+ args.callee.length);
}

function f(x,y,z){
    
    check(arguments);
    
}

f(1,2);
*/
/*
var o = {}

function f(x){
    console.log(`${x}`)
}

f.call(o,2);
*/

 var obj = {
        name:'yibu',
        age : 25,
        sex : 'male'
    } 

    function f(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.sex);
    }
//f();

f.call(obj,null);















