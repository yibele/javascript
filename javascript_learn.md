# javascript学习手册
## 1.基本语法：
-----
## 2.数据类型： 下面所说的数据类型中 Number， string，array ，对象， 都跟变量有区别！
-----
+ Number: javascript 不区分整形和浮点数，统一用Number表示，一下都是合法的Number类型：
    123;//整数123 0.456;//浮点数 NaN: //表示 Not a Number，当无法计算结果是用NaN表示；
    Infinity;//表示无限大，当之超过了javascript能表示的最大值得时候，就会表示成infinity

+ 字符串：字符串用单引号和双引号抱起来 ， 比如"abc", "xyz " 等都是字符串

+ 布尔值: 

+ 比较运算符: 需要注意的是（==） 和（===）不相同， 在javascript 中 == 会自动转换类型在
    进行比较，很多时候回得到非常诡异的结果， === 不会自动转换私自类型，最好不要使用==进行比较。 另一个例外的是，NaN 跟任何Number值都不相等，包括它自己； 
+ 数组  [] :javascript 的数字可以包含任何的数据类型，包括变量，funciton.  + 对象  {}: javascript 的对象是一组有 键值对组成的无序集合， 例如：
```
    var = person{
        name:'yibu',
        age:20,
        tags:['js','web','php'],
        hasCar:true,
        zipcode:null
    };
```
    javascript对象的键都是字符串类型，值可以是任意类型。获得一个对象的属性，我们可以使用
    对象变量.属性名得方式;
    person.name ; //bob
    person.zipcode ; //null

+ 变量: javascript中的变量， 变量名大小写英文，数字$和 \_组合,不能用数组开头，也不能是javascript的
    关键字；声明变量的时候用var声明一次，
    var a = 123; a = 'ABC';// a变为字符串

+ strict模式：
    在声明变量之前没有使用 var 的话， 就会成为全局变量， 使用var声明的变量不是全局变量， 他的范围被闲置
    在声明的函数体内;
    在ECMA在后续的模式中退出了strict 模式， 在此模式中， 强制使用var声明变量，未使用var的话会报错
    'use strict'; 在javascript中打入此行代码，开启strict 模式；

### 字符串 "" ''
--------
+ 字符串: javascript 的字符串是有 '', 和 "" 括起来的字表示。
    如果字符串中有 '  和 " 符号的话， 需要运用转衣服 \ 来进行转移;
    ASCII字符可以用 \x## 形式的十六进制表示， 例如： 
    '\x41' ； // 完全等于 "A"
    还可以用 \u####  表示一个Unicode 字符:
    '\u4e2d\u6587' ; 完全等同于 '中文'

+ 多行字符串:  多行字符号用 \n 写起来比较费时， 所以最新的ES6标准新增了一种多行表示的用法，用反引号 `....`表示:
    `这里是一个
    多行
    字符串`;  其实就是在每个换行后面自动加入了 \n 符号来进行换行

+ 模板字符串:
    要把多个字符串连接 ， 用 + 号
    在新的ES6标注语言中新增了一种表示方法， 更上面一种异样  也是在用`....` 符号， 把变量用 ${} 中。 这样就能
    不用 + 号了: 
    var a = 'xiaoming' ; var age = 20;  var message = `hellow , ${name} , you are ${age} now`!  数组头部插入若干元素，  shift 删除第一个元素并返回

+ 操作字符串
    字符串常见的操作如下: var s = "hello word"; s.length; //13 
    要获取字符串制定位置的字符， 使用下表操作:
    var s = 'hello word'
    s[0] ; //'h'
    s[1] ; //'e'
    
    *需要特别注意的是，字符串是不可变的，如果对字符串的某个所以分之，不会有任何错误，也没有任何效果*;
    var s = 'Test' ; s[0] = 'X' ; alert(s); // s仍然是'Test'

    *javascript 为字符串提供了一些常用得方法， 注意， 调用这些方法本身不会改变原有字符串，而是返回一个新的字符串*
```    
    toUpperCase() 方法， 把一个字符串全部变成大写：
    var s = 'hello' ; s.toUpperCase() ；//  HELLO;
    
    toLowerCase() 方法， 把一个字符串全变成小写;
    var s = 'Hellow' ; s.toLowerCase() ; // hellow

    indexOf() 方法, 把一个字符串出现的第一个位置返回; 如果没有找到返回 -1 区分大小写
    var s = 'hello word';  s.indexOf('world'); //返回 7   s.indexOf('World')// 没有找到返回 -1

    substring() 返回制定索引区间的子串:
    var s = 'hello word' ; s.substring(0,5)  // 从所以0开始到5 不包括5 返回 'hello'
    s.substring(7); //从索引7 开始到结束 // 返回'world'
```
### Array: javascript 的Array 可以包含任意类型， 并通过所以访问每个元素;
---- + 要获得Array 的长度，直接访问length 属性：
` var s =[1,2,3,4,5] ; s.length; //5 `
*请注意* 如果更改Array的length属性， 会更改Array的大小的变化:
```
var arr = [1,2,3,4];
arr.length; //4
arr.length = 6;
arr; // arr变为[1,2,3,undefined,undefined,undefined]
arr.length = 2; // [1,2]

```

+ Array 赋值可以通过索引进行修改 
`var arr = [1,2,3,4] ;  arr[0] = 102 ; //[102,2,3,4]`
*请注意* 如果索引的超过了范围， 那么会引起 Array的大小变化：
` arr[8] = 'x' ; // [1,2,3,4,undefined,undefined,x]`

