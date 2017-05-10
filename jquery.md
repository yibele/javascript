# jquery 学习
## 1 选择器
+	因为juquery 内容比较简单所以我只写了自己不知道的内容,知道的内容我就没有写了
### 层级选择器
+	如果两个元素层级关系 ,那么用$('ancestor descendant') 来选择

```
<div class="testing">
    <ul class="lang">
        <li class="lang-javascript">JavaScript</li>
        <li class="lang-python">Python</li>
        <li class="lang-lua">Lua</li>
    </ul>
</div>
```

`$('ul.lang li.lang-javascript')  =>  [<li class='lang-javascript'>Javascript</li>];`
或者 `$(div.testing li.lang-javascript)` 也是可以的;

+	如果要选取`ul`下的所有`li`: `$('ul.lang li')`;

+	好处在于缩小了范围, 首先要定位父节点,才能选择响应的子节点`$('form[name=upload] input')`把选择范围缩小到
`name` 等于`upload`的范围当中 

+	当然多层的选择也是可以的 `$('form.test p input')` ;

### 子选择器 
+	个人觉得这种选择器用的并不是很多, 这种选择器智能选择 `parent` > `children` 的关系 :
`$('ul.lang>li.lang-javascript')` 只有`ul` 和 `li`是父子关系时候才能选出 , 下面的方法无法选出;
`$('div.lang>li.lang-javascript')` 因为他俩不是父子关系

### 过滤器 
+	过滤器帮助我们更精确的得到我们想得到的元素

```
	$('ul.lang li')      选出所有对象
	$('ul.lang li:first-child')   只能提取出第一个孩子节点
	$('ul.lang li:last-child')		提取最后一个孩子节点
	$('ul.lang li:nth-child(2)')		提取第二个孩子界定啊
	$('ul.lang lis:nth-child(even/odd)')	提取出序号为偶数的元素 / 基数的元素
```

### 表单相关

+	下面是一些表单相关的特殊选择器

```
	:input		可以选择<input>,<textarea>,<select>,<button>
	:file		可以选择<input type='file' > 和 input[type=file] 一样
	:checkbox
	:radio
	:focus		可以选择当前输入焦点的元素,
	:checked
	:enabled	可以选择正常输入的<input>等, 没有灰掉得输入
	:disabled	正好跟上面的相反

	:visible	$('div:visible')	所有可见的div
	:hidden		$('div:hidden')		所有隐藏的div
```

## 查找
### find()
+	有时候我们拿到一个元素之后,需要继续进行查找,这时候就可以用到`find()`函数了;它本身又接受一个
任意的选择器;

```
	<ul class="lang">
	    <li class="js dy">JavaScript</li>
	    <li class="dy">Python</li>
	    <li id="swift">Swift</li>
	    <li class="dy">Scheme</li>
	    <li name="haskell">Haskell</li>
	</ul>
```
用`find()`查找;
```
	var ul = $('ul.lang');
	var dy = ul.find('.dy');
	var swf = ul.find('#swift');
	var has = ul.find([name=haskell]);
```

### parent()
+	上面的`find()`方法在子节点中寻找, 那么当向父节点查找的时候就需要用到`parent()`方法;

```
	var swf = $('#swift');
	var parent = swf.parent();
	var a = swf.parent('div.red');
```

### next()  prev()
+	当寻找同一级别的元素时候,就要用到next() 和 prev() 两个函数

## 过滤
### filter() 方法可以过滤掉不符合选择器条件的节点;

```
	var langs = $('ul.lang li');
	var a = langs.filter('.dy') ;   
```

## 操作DOM

### 修改Text 和 Html  text()  html()
+	这两个方法分别获取节点文本和原始HTML文本例如

```
<ul id="test-ul">
    <li class="js">JavaScript</li>
    <li name="book">Java &amp; JavaScript</li>
</ul>
```
分别获取文本和HTML;

```
$('#test-ul li[name=book]').text() ;    'java & javascript';
$('#test-ul li[name=book]').html() ;	'java $amp; javascript';

```

+	Jquery 做的非常巧妙,上面的函数不仅可以作为 `getter` 还可以做为 `setter`  ,可以通过这两个函数直接修改元素中的内容;


## 修改 CSS   css('name','value');
+	jquery 可以使用链式操作来修改css

```
<ul id="test-css">
    <li class="lang dy"><span>JavaScript</span></li>
    <li class="lang"><span>Java</span></li>
    <li class="lang dy"><span>Python</span></li>
    <li class="lang"><span>Swift</span></li>
    <li class="lang dy"><span>Scheme</span></li>
</ul>
```

