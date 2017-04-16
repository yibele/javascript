# javascript学习手册
## javascriopt 快速入门：
1.基本语法：
2.数据类型： 下面所说的数据类型中 Number， string，array ，对象， 都跟变量有区别！
    +Number: javascript 不区分整形和浮点数，统一用Number表示，一下都是合法的Number类型：
        123;//整数123 0.456;//浮点数 NaN: //表示 Not a Number，当无法计算结果是用NaN表示；
        Infinity;//表示无限大，当之超过了javascript能表示的最大值得时候，就会表示成infinity

    +字符串：字符串用单引号和双引号抱起来 ， 比如"abc", "xyz " 等都是字符串

    +布尔值: 

    +比较运算符: 需要注意的是（==） 和（===）不相同， 在javascript 中 == 会自动转换类型在
        进行比较，很多时候回得到非常诡异的结果， === 不会自动转换私自类型，最好不要使用==进行比较。
        另一个例外的是，NaN 跟任何Number值都不相等，包括它自己；

    +数组  [] :javascript 的数字可以包含任何的数据类型，包括变量，funciton.

    +对象  {}: javascript 的对象是一组有 键值对组成的无序集合， 例如：
        var = person{
            name:'yibu',
            age:20,
            tags:['js','web','php'],
            hasCar:true,
            zipcode:null
        };
        javascript对象的键都是字符串类型，值可以是任意类型。获得一个对象的属性，我们可以使用
        对象变量.属性名得方式;
        person.name ; //bob
        person.zipcode ; //null

    +变量: javascript中的变量， 变量名大小写英文，数字$和_组合,不能用数组开头，也不能是javascript的
        关键字；声明变量的时候用var声明一次，
        var a = 123; a = 'ABC';// a变为字符串

    +strict模式：
        在声明变量之前没有使用 var 的话， 就会成为全局变量， 使用var声明的变量不是全局变量， 他的范围被闲置
        在声明的函数体内;
        在ECMA在后续的模式中退出了strict 模式， 在此模式中， 强制使用var声明变量，未使用var的话会报错
        'use strict'; 在javascript中打入此行代码，开启strict 模式；

3.字符串 "" ''
    +字符串: javascript 的字符串是有 '', 和 "" 括起来的字表示。
        如果字符串中有 '  和 " 符号的话， 需要运用转衣服 \ 来进行转移;
        ASCII字符可以用 \x## 形式的十六进制表示， 例如： 
        '\x41' ； // 完全等于 "A"
        还可以用 \u####  表示一个Unicode 字符:
        '\u4e2d\u6587' ; 完全等同于 '中文'
    
    +多行字符串:  多行字符号用 \n 写起来比较费时， 所以最新的ES6标准新增了一种多行表示的用法，用反引号 `....`表示:
        `这里是一个
        多行
        字符串`;  其实就是在每个换行后面自动加入了 \n 符号来进行换行

    +模板字符串:
        要把多个字符串连接 ， 用 + 号
        在新的ES6标注语言中新增了一种表示方法， 更上面一种异样  也是在用`....` 符号， 把变量用 ${} 中。 这样就能
        不用 + 号了: 
        var a = 'xiaoming' ; var age = 20;  var message = `hellow , ${name} , you are ${age} now`!

    +操作字符串
        字符串常见的操作如下:
        var s = "hello word"; s.length; //13 
        要获取字符串制定位置的字符， 使用下表操作:
        var s = 'hello word'
        s[0] ; //'h'
        s[1] ; //'e'
        
        *需要特别注意的是，字符串是不可变的，如果对字符串的某个所以分之，不会有任何错误，也没有任何效果;
        var s = 'Test' ; s[0] = 'X' ; alert(s); // s仍然是'Test'

        *javascript 为字符串提供了一些常用得方法， 注意， 调用这些方法本身不会改变原有字符串，而是返回一个新的字符串
    
        +toUpperCase() 方法， 把一个字符串全部变成大写：
        var s = 'hello' ; s.toUpperCase() ；//  HELLO;
        
        +toLowerCase() 方法， 把一个字符串全变成小写;
        var s = 'Hellow' ; s.toLowerCase() ; // hellow

        +indexOf() 方法, 把一个字符串出现的第一个位置返回; 如果没有找到返回 -1 区分大小写
        var s = 'hello word';  s.indexOf('world'); //返回 7   s.indexOf('World')// 没有找到返回 -1

        +substring() 返回制定索引区间的子串:
        var s = 'hello word' ; s.substring(0,5)  // 从所以0开始到5 不包括5 返回 'hello'
        s.substring(7); //从索引7 开始到结束 // 返回'world'




    


    