+ indexOf() 跟String类似，Array也可以通过indexOf（） 来搜索一个指定的元素的位置：
    arr.indexOf(100); //元素100 的索引为 20  ; arr.indexOf(102);
    arr.indexOf('30') ; // 元素 '30' 的索引为 2

+ slice() : 就是对应String的 substring（）版本， 它截取Array的部分元素，然后返回一个新的Array:
    ```
    var arr = ['A1', 'b','c'];
    arr.slice(0,3); arr.slice(3);  
    ```
    ```如果不给slice（）传递任何参数，他就会从头截取所有元素。可以很容易的复制一个Array：
        var arr = ['a','b','c'];
        var aCopy = arr.slice()
        arr ===aCopy;
    ```

+ push 和 pop
    push() 项 Array 的末尾添加若干元素， pop() 则把 Array  的最后一个元素删掉：
    ```
    var arr = [1,2,3]
    arr.push("A","B");
    arr; //[1,2,3,"A","B"]
    =====================
    arr.pop();// pop()返回 "B"
    arr.pop(); // pop（）返回 "A"
    ```

+ unshift 和 shift  数组头部插入若干元素，  shift 删除第一个元素并返回
    跟push 刚好相反， 从头部插入若干的元素 ， 如果使用shift 的话是 Array 的第一个元素删掉：
    ```
    var arr = [1,2,3];
    arr.unshift('A','B');
    arr;// [1,2,3,'A','B']
    arr.shift(); //'1'
    arr.shift() ; //'2'
    ```

+ sort  排序
    sort() 可以对当前的Array排序， 他会直接修改Array的元素位置， 直接调用，按照默认顺序排序：
    var arr = ['B','C','A']
    arr.sort()
    arr; //['A','B','C']

+ splice ： 删除元素
    splice（）方法是修改Array 的"万能方法" ， 它可以从指定的所以开始删除若干的元素，然后从该位置添加若干元素：
    ```
    var arr = ['Micorosoft', 'Apple','Yahoo','Aol','Excite','Oracle']
    arr.splice(2,3, 'Google','Facebook'); // 从索引2 开始 ， 然后删除3 个元素 ； 返回删除的元素 ['Yahoo', 'Aol', 'Excite']
    arr;//  ['Micorosoft', 'Apple','Google','Facebook','Excite','Oracle']
    arr.splice(2,2); //从索引2 开始 删除两个元素
    ```

+ concat() : 字符串连接
    concat() 方法把当前的Array 和另一个Array链接起来，并返回一个新的Array：
    ``` concat 并不会修改当前的Array ，而是返回一个新的Array
    var arr = ['A','B','C'];
    var added = arr.concat([1,2,3])
    added;  // ['A','B','C',1,2,3]
    arr ; //['A','B','C']  
    ```

+ join() : 数组转化为字符串！ 
    ``` 如果Array的元素不是字符串， 将自动转化为字符串后再连接
    var arr = ['A','B','C',1,2,3];
    arr.join('-'); // 'A-B-C-1-2-3'
    ```

* 结论： javascript 的数组不像php 中的数组， 没有 php 中的 关联数组！ 

### 对象 ： javascript的对象是有若干的键值对组成 ， 有符号 {....} 表示 ，键值对以 xxx:xxx 表示， 用， 隔开。最后的
键值对不能加 ‘，’
----
``` 
var xiaoming = {
    
}
```
+ 访问不存在的属性不报错， 返回undifined 。 
+ 对象是动态类型，可以自由的一个对象添加和删除属性：
```
var xioming = { name:'小明'}
xiaoming.age = 123;
xiaoming.age; //123
```

+ 如果想知道对象是否有某艺术性， 可以用in操作符：
``` 不过如in 判断一个属性存在， 这个属性也有可能是xiaoming 继承到的
在试验的时候我 打 
name in xiaoming ; 返回的是错误 ！ 因为对象的键都是字符串的类型！ 以下做法才是对的
'name' in xiaoming; //true
'grade' in xiaoming ; //false
'toString' in xiaoming;    //true   toString 定义在 object 对象中，而所有的对象最终都会在原型链上只想object
```
+ hasOwnProperty() 如果判断属性是否xiaoming自身的拥有， 而不是集成得到的，可以用 
```
xiaoming.hasOwnProperty('name') ; //true 
xiaoming.hasOwnProperty('toString') ; //false
```

### Map 和 Set : javascript 默认对象表示方法{} ， 可以视为其语言的Map 或 Dictionary ,但有一个问题就是，键必须是字符，但实际上Nubmer类型也可以符合，也很合理；所以ES6 引入了新的类型Map 。 

+ Map 是一对键值对的结构， 具有很快的查找速度 
```举个例子， 如果根据同学的名字查找对应的成绩， 如果用Array 实现的话：
var names = ['Micheal', 'Bob', 'Tracy']
var scores = [95,75,85]
给一个名字 ， 首先查找 名字在name 中的位置， 然后查找scores 里面的对应值；
```

``` 如果使用Map 实现， 只需要一个“名字”-“成绩” 的对照表，直接根据名字查找成绩
var m = new map([['Micheal',95],['Bob',75],['Tracy',85]])
new map 时候需要添加一个二位数组
m.get('Micheal');// 95
```
* 说明： 初始化Map 需要一个二维数组， 或者初始化一个空Map，Map具有以下方法：
``` get set delete has 四个方法
var m = new Map()
m.set('Adam',67)
m.set('Bob',59)
m.has('Adam') ; //是否存在key 'Adam':    返回 true
m.get('Adam') ; // 返回 Adam 的值  67
m.delete('Adam') ; // 删除 key 'Adam'
m.get('Adam') ; // undefined
m.set('Adam',00) //修改 Adam 的之道 00
```