`$('#test-css').css('backgroud-color','#ffd351').css('color','red');`

+	同样地 `css()`方法也可以作为 `getter 和 setter` 一样使用;

```
var div = $("#test-div");
div.css('color');   返回 color值
div.css('color','red');  设置color 值
div.css('color','');    清楚css属性
```


### addClass('className') 顾名思义 , removeClass() 

## 隐藏和显示DOM
+	在修改DOM 的可见性的时候 我们通常设置 `display` 属性,可以利用 `css()`方法来实现, 但是 如果反过来 又要显示这个
DOM 的时候我们必须在 隐藏前纪录 `display`的值是 `block` 还是 `inline` . 
+	Jquery 为我们提供了 两个简单的方法  `hide()` 和 `show()` 方法来不用我们担心 `display`的属性;

## 获取DOM信息

```
// 浏览器可视窗口大小:
$(window).width(); // 800
$(window).height(); // 600

// HTML文档大小:
$(document).width(); // 800
$(document).height(); // 3500

// 某个div的大小:
var div = $('#test-div');
div.width(); // 600
div.height(); // 300
div.width(400); // 设置CSS属性 width: 400px，是否生效要看CSS是否有效
div.height('200px'); // 设置CSS属性 height: 200px，是否生效要看CSS是否有效
```

### attr() 和 removeAttr() 方法用于操作DOM节点的属性

```
var div =$('#test-div');
div.attr('data');   undefined;
div.attr('name');    'Test';
div.attr('name','data')  / 
div.removeAttr('name')   删除name属性
div.attr('name')   //undefined;


## 添加DOM   `append()` `preappend()`

```
<div id="test-div">
    <ul>
        <li><span>JavaScript</span></li>
        <li><span>Python</span></li>
        <li><span>Swift</span></li>
    </ul>
</div>
```

+	要添加DOM节点 可以使用 `html()` 这种暴力方法, 还可以使用 `append()`方法;

```
var ul = $("#test-div")
ul.append('<li><span>hashell</span></li>');
```

+	`append()`除了可以添加字符串以外,还可以传入原始的DOM对象, jQuery 对象 和函数对象;

## 事件
+	`on`方法用来绑定一个事件,我们需要传入时间名称和对应的处理函数.

```
var a = $("#test-link");
a.on('click',function(){alert('hellow')});
```

+	另一种简洁的方法是直接调用 `click()`方法;

```
a.click(function(){alert('hello')});
```

### 鼠标事件
* click: 鼠标单击时触发
* dbclick:鼠标双击时触发
* mouseenter: 鼠标进入时触发
* mouseleave: 鼠标移除时触发
* mousemove: 鼠标在DOM内部移动时触发
* hover:	鼠标进入和退出时触发两个函数,

### 键盘事件
* keydown: 键盘按小时触发
* keyup: 键盘松开是触发
* keypress: 按一次键后触发

### 其他事件
* focus: 当DOM获得焦点时触发
* blur: 当DOM失去焦点时触发
* change: 当`<input> <select> <textarea>` 的内容改变时触发
* submit: 当`<form>`提交时触发
* ready: 当页面被载入并且DOM树完全初始化后触发
+	其中ready仅作用在`document`对象.

```
<html>
<head>
    <script>
        // 代码有误:
        $('#testForm).on('submit', function () {
            alert('submit!');
        });
    </script>
</head>
<body>
    <form id="testForm">
        ...
    </form>
</body>
```

+	上面的代码是错误的,因为当执行`$("#testFomr")`的时候, `<form>` 尚未载入浏览器. 需要更改代码,将document.ready加上

```
document.on('ready',function(){
	$("#test-From")......	

})
```
+	当然还可以将 `ready` 简化的修改. `document.ready` 这种类型;
+	甚至还可以继续简化 `$(function(){});` 我们很常见的 `$(function(){....})` 就是这种`document` 对象的`ready`时间处理函数;


## 取消绑定时间
+	可以通过 `off('click',function) ` 来接触绑定;

```
function hello() {
    alert('hello!');
}

a.click(hello); // 绑定事件

