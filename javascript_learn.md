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
    字符串常见的操作如下:
    var s = "hello word"; s.length; //13 
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


    

## 函数
### 函数的定义和调用
    + 定义函数: 在javascript 中,定义函数的方式如下:
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

    变量abs 指向一个function() 函数对象; 注意咬在function 最后 要加一个 ';' , 表示赋值结束

    + arguments: javascript 赠送的关键字, 它只在函数内部起作用, 并且永远指向函数调用者传入的所有参数, arguments 类似 Array ,但他不是一个Araay:
    ```
    function foo(x){
        alert(x);
        for(var i =0; i<arguments.length; i++){
            alert(arguments[i])
        }
    }
    ```






    



        




        
        


            






    


    


    