### iterable : ES6 标准引入iterable 类型 ， Array Map 都是iterable 类型；
+ for .... of 循环遍历集合
```
var a = [1,2,3,4]
var m = new Map([[1,'x'],[2,'y'],[3,'z']])

for (var x of a) {
    alert(x)
}
for (var x of m){
    alert(x[0] + '=' + x[1])
}
```

+ 然而更好地方法是直接使用iterable 内置的 forEach 方法, 接受一个函数, 以Array 为例:
```
var a = ['A','B','C']
a.forEach(function(element, index, array){
        alert(element)
});
```
**总结:** element 为 Array 的 值,依次输出, 在上述例子中为 A,B,C . index  为数组的索引 0,1,2  array: 是数组本身 , 但是循环输出四次

+ Map 的回调函数参数一次为 value, key 和 Map 本身
``` 
var m = new Map([['name','yibu'],['age',20]]);
m.forEach(function(value, key, map){
        console.log(`${key} = ${value}`);   值得注意的是 , 如果 要用 ${} 模式的变量 那么必须在 '`'号里 , 而不是 " '  " 里面 
    })

当对某些参数不感兴趣, 那么javascript 会自动忽略 ,
m.forEach(function(element){
        console.log(element);
    });

```

## 3. 变量 
### 3.1 变量的类型
+ javascript 中的变量是无类型的(untype) , 这以为着它可以存放任何的值; 例如 javascript 中, 可以先把一个数字赋值给
变量,然后再把一个字符赋值给它.
    ```
    i = 10 ;        typeof(i)  返回 'number'
    i = 'ten';      typeof(i)   返回'string'  
    ```
+ javascript 可以快速,自动的将一种类型转换成另外一种类型; 甚至可以 将一个字符串加在数字上; 如下:
这种特性也让我产生了怀疑, 如果字符串是 '数字' 的形式的话会出现什么样子的结果,于是试验了一下,
    ```
    var i =10;
    var j = '20'; 
    j+i = '2010' ;
    i+j = '1020';
    这个时候想到 Number 对象和 String 对象的相加结果

    a = new Number()
    b = new String()
    typeof(a+b) ;    返回的结果是 'string'
    ``` 
+ 字符串和数字相加, 结果是字符串 ;此时又想到如果 数组 和 字符串相加是什么结果?  数组加上数字什么结果? 继续试验;
    ```
    var a = [1,2,3,4]
    var b ='string'
    typeof(a+b)  ;  返回结果是 'string' !
    a+b  ;  返回结果'1,2,3,4string'
    var c = 102
    a+c  '1,2,3,4102'

    var a = {name:1,age:2}
    a+c ;  返回的是 '[object object]102'
    (a+c).length   返回的是18 
    ```
+ **结论** 不论是数组, 数字, 还是字符串, 相加之前全部先转换成字符串, 然后在进行相加;
### 3.2 变量的声明
+ javascript 使用一个变量前必须先声明! 变量的生命是使用关键字var 声明的, 如下:
    ```
    var i;
    var sum;
    var i,sum;
    var message = 'message';
    var i =0,i=0,k=0;
    ```
+ 变量的生命是永久性的, 也就是说如果用delete运算符来删除这些变量的话, 会引发错误!
    `delete a`   返回 false
#### 3.2.1 重复的声明和遗漏的声明
+ 重复声明合法
+ 如果没有用var 声明变量, 那么这个变量将成为全局变量, 不仅在函数体内, 在函数体外也将声明
    ```
    var a = function(){
        for(i =1;i<10;i++){
        }
    };
    a();
    console.log(i+1);  返回的 11
    ```
### 3.3 变量的作用域
+ 局部变量的优先级高于全剧变量, 如果两个变量名字相同, 那么局部变量会有效的隐藏全局变量!
    ```
    var scope = 'global';
    function checkscope(){
        var scope = 'local';
        console.log(scope);
        }
    checkscope();    输出 'local'
    ```
#### 3.3.1 没有级块的作用域
+ 函数中定义的所有变量,无论在哪里声明,在哪里都是有定义的!
    ```
    var scope = 'global';
    function checkscopt(){
        alert(scope);
        var scope = 'local';
        alert(scope);
    }
    返回 undfinded local
    虽然 第一次 alert 的时候并没有顶 scope 是多少, 但是只要在下面定义了, 在整个函数中 全局变量 scope 就处于隐藏状态!

    上面的函数相当于如下:
    function checkscopt(){
        var scope;
        alert(scope);
        var scope = 'local';
        alert(scope);
        }
    ```
#### 3.3.2 未定义变量和为赋值变量 
+ 相关内容比较简单

### 3.4 基本类型和引用类型
+ 数值,布尔,null,和未定义值属于基本类型
+ 对象,数组和函数属于引用类型
应该怎么理解上面这段话的意思?
+ 基本类型在内从中有固定的大小!
+ 引用类型则不一样, 对象可以具有任意的长度, 数组来说也是, 同样函数也可以包含任意数量的javascript代码;因此不能将
它们存放在固定的内存中;相反,变量储存的是对这个值得引用, 通常储存的是指针,或者内存地址.
    ```
    var a = 4;
    var b = a;
    a = 3;
    alert(b) ; 返回的是4 

    但是如果换成数组那么就会如下
    var a = [1,2,3,4]
    var b = a ;
    a[0] = 99;
    alert(b) ;   [99,2,3,4]
    ```
**说明** 第二个得时候, b = a 的时候并不是将 整个本身数组赋值给b , b拿到的只是数组得一个引用.. 在执行 b = a 的时候 数组还是
只有一个, 只是有了两个对他的引用!
+ 最后有一个有意思的东西, 就是string ,  这个在后面讨论!
### 3.5 无用储存单元的收集
    
### 3.6 作为属性的变量
+ 变量和 对象的属性 到底有没有却别?  比如 var i  和 o.i 是否有什么区别
答案是没有! 

### 3.6.1 全局对象
+ 当javascript 的解释器开始运行的时候, 它首先要创建一个全局对象(global object) , 而这个全局对象的属性就是javascript 的全局变量!
因此,创建一个全局变量的时候, 相当于就是定义那个全局对象的属性!
+ 此外 javascript 解释器还会用用预定义的值和函数来初始化全局对象的许多属性.例如, 属性Infinity, parseInt 和 Math 分别引用了数值
Infinity,预定义的函数parseInt() 和预定义对象Math.
+ 那么局部变量是什么呢? 他们也是一个对象的属性, 这个对象被称为调用对象(call object). 在执行一个函数的时候,函数的参数和局部变量
都是作为调用对象的属性而储存的. 
**结论** 因此,全局变量储存在一个  -->全局对象上面<-- 而 函数的参数和局部变量存储在 调用对象 属性中储存.

## 4 函数
### 4.1 函数的定义和调用
+   定义函数: 在javascript 中,定义函数的方式如下:
    ```
    function abs(x){
            if();
    }
    ```
**由于javascript的函数也是一个对象, 上述定义的abc() 函数实际上是一个函数对象, 函数名 abs 可以视为指向该函数的变量 因此,第二种定义方式
如下**
    ```
    var abs = function(x){
        
    };
    ```

+   变量abs 指向一个function() 函数对象; 注意咬在function 最后 要加一个 ';' , 表示赋值结束
+   调用函数时候使用运算符() 调用; 里面的参数只有在执行函数的时候才会被定义,一旦函数返回,他们就不存在了;
+   函数print() 不包含return语句,因此它返回的undifined

#### 4.1.2 Function() 构造函数
+   javascript 的构造函数是 任意一个普通函数 在创建类的时候 就会被称为构造函数！ 意思就是说 只有函数才能new
+   除了function语句的定义,还有一种构造方喝new运算符动态的定义函数: 
    `var f = new Function("x","y","return x*y");`
这行代码跟如下一样:
    `var f = function(x,y) {return x*y};`
+   Function() 最后一个参数是函数主体,其中可以包含任何的javascript语句,
+   传递给Function() 的参数中,没有一个说明它要创建函数的名字, 因此未命名函数有时候较为"匿名函数"

+ **为什么要使用构造函数** 原因有两个： 
+       第一 : 构造函数允许我们动态的建立和编译一个函数，他不会将我们闲置在function语句预编译的函数体中。这样带来的后果就是
        每次调用一个函数时，FUnction（） 构造函数都要对它进行编译，因此循环体中不想使用构造函数
        这句话应该怎么理解？
        ```
        new 表达式是配合构造函数使用过的， 
        首先是定义构造函数: 
        function CO(){
            var x = 'this is a local varable';
            this.p = "I\'m in constructed object";
            this.alertP = function (){
                alert(this.p);
            }
        }
        var o2 = new CO();
        ```
+       上面这一行代码的分步骤的意思就是：
        ```
        var CO = {}
        obj.__proto__ = CO.prototype;
        CO.call(obj);
        return obj
        ```

        **说明** ： 
        第一行：创建一个空对象obj;
        第二行：将这个空__proto__成员指向构造函数对象的prototype成员对象，最关键的一步；
        第三行：将构造函数的作用域复制给新的obj对象，因此 CO 的 this 就指向了新的对象obj，
        第四行：返回新的对象obj
+       现在就可以说明为什么要使用构造函数了：
        具体看上面函数的第二行： 新创建对象obj.__proto__ 这个属性被赋值给了一个CO 的原型 ，这意味着，构造函数
        创建的所有对象可以共享相同的原型，意味着构造函数创建的所有对象都继承自一个相同的对象 。
        ```
        CO.prototype.x = 'this is prototype';

        var a = new CO();
        var b = new CO();

        console.log(a.x);   返回 'this is a prototype'
        console.log(b.x);   返回 'this is a prototype'

        console.log(a.p);   返回 'in construct object' 

        难道说 定义 co.prototype.x 和 在函数内定义 this.x  开始一样的吗
        留到prototype 的时候在来回答！

        回答： this.x 只是对象本很的属性 ，只有对象才可以使用这个x 
               co.prototype.x 是x的原型的属性， 所有继承 CO 的对象都可以使用这个属性；


        ```



    

#### 4.1.3 函数直接量
    ```
    function x(x){return x*x;} function语句
    var x = new Function('x','return x*x') //Function()构造函数
    var f = function(x){return x*x;}  // 函数直接量
    ```

### 4.2 作为数据的函数
+   javascript 的函数并不只是一种语法,还可以是数据. 意味着 可以将函数赋值给变量,函数的属性,
数组的元素中,甚至可以传递给函数.
+   要理解这点:考虑如下函数定义:
    `function square(x){return x*x};`
+   这个定义创建了一个番薯对象,并且把这个对象复制给了square变量.
    ```
    按照我的理解, squere拿到的只是函数对象的引用, 可以赋值给其他变量:
    var a = squere(4) ; 返回 16
    var b = squeare;  这样 b 也指向了 Function(){return x*x} .
    var c = b(5)  ; 返回25 
    ```
+   当然还可以赋给对象的属性中,这样的话我们称之为方法.
    ```
    var o = new Object()
    o.square = new Function('x','return x*x');
    y = o.square(15)
    ```
+   函数可以没有函数名,就像我们将函数赋值给数组元素时的那样:
    ```
    var a = new Array(3); 
    a[0] = function(x){return x*x};
    a[1] = 20;
    a[2] = a[0](a[1])   a[2]() 调用函数 然后将 a[1] 当为参数传递过去;
    ```
+   一下是一个详细的例子:
    ```
    function add(x,y){ return x+y};
    function subtract(x,y) { return x-y };
    function multiply(x,y) { return x*y };
    function divide9(x,y) { return x/y };

    下面的函数是将某一个函数作为参数
    它的另外两个参数是两个运算数

    function operate(operator, operator1, operator2){
        return operator(operator1, operator2);
    }

    我们就可以用这个函数运算 (2+3) + (4*5) 

    var i =operate(add,2,3) + operate(multiply,4,5);

    ===============================================
    下面我们用直接量实现上面这个函数

    var operators = new Object();
    operators["add"] = function(a,b){return a+b};
    operators["multiply"] = function(a,b) { return a*b};
    operators["divide"] = function(a,b){ return a/b};

    将运算符名字传入参数中,其他两个参数传入运算数
    然后从关联数组中查找function()

    function operate2(op_name,operand1,operand2){
        if(operators['op_name']==null)
            {return null}else{
                return operators['op_name'](operand1,operand2)
            }
        }

    这样 我们可以调用这个函数输出 ('hello' + " "+ 'world')

    var j = operate2('add','hellow',operate2('add',' ','world'));
    ```
### 4.3 函数的作用域：调用对象
+   用var语句声明的局部变量创建后作为调用对象的属性，而且函数的形参也可用于对象的属性；

+   除了局部变量和形参外，调用对象还定义了一个特殊属性，名为 arguments.  所以说，其实函数里面的arugments是调用对象里的arguments.

### 4.4 函数的实际参数：Arguments对象
+   调用对象中的 arguments 用来引用 Arguments 对象。 它就像一个数组，可以按照数字获取传递给函数的参数值。

+   尽管函数的参数是固定的，但调用这个函数时，传递给他的参数数目却可以任意，arguments[]允许完全的存取那些实际参数值;
        ```
        加入定义了一个函数f , 传递给他的实际参数x ， 但是如果你用两个实际参数调用这个函数，那么在函数体内通过
        x 和 arguments[0] 可以去到第一个实际参数，第二个实际参数智能通过 arguments[1] 来获取；
        此时 arguments.lenght 的值 为2 ；

        function f(x,y,z）{
            if(arguments.length != 3){
                    throw new Erro('function f called with 3 arguments');
            }
        }

        还可以直接这样子用 ， 比如Math.max（） 方法定义如下：

        function max(){
            var m;
            for(var i=0;i<arguments.length,i++){
                if(arguments[i]> m )
                    m=arguments[i];
            }
            return m;
        }
        ```
#### 4.4.1 属性 callee
+   Arguments对象还定义了callee属性， 用来引用当前的执行函数；
        ```
        function (x){
            if (x<1) return 1;
            return x * arguments.callee(x-1);
        }
        ```
### 4.5 函数的属性和方法
+   函数既然可以当做数值, 并且可以通过Function对象来创建, 那么这就说明函数其实是一个对象;

#### 4.5.1 属性 length
+   函数的length 属性 是一个只读属性,返回的是函数需要的实际参数的数目. 函数在调用的时候可以传递给它
    任意的参数.Function 对象的length属性确切的说明了一函数声明的参数的个数

+   Function.length 可以通过 arguments.callee.length 属性访问到
        ```
        function check(args){
            var actrual = args.length;          args 的长度
            var excpec = args.callee.length;    要求的参数个数, Function.length

            if(actrual != excpec){
                throw new Error('wrong expected number');
            }
        }

        function f(x,y,z){
            check(arguments);
            return x+y+z;
        }
        ```
        现在遇到一个很严重的问题 就是 函数中的this 这个值代表的是什么??? 等到后面第五章我在回来回答这个问题;

#### 4.5.2 属性 prototype
+   每个函数都有一个prototype 属性,它引用的是预定义的原型对象.原型对象在使用new运算符把函数作为构造函
    使用的时候起作用, 在第五章详细讲解

#### 4.5.3 定义自己的函数属性
+   什么时候需要定义函数的属性?
        在函数调用过程中,需要一个始终不变的全局变量,使用Function对象的属性比定义一个 全局变量(这样使得命名空间
        变得混乱) 更加方便!
        ```
        创建并初始化
        因为函数声明在执行代码前处理, 所以在函数声明前不能真正的实现这个赋值
        unqueInter.conter = 0;

        //下面的函数每次被调用返回的值都不同; 
        
        >而且都是根据自己的静态属性跟踪上次返回的值

        function unqueInter(){
            return unqueInter.conter++;
        }
        ```
        **总结** 其实函数的属性跟一个全局变量没有什么却别,只是在命名空间,和方便使用,更好区分变量的时候用到; 
        比如上面这个例子中, 如果将 `unqueInter`定义为 `counter`的话 在其他函数调用的时候就会混淆;
#### 4.5.4 方法 apply() 和 call() 

+   通俗的说明就是如下函数;

```
    function getAge(){
        return this.age;
    }

    当这样定义函数的时候，很明显这个是一个方法， 但是直接使用的时候会返回 undifined 。 因为this没有指向任何对象，它
    就会指向windows。 那么想让this指向一个对象的话，就需要用apply 或者 call 来指定  this 引用的对象；

    getAge.apply(xiaoming,null); 后面的null 是需要输入的参数； 
```

    当我们直接调用
+   javascript给所有的函数都定义了 这两个方法 ;  apply() 和 call() 第一个参数是要调用的函数的对象,并且在函数体内这个对象是 this ; 
    如下;
    ```
    f.call(o,1,2)
    相当于
    o.m = f;        创建一个对象o, 然后在创建一个属性, 引用f
    o.m(1,2);       执行属性m 
    delete o.m;     删除o.m 
    

    下面是另外一个例子
    
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
    f();
    返回:
    undefined
    undefined
    undefined

    但是如果通过call调用
    f.call(obj,null);
    那么返回的:
    yibu
    25
    male
    ```
+   apply() 方法跟call() 方法一样,只是传递的是数组.

## 5 对象

### 5.1 对象和属性

#### 5.1.1 对象的创建
+   对象是由运算符 new 创建的 , 这个运算符之后必须是用于初始化对象的构造函数名;
        ``` 例如我们创建一个空对象
        var o = new Object(); 
        ```
+   对象直接量提供了另一种初始化对象的方式,可以把对象的说明直接嵌入到javascript 代码中; 
        ```
        var circle = {x:0,y:0; radius:2}
        var homer = {
            name: 'Home Simpson',
            email: 'yibeel@163.com'
        }
        ```
#### 5.1.2 属性的设置和查询
+   使用运算符 '.'  右边是对象的引用(通常是包含了该对象引用的变量) , 右边的十对象的属性; 
+   在创建变量的使用我们需要通过var进行声明,但是定义对象属性的时候我们绝不能这么做

#### 5.1.3 属性的枚举
+   可以通过for/in循环提供的一种遍历; 列出的属性没有特定的顺序, 只能列出用户定义的属性
        ```
        function DisplayPropertyName(obj){
            var name = '';
            for(name in obj){
                name += name +'\n';
            }
        }
        ```
#### 5.1.4 未定义的属性
+   未定义的属性的值为 undefined 
+   通过delete 来删除一个对象的属性; delete 并不是紧紧把对象属性设为Undefined , 是真正的从对象中
    移除了该属性

### 5.2 构造函数
+   要创建一个定义了带有属性的对象,需要编写一个构造函数在新的对象中创建并初始化这些属性;它是具有两个特性的 javascript函数:

    * 它由new 运算符调用; 
    * 传递给它的是一个对新创建对象的引用,将该引用作为关键字this的值,而且还要对新创建的对象进行
    适当的初始化.
    传递给构造函数的是一个对新的创建的对象的引用, 这个引用在构造函数内可以用 this这个关键字来保存;
    ```
    定义构造函数

    function Rectangle(w,h){
        this.width = w;
        this.heigth = h;
    }

    var rect1 = new Rectangle(1,2)
    var rect2 = new Rectangle(3,4)
    ```

+   构造函数只是初始化this传进来的对象, 并且没有返回值;但是,如果构造函数返回一个对象值,如果这样做,被返回的对象就成了new表达式的值
    在这种情况下,this值所引用的对象就被抛弃了;

### 5.3 方法

+   所谓的方法,其实就是通过对象调用的javascript函数; 如果有一个函数f 一个对象o ,就可以如下创建一个m方法
    ` o.m = f` 
    如果要调用那么: `o.m()`
+   方法有一个很重要的属性,在方法的内部,关键字this就变成了调用该法的对象. 
+   关于关键字this,任何一个方法的函数都会到的一个额外的实际参数, 即调用该函数的对象.
+   方法和函数的却别就在于 ==> 方法是用来操作this对象 , 而函数通常是独立的,不需要使用this
        ```
        function compute_area(){
            return this.width * this.heigth;
        }

        var page = new Rectangle(1,2);
        page.area = compute_area;

        var a = page.area();  //调用
        ```
    上述例子有一个很大的缺陷,就是没有将方法定义的时候, 那么函数就不能执行; 
+   为了弥补这个麻烦, 就运用构造函数来修改一下;
    ```
    首先定义一堆方法
    function Rectangle_area() { return this.width*this.height}
    function Rectangle_perimeter() { return 2*this.width + 2*this.height}
    
    定义一个构造方法,不仅要初始化属性,还要给方法赋值

    function Rectangle(w, h){
        this.width = w;
        this.height = h;

        定义对象的方法;
        this.area = Rectangle_area;
        this.perimeter = Rectangle_perimeter;
    }

    var r = Rectangle(2,2)
    var area = r.Rectangle_area();
    var perimeter = r.Rectangle_perimeter();
    ```
+   上述方法有一个缺点, 构造函数Rectangle() 对它所要初始换的对象的7项属性都进行了设置,即使其中5想属性的值都是常量;(属性中只是一个名字
    所以, 其实5 个都是常量)
+   因此javascript 引入了一种解决该问题的放方法,即它允许一个对象集成圆形对象的属性.

### 5.4 原型对象和继承
+   上面的例子中我们已经知道， 用构造函数把方法赋值于对象，效率非常的低。这样做可以做到构造函数创建的每个对象都有相同的方法；

+   javascript 的所有的对象都继承原型对象的属性。 并且每个对象都肯定有一个原型对象。

+   对象的原型是由创建 初始化该对象的构造函数决定。 所以说 相同的构造函数的原型是一样的。==>原型和prototype是不一样的，只有函数才有
    prototype属性，而对象是没有prototype属性的。 

+   javascript 所有的**函数**都有prototype属性，它引用一个对象。 如下代码说明只有一个函数才有prototype 。 
```
    function a(){}
    var b = new a();
    a.prototype.x = 'a.x'
    b.x ; 返回 a.x
    b.prototype.x = 'b.x'  这个时候回报错 
```    
+   继承是**查询一个属性的时候自动发生**的。所以说 只有当查询的时候， 会看起来像是对象的属性。
        这就意味着  第一，对象不用拿出内存空间来储存这些属性
                    第二， 就算在对象被创建后再添加属性到原型中，对象也能集成属性。

+   下面引出一个问题，一个原型会被很多的实例继承 ， 那么javascript是怎么处理读写之间的不平衡？如下代码：
```
    function a(){
        this.x = 'in the construct function ';
    }

    var b = new a();
    a.prototype.x = 'in the prototype function';
    console.log(b.x) ;  返回的是 'in the construct function';
```
    **结论** : javascript 在查询属性的时候， 首先查询对象中有没有该属性， 之后才会去查询原型中有没有该属性。

+   属性的继承只发生在读属性时候， 而在写属性时不会发生。 如果你设置的 o 对象的属性 p 是从 o 的原型中继承
    而来的， 那么当你 修改 o.p 的属性的时候， 你会在对象 o 中新建一个 属性p，这样当javascript读取o.p 的时候
    发现o中已经有了 属性p , 这个时候就会屏蔽掉 o的原型当中的属性p；

+   这里有一个我一直迷惑的问题：
```
    function a(){}

    a.x 和 a.prototype.x 的区别是什么？

    a.x = 'a.x'
    a.prototype.x = 'a.prototype.x'

    var b = new a()
    b.x    返回的是a.prototype.x
```
    所以说a.x 只是一个函数的属性， 它相当于只是一个变量。 而a.prototype.x 是 a 所创建的里面所有对象的属性。

+   下面这个例子可以很好地说明对象何其原型对象

```
    用原型对象定义一个类 Circle 类

    function Circle(x,y,z){
        this.x = x;
        this.y = y;
        this.r = z;
    }
    
    构造函数初始化
    new Circle(0,0,0);

    定义一个常量PI
    Circle.prototype.PI = 3.14

    定义一个函数用来计算周长;
    function circle_circumference(){ return 2*this.r*this.PI};

    在Circle中的原型中添加这个方法
    Circle.prototype.circumference = circle_circumference;

    用匿名函数定义另一个方法;
    Circle.prototype.area = function(){ return this.PI * this.r * this.r};

    Circle 类已经定义了,
    var c = new Circle(0,0,1.0)
    c.circumference() 调用函数,返回周长
    c.area();  调用函数,返回周长

```

### 5.5 面向对象的javascript 
+   对比java类的成员有四中可能的基本类型: 实例属性, 实例方法, 类属性, 类方法; 现在我们每一个开始作对比

#### 5.5.1 实例属性
+   在Circle类中,每一个对象都有一个属性r;这个r就是实例属性, 例如 有一个对象 c 是Circle类的一个实例, 那么这样
    引用实例属性:`c.r`

+   实例方法和实例属性非常像, 只是他是一个函数;实例方法用关键字this来引用它们要操作的对象
    或实例.
#### 5.5.2 实例函数
+   javascript 中,给类定义个实例方法是,把构造函数的原型对象中的一个属性,设置为函数值来实现的.
    这样,那个构造函数创建的所有对象都会共享一个以集成的对函数的引用;

#### 5.5.3 类属性
+   类属性是与类相关的变量,而不是和类的每个实例相关联的变量; 无论一个类创建多少个实例,每一个
    类属性都只有一个副本.
+   类属性是全局变量,但是他们与一个类关联在一起
+   定义类的属性通过如下方法:
```
    Circle.PI = 3.14
```

#### 5.5.4 类方法
+   同样类方法是和类关联在一起的方, 而不是类的实例关联.
+   要调用类方法, 必须使用类来调用. 如 `Date.parse()` 
+   由于不能通过特定的对象调用, 所以 里面的关键字this也没有意义了;

#### 5.5.5 例子: 
```
    function Circle(radius){
        this.r = radius;
    }

    Circle.PI = 3.14;

    >下面的函数计算圆的面积
    function Circle_area(){return Circle.PI*this.r*this.r}

    >将函数Circle_area赋值给Circle的原型,使他成为一个方法
    Circle.prototype.area = Circle_area;

    >
    function Circle_max(a,b){

        if(a.r>b.r)
            return a.r
        else
            return b.r
    }
```
#### 5.5.6 例子复数
```
    /*
    *
    *第一步，创建构造函数
    */
    
    function Complex(real, imaginary){
        this.x = real           定义实数部分
        this.y = imaginary      定义虚数部分
    }

    /*第二部，创建实例属性、方法*/
    下面是得到复数的大小，即从(0.0) 点到复数点的距离；
    Complex.prototype.magnitude = function(){
        return Math.sqrt(this.x*this.x + this.y*this.y); 
    }

    返回复数的相反数
    Complex.prototype.negative = function(){
        return new Complex(-this.x,-this.y);
    }

    将Complex对象转化成一个字符串
    这是再把Complex对象作用字符串是调用的函数
    Complex.prototype.toString = function(){
        return "{" + this.x + "," + this.y + ""
    }
    /*第三部定义类方法
     *常量和其他必须的类属性，作为构造函数自身的属性
     *类方法无法调用this关键字
     */

     复数加法
     Complex.add = function(a,b){
         return new Complex(a.x+b.x,a.y+b.y);
     }

     复数减法
     Complex.subtract = function(a,b){
         return new Complex(a.x-b.x,a.y-b.y);
     }

     下面是一些有用的预定义复数
     它们被定义为类属性，这样他们就可以被用作常量。 实际上他们并不是只读；
     Complex.zero = new Complex(0,0)
     Complex.one = new Complex(1,0)
     Complex.i = new Complex(0,1)
```

#### 5.5.7 超类和子类
+   类Object是最通用的类， 其他所有的类都是专用化了的版本；或者是Object是所有类的超类
    所有的类都继承了Object的基本方法；

+   原型对象本身是个对象，他是有构造函数Object() 创建的，这意味着原型对象继承了Obejct.prototype
    属性。
+   假设类Complex 的对象就继承了 Complext.prototype, 后者有继承了Obejct.prototype;在Complex对象中
    查询某个属性的时时，就先查询对象本身，在查询Complext.prototype,在查询Object.prototype ；如果
    已经定义了前者， 那么后者将被隐藏；

+   假定我们要生成类Complex的一个子类，以便能添加一些新方法。要做到这一点只需将新类的原型对象
    是Complex的一个实例，这样他就能继承Complex.prototype;

```
    以下是子类的构造函数
    function MoreComplex(real, imaginary){
        this.x = real
        this.y = imaginary
    }
    我们将它的原型对象作为Complex对象；
    这就意味着新类的实例将继承MoreComplex.prototype
    后者由Complex.prototype 继承而来
    Complex.prototype 有从Object.prototype 继承而来
    MoreComplex.prototype = new Complex(0,0);
    下面给子类添加一个新方法和新特性
    MoreComplex.prototype.swap = function(){
        var tmp = this.x;
        this.x = this.y;
        this.y = tmp;
    }
```

### 8.6 作为关联数组的对象
+   对象属性可以用两个符号
```    
    object.property
    object["property"]
```
+   两条语句中间的区别在于， 前者是属性名是标识符，后者的属性名确实字符串。这一点很重要；

+   标识符和字符串的区别； 标识符必须被逐字输入，它们不是一种数据类型，因此程序不能对他们进行操作。
    这句话的意思就是 标识符就跟常量一样。 系统只是去运行或者说解释它 ， 而不能进行操作。
    但是用[] 存取对象属性时候，属性名是字符串，可以在程序运行的过程中操作并创建他们，例如如下
    代码:
```
    var addr = '';
    for(i=0;i<4;i++){
        add += customer["address" + i]+ '\n';
    }
```
+   这一段代码读取了customer对象的属性 address0,address1,address2,address3 ， 并且将它们链接起来；

+   用数组读取属性的时候，会用在以下情境下：
    比如当 对象的属性不知，需要由用户输入的时候。
    
    for (stock in portfolio){
        var value += get_share_value(stock) * portfolio[stock];
    }
```

### 5.7 对象的属性和方法
+   javascript 所有的对象都由类 Object 继承而来。不论什么对象，都支持Object类定义的属性和方法；
    由于这些方法的特殊性， 使得他们具有特殊的重要性;

#### 5.7.1 constructor 属性
+   每个对象都有constructor 属性， 它引用的是用来初始化该对象的构造函数;
    例如，如果用构造函数Complex()创建了一个对象o,那么o.constructor 引用的就是Complex;
+   javascript 会为我们定义的每一个构造函数都创建一个原型对象，并将原型对象赋值给构造函数的
    prototype属性中。原型对象并非空，它有一个constructor属性，用来引用构造函数；
#### 5.7.2 toString() 方法
+   该函数返回了一个字符串，字符串代表调用他的对象的类和值;当javascript需要将一个对象转换成字符
    串的时候就会调用这个对象的toString() 方法;
#### 5.7.3 toLocalString() 方法
+   

#### 5.7.4 valueOf() 方法
+   将对象的能代表明确的原始值得属性返回。 比如Number 或者 Boolen都有明确的值
+   优先级比toString（） 高， 所以如果定义了valueOf（）方法，并且需要调用toString（）方法的时候
    一定要明确调用toString（）
#### 5.7.5 hasOwnProperty()方法
+   如果局部定义了一个非继承的属性，属性名是由一个字符串实际参数指定，那么该方法将返回true；否则放回false;
```
    var o = new Object()
    o.hasOwnProperty("undef") ;  返回false;
    o.hasOwnProperty("toString"); 返回false; toString 是个继承方法
    Math.hasOwnProperty("cos") ; 返回true
```
#### 5.7.6 isPrototypeOf() 方法
+   如果对用对象是实际参数制定的对象的原型对象，该方法返回true；否则返回false；有点像constructor属性；
```
    var o = new Object();
    Object.isPrototypeOf(o);    true ; o.construcotr = Object
    Object.isPrototypeOf(o) ;   false;
```
### 6 使用正则表达式的匹配模式

### 7 javascript 的更多主题