// 10秒钟后解除绑定:
setTimeout(function () {
    a.off('click', hello);
}, 10000);
```

## 事件触发条件
+	一个需要注意的问题是,事件的触发总是由用户操作引发的,例如我们监控文本的内容改动;

## 动画
### `show()/hide()` 会隐藏和现实DOM元素; `toggle()` 
` var div = $("#test-show-hide"); div.hide(300);` 3秒内逐渐消失;
+	除了可以用毫秒为单位, 也可以是 `slow`,`fast` 这些字符串;
```
var div = $("#test-show-hide"); 
div.show('slow'); 
```

### `slideUp() / slideDown()` `slideToggle()` 垂直方向逐渐展开和收缩;
```
var div = $("#test-slide");
div.slideUp(3000); 
```

### `fadeIn() / fadeOut()` 动画效果是淡入淡出,不过不断的设置DOM元素的`opacity`属性来实现,
`fadeToggle()` 根据元素可见否决定下一步动作;

### animate() ; 自定义动画, 有些时候上面这些简单的操作都无法满足我们的需求,这个时候就需要
自定义动画效果了

+	我们需要传入的是 `animate()`的 DOM元素最终的CSS状态和时间,jQuery 在时间段内不断的调整CSS
直到到达我们设定的值;

```
var div = $('#test-animate');
div.animate({
	opacity: 0.25,
	width:'256px',
	height:'256px'
},3000);
```

+	如果我们想在结束的时候做一些事情,就可以再传入一个函数. 

```
var div = $("#test-animate");
div.animate({
	opacit:.25;
	widht:'256px',
	heigth:'256px'
},3000,function(){
	console.log('动画效果结束');
	$(this).css('opacity','1.0').css('width','128px').css('height','128px');
});

```

### 串行动画
+	jquery 的动画效果还可以串行,通过 `delay()`方法还可以实现暂停

```
var div = $("#this-animate");
div.slideDown(2000).delay(1000).animate({
	width:'256px',
	height:'256px'
},2000).delay(1000).animate({
	height:'256px',
	width:'256px'
},2000);
```

+	值得注意的十, 上面这些函数可以传入第二个值, 用来做动作执行完了之后的回调函数;

```
var div = $("#test-fadeOut")
div.fadeOut(1000,function(){...});
```


## Ajax 
+	jquery 咋i对象jqueyr 绑定了 ajax()函数 , 具体的格式为 `ajax(url,settings)`;
+	如上所示,干函数需要接受一个`url` 和 一个可选的`settings`对象.常用的选项如下:

* async: 是否一步执行AJAX请求, 默认为true
* method: 发送的`method`, 缺省为`get` 可以指定为`post` , `put` 等;
* contentType: 发送`post`请求的格式,默认值为 `application/x-www-form-urlencoded;charset=UTF-8` 也可以指定
为`text/plain` 或者` application/json`;
* data: 发送的数据, 可以是字符串,数组或者 object. 
* header: 发送的额外的HTTP头,必须是个object
* dataType: 接受的数据格式, 可以指定为`html`, `xml json text` 等
* 回调函数: jQuery 的 jqXHR 对象类似一个Promise对象,我们可以用链式写法处理各种回调


```
function ajaxLog(s){
	vat txt = $("#test-response-text");
	tex.val(txt.val()+'\n'+s);
}

$("#test-response-text").val('');

var jqxhr = $.ajax('/api/categories',{
	dataType:'json',
}.done(function(data){
	ajaxLog('接受成功, 接受到的数据室'+ JSON.stringify(data));
}).fail(function(xhr,status){
	ajaxLog('失败:'+ xhr.status + ',原因'+status);
}).always(function(){
	ajaxLog("请求完成:无论什么时候都会执行那个");
});

```

+	因为有很多方法 比如 `post get getJSON` 等用的比较多,所以jquery定了了很多快捷方法
+	`post`

```
var jqxhr = $.post('/path/to/resource',{
	name:'bob lee',
	check:1
});
实际构造的数据 `name=bob%20lee&check=1` 作为post的body被发送
```
+	`get`
```
var jaxhr = $.get('/path/to/resource',{
	name:'bob lee',
	check:1
})
```

+	`getJSON`

```
var jaxhr = $.getJSON('/path/to/resource',{
	name:'bob lee',
	check:1
},done(function(data){
	// data 已经被解析为json对象了;
}))
```

### jquery 扩展
+	有些时候我们需要自己定义一些jquery的方法,以后方便使用, 通过对 `$.fn`对象扩展来实现

```
$.fn.highlight = function(){
	this.css('backgroud-color','red').css('color','#d85000');
	return this;
}
```
记住, 因为我们要可以链式的时候,所以在最后必须要`return this`的存在;







