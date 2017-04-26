# 1 web浏览器中的Javascript
## 1.1 web浏览器环境
+   要理解客户端javascript ， 必须理解web浏览器所提供的程序设计黄精的概念性
    框架。 有三个重要特性:
    * 作为全局对象的Window 对象和客户端javascritp 代码的全局执行环境
    * 客户端端详的层次和构成他的一部分文档对象模型
    * 事件驱动的程序设计模型

### 1.1.1 作为全局执行环境的Window 对象
+   在浏览器中，表示HTML文档的是Document对象，Window对象表示现实该文档的窗口; Window 对象更重要一些，因为它是
    客户端程序设计中的全局对象；
+   全局对象的属性就是全局变量， 并且Window对象定义了很多全局属性用来被调用。 window 和 self 可以调用Window对象

### 1.1.2 客户端对象层次和文档对象模型
+   Window对象是一个全局对象，所以在javascript对象的层次中，Window对象是这个层次的根。

如下是客户端对象层次和0级层次

+   当前窗口
    * self,window,parent,top 各种Window对象
    * navigator navigator对象
    * frames[] Window对象数组
    * location Location对象
    * history History对象
    * document 对象
    |-   froms[] form对象数组
        |-   elements[] Html表单元素
        |-   objects:
             |-   Button
             |-   Checkbox
             |-   FileupLoad
             |-   Hidden
             |-   Password
             |-   Radio
             |-   Reset
             |-   Select
             |-   Submit
             |-   Text
             |-   Textarea
    |-   anchors[] Anchor对象数组
    |-   links[] Link兑现该数组
    |-   images[] Image对象数组
    |-   applets[] applets数组
    |-   embeds[] 嵌入对象数组
    * screen Screen对象

### 1.1.3 事件驱动程序设计模型

## 1.2 在Html 中嵌入javascript
### 1.2.1 <script> 标签：
document.wirte（）是一个非常重要切常用的方法，他把自己输出插入到脚本文档所在的位置。例子:
```
    <body>
        <script language='javascript'>
            function print_today_date(){
                var d = new Date();
                document.write(d.toLocaleString());
            }
        </script>

        The date ad time area: <br>
        <script>print_today_date()</script>
    </body>
```
#### 1.2.1.1 属性language 和 type
+   在现在的浏览器中推荐使用 `<script type = "text/javascript">`
+   如果想讲javascript语言只作为唯一的脚本，那么在 `head`部分添加
`<meta http-equiv="Content-Script-Type" content="text/javascript">`
#### 1.2.1.2 </script> 标记
+   用document.write() 向另一个窗口或者框架中输出脚本时候，需要在后面街上 </script> ;
+   HTML 解析器并不理解什么是javascript ， 所以当他看到 你在 document.write 中的  </script> 的时候
    就会以为你这个是当前页面的脚本运行结束符号，即使符号在引号中，若果要避免这种情况发生可以使用
    `"</"+"script>"` 方式 ;
    另外还以在 </script> 中使用转移符 "\"；
    `f1.document.write("<\/script>");
#### 1.2.1.3 defer 性质
+   HTML解析器在解析页面的时候 因为javascript需要动态的对页面进行修改， 所以解析器必须先解析完
    javascript 脚本在 在对HTML 继续解析， 如果 </script> 标签中没有输出内容， 比如只是定义一个函数
    并不调用的话， 可以添加defer性质:如下
    `<script defer> 不调用 document.write() 的javascript代码</script>`

### 1.2.2 javascript文件
+   通过<script src=""> </script> 来引用； 支持src的浏览器会忽略<script></script> 中的代码；
### 1.2.3 事件处理程序

+   常用的鼠标时间：
    onclick : 任何类似按钮的表单 都支持
    onmousedown,onmouseup: 分别是按下和释放鼠标
    onmouseover,onmouseout: 分别是鼠标移到和移除
    onchage: input ,select, textarea 元素都支持；
    onsubmit,onreset:  

### 1.2.4 URL 中的 javascript

+   javascript:URL 当浏览器加载这样的URL 时候，他将执行这个URL中包含的javascript代码；并把最后一条javascript语句的字符串
    值座位新文档的内容显示出来;
+   通常我闷相拥javascript ：RUL 执行某些不改变当前显示文档的javascript代码；要做到这一点必须确保URL中的最后一个语句
    没有返回值； 在最后加上`void 0` 就可以；
    `javascript: window.open("about:blank";void 0)`
### 1.3 javascript 程序的执行；
+   接下来的几张解释了不同形式的额javascript代码是如何执行的，虽然有些显而易见，但是又大量的细节需要介绍；
#### 1.3.1 脚本
+   出现在`<script></script>` 标记之间的javascript语句是按照它们出现的顺序执行的
+   脚本的执行时Web浏览器的HTML解析过程的一部分，所以如果一个脚本出现在HTML文档的`head`部分,那么`body`部分还没有定义，
    也就是说文档主题内容的javascript对象(From Link) 还没有创建，就不能对他进行操作；
+   因为有document.write（） 可以动态的添加文档内容， 所以html解析器必须在javascript解析器运行脚本是停止解析文档；



## 2 窗口和框架

### 2.1 Window对象概述

重要的window对象有：
`closed` : 一个布尔值，只有当窗口被关闭，他才为true
`defaultStatus, status`: 在浏览器状态栏中现实的文本
`document`: 对Document对象的引用，该对象代表在窗口显示的HTML文档
`frames`: Window对象的数组，代表窗口中的各个框架（如果存在）
`history`:对History对象的引用，该对象代表用户浏览窗口的历史;
`location`: Location对象的引用，该对象代表在窗口中现实的文档的URL，设置这个属性会引发浏览器装在新一个文档;例子：
`修改  window.location.href = "http://www.baidu.com"; 浏览器转向baidu ;`
`name`: 窗口的名称。可被HTML标记 <a> 的 target性质使用;
`opener`: 队打卡爱当前窗口的Window对象的引用。如果当前窗口被用户打开，则它的值为null；
`parent`: 如果当前的窗口是框架，他就是队窗口中包含这个框架的引用; 没有明白什么意思？ 做一个小实验;;
```
    window.parent;  返回的是 Window 对象；
```
`self` : 自引用属性，对当前window对象的引用，
`top` : 如果当前窗口的框架，他就是队包含这个框架的顶级窗口的Window对象的引用。
`Window`: 跟self 同义；

Window对象还支持大量重要的方法:
`alert(),confirm(),prompt()` 向用户现实简单的对话框，confirm() prompt() 获取用户相应
`close()` 关闭窗口
`focus(),blur()` 请求或放弃窗口的键盘焦点。focus()方法还通过把窗口提到对战顺序的最前面，从而
确保窗口可见
`moveBy(),moveTo()` 移动窗口
`open（）` 打开新的顶级窗口，用制定的特性现实制定的URL
`print()` 打印窗口或框架中的内容
`resizeBy() , resizeTo()` 调整窗口大小
`scrollBy(),scrollTo()` 滚动窗口中的文档
`setInterval(),clearInterval()`  设置或者取消重复调用的函数，该函数在两次调用之间有制定的延迟
`setTimeout(),clearTimeout()` 设置或者取消在制定的若干毫秒后调用一次函数

### 2.2 简单的对话框
+   因为比较简单， 所以就省略了

### 2.3 状态栏
+   是什么? 在每个浏览器窗口的底部都有一个状态栏（status line） ， 比如一个超链接上，将现实链接上所指的URL。
+   下面是通过onmouseover 和 window.status 来实现 在超链接上 现实一些自己定义的内容；
    在后面的例子中仔细解释

### 2.4 超时设定和时间间隔
+   setTimeout() 用来安排一个javascript代码在未来的某一个指定的时间运行，`clearTimeout()`来取消那段代码的执行
+   `setInterval() 和 clearInterval() ` 他们功能与setTimeout() 和 clearTimeout() 相似，只不过它们会自动
    重新调度要反复运行的代码，无需代码自己在调度。
```
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title></title>
        <script type="text/javascript" charset="utf-8">
            //该函数将在状态栏现实时间
            //一旦调用该函数就会激活始终，此后他将自己调用自己
        function display_time_in_status_line(){
            var d = new Date();
            var h = d.getHours();
            var m = d.getMinutes();
            var ampm = (h>12)? 'Pm':'Am';
            if(h>12)
                h -= 12;
            if(h == 0 ) h=12;
            if(m<10) m= "0"+m;
            var t = h+':'+m+' '+ampm;
            defaultStatus = t;

            //安排1分钟后再重复以上操作
            setTimeout("display_time_in_status_line()", 60000) // 60000 毫秒为一分钟
        }
        </script>
    </head>
    <body onload="display_time_in_status_line()">
    </body>
</html>
```

+   可以将上述代码中的`setTimeout()` 改成 `setInterval()` ； 如果这样子做 ， 那么无需再 display_time_in_status_line() 中在调用自己了；
+   他们两个的区别在于， 因为setTimeout() 要在函数中再调用一次， 假设 设置为 1秒后再调用， 那么如果display_time_in_status_line 函数
    本身的运行时间0.5秒的话，就会出现 在1.5秒后才执行一次的错误；
+   而setInterval 因为没有在函数内调用，实在外部进行的函数调用， 那么久没有上述问题了;
+   要调用setInterval 方法的格式为如下 ：
        `setInterval("alert('test')",3000);`  后面的数字为3000毫秒， 必须是数字， 前面的函数体 必须包含在" " 中

### 2.5 错误处理
+   Window 对象的onerror 属性比较特殊。如果给这个属性附一个函数，那么只要这个窗口发生了javascript错误，该
    函数就会被调用，即它成了窗口的错误处理函数；

### 2.6 Navigator 对象
+   Window.navigator 引用的是包含Web浏览器总体信息（如版本和他现实的数据格式列表） 的Navigator对象。
它有五个重要的属性，
* appName Web浏览器的简单名称
* appVersion 浏览器的版本号，
* userAgent 浏览器在它的 USER-AGENT HTTP 标题中发送的字符串。这个属性通常包含appName appVersion
```
<script type="text/javascript" charset="utf-8">
    var mes = ' ';
    for (var navi in navigator) {
        mes += navi + ':' + navigator[navi] + '\n';
    }
    alert(mes);
</script>
```
### 2.7 window对象的控制方法

如下一个例子将使用open(),close(),moveTo() 此外还用到了一些窗口的设计方法。首先创建一个新窗口，然后使用方法
setInterval() 反复调用一个函数，在屏幕上不断的移动这个窗口。 还是会用screen对象确定屏幕大小，然后根据
这个信息在窗口到达屏幕边界时将它反弹回来;

```
<body>
    <script type="text/javascript" charset="utf-8">
        var x=0, y=0, w=200, h=200;    //窗口位置的大小
        var dx=5, dy=5               //窗口移动的速度
        var interval = 100;         //更新的毫秒数

        //创建要移动的窗口
        //javascript:URL 是一种现实短文档的简单方法
        //最后参数指定了窗口的大小
        var win = window.open('javascript:"<h1>BOUNCE<\/h1>"',"","width="+w+",height="+h);
        //设置窗口的初始位置
        win.moveTo(x,y);
        //用setInterval() 方法调用bounce 方法
        //保存放回值，一边我们通过它传递clearInterval() 方法停止动画;
        var intervalID = window.setInterval("bounce()",interval);
        //每个指定的好买欧水，该函数就会一定dx，dy 个单位。
        //当窗口移动到边界上，他将弹回
        function bounce(){
            if(window.closed){
                clearInterval(intervalID);
                return;
            }
            //如果达到便捷就返回
            if(x+dx >(screen.availWidth -w) || (x+dx <0)) dx=-dx;
            //如果达到上边界或下边界
            if(y+dy > (screen.availHeight -h) || (y+dy < 0)) dy=-dy;

            //更新窗口的位置
            x += dx;
            y += dy;
            //最后把窗口移动
            win.moveTo(x,y);
        }
    </script>
    <input type="button" value="stop" onclick="clearInterval(intervalID); win.close();"/>
</body>
```

### 2.8 Location对象
+   它代表该窗口中当前显示的文档的URL； Location 对象的href属性是一个字符串，它包含完整的URL文本。
    这个对象的其他属性(protocol,host,pathname,search) 则分别声明了URL的各个部分；
    search 是指URL ？ 后面的URL中嵌入的参数。

+   location.protocol = 'http'
+   location.host = 'www.baidu.com'
+   location.port = '8080'
+   location.search = '?a=1&b=2'
+   location.hash = 'TOP'

+   要加载一个页面可以调用 `location.assgin()` 函数，如果要重新加载当前页面 `location.reload()`函数；
+   不要混淆 window.location 属性 和 document.location 。 前者是对Location对象的调用， 而后者只是
    一个值 ， 跟location.href 等价；
### 2.9 History 属性
+   History 属性是对History对象的引用，最初是窗口的浏览历史构造成访问过得数组。但是这样子很危险，
    所以其实不能真正的访问到History对象的数组元素；
+   History 对象的length属性可以被访问。
+   在窗口中 向历史前或者历史后 可以用方法 back() 和 方法forward();
```

        <frameset rows='*,75'> <frame src="about:black">
            <frame src="http://www.baidu.com">
        </frameset>


        <form name='navbar' onsubmit="go_to();return false;">
            <input type="button" name="" id="" value="back" onclick="back()"/>
            <input type="button" name="" id="" value="forward" onclick="forward()"/>
            <input type="text" name="url" id = 'url'/>
            <input type="button" name="" id="" value="go" onclick="go_to()" />

        </form>

        <script type="text/javascript" charset="utf-8">

            function go_to(){

                parent.frames[0].location = document.navbar.url.value;

            };

            function back(){

                document.navbar.url.value = '';
                parent.frames[0].history.back();

                //然后将表单中的url变成当前的url
                setTimeout("document.navbar.url.value = parent.frames[0].location.href;",1000);
            };

            function forward(){

                document.navbar.url.value='';
                parent.frames[0].history.forward();

                setTimeout("document.navbar.url.value = parent.frames[0].location.href;",1000);
            };

```

## 3 Document 对象！
### 3.1.1 Docuemnt 对象的方法
+   几个方法 ; open() ：产生一个新文档，擦掉已有的文档内容 close()： 关闭或结束open（）方法打开的文档  write()：把文本附加到当前打开的文档 writeln()：把
    文本输出到当前打开的文档，并附加一个换行符;

### 3.1.2 Document 对象的属性
+   alinkColor, linkColor, vlinkColor
    这些属性都是超链接的颜色，linkColor 是未被访问的链接的正常颜色； vlinkColor 是被访问过的链接的颜色， alinkColor 是被集火的颜色；
    这些属性对应标记`<body>` 的属性alink,link,vlink;
+   anchors[]
    Anchor对象的引用，该对象表示文档中的锚
+   applets[]
    Applet对象的引用，该对象代表文档中的java小程序
+   bgColor,fgColor
    文档的背景颜色和前景颜色（文本颜色）。
+   cookie
    一个特殊属性，允许javascript程序读写HTTP cookie。
+   forms[]
    Form对象的一个数组，该对象代表文档中的`<form>`元素
+   images[]
    Images 对象的一个数组
+   lastModified
    一个字符串，包含文档的修改日期
+   links[]
    Link对象的一个数组，该对象代表文档中的草文本链接link对象
+   location
    等价于属性URL
+   referrer
    文档的URL，包含把浏览器带到文档的链接
+   title
    位于文档的标记`<title>`之间的文本
+   URL
    一个字符串，location.href 相同

### 3.1.3 Document对象和标准

#### 3.1.4 Document对象的命名

+   当标签中出现name性质时，他的值用作Docuemnt 对象的属性名；用来引用相应的对象
```
<from name='f1'kj>
<input type='button' value="push it">
</form>
```
假定 `<form>` 是文档中的第一个元素，那么javascript代码就可以使用下面两个
表达式中的任何一个来引用生成的form对象;
```
document.forms[0]
document.f1;
document.forms['f1'];
```
+   这个规则同样适用图像和小程序；用HTMl中的name性质便可通过名字引用javascript代码中
的对象

### 3.1.5 Document对象和时间处理程序
+   下面两种方式是一样的
```
<form name="myform" onsubmit="return validateform()">...</form>

document.myform.onsubmit = validateform;

注意函数名后面没有括号。这是因为我们不想调用函数，只是想把一个引用赋予它
```

+   如果我们碰巧知道<a>标签是文档第一个元素，可以用document.links[0] 相应的
Link对象，
```
<a href=“” onmouseover="status = 'Get Http Now!;'"></a>

document.links[0].onmouseover = function(){ status = "get help now"};
```

## 3.2 动态生成的文档
+   Document对象的一个重要的特性方法是 write();使用这个方法有两种方式，第一种是
在脚本中使用它，把HTML输入到当前正在被解析的文档中。例子：
```
<script>
var today = new Date()
docuemnt.write("<p>Docuemnt accessed on :"+today.toString());
document.write("<br>Docuemen modifide on:"+ document.lastModified);
</script>
```
### 3.2.1 非HTML文档
+   Document 方法open() 时没有参数，那么它将打开一个新的HTMl文档。但除了HTML文本之外，
Web浏览器还可以显示很多的其他格式的数据，如果想传递其他的格式文本的话，就在open() 中传递
一个参数，指定你想要的MIME 类型；
+   下面的函数实现了一个debug() ，可以使用这个函数将来自脚本的纯文本调试消息输出到一个
单独的窗口中，该窗口在必要时就会弹出;
```
<script type="text/javascript">
    var _console = null;
    function debug(mes){
        if((_console == null) || (_console.closed)){
            _console = window.open("","console","width=60,height=300,resizable");
            _console.document.open('text/plain');
        }

        _console.focus();
        _console.document.writeln(mes);
    }
</script>
<script type="text/javascript">
    var n = 0;
</script>

<form class="" action="index.html" method="post">
    <input type="Button" name="" value="Push me" onclick="debug('You have pushed me:\t'+ ++n + 'times.');">
</form>
```

### 3.3 Document 对象的颜色属性
+   Document对象的 bgColor 属性， fgColor ,linkColor ,alinkColor vlinkColor 属性；

### 3.4 Document 对象的信息属性

### 3.5 表单
+   Document 对象 Forms[] 数组包含Form对象，该对象代表文档中的`form` 对象；
+   Forms[]对象有一个elements[]属性，该属性包含代表表单中具有HTML输入元素的对象。
由于Forms对象的重要性，会在后面的一章中好好的介绍

### 3.6 图像
+   Document 对象images 属性是一个Image元素的数组，每个元素代表文档中含有的一个内联图像，
这些对象有标记`<img>` 创建。
#### 3.6.1 使用src属性的图像置换方法
+   src 属性是可读可写的，想要替换`src` 中的URL部分，必须与原来的图片的高度和宽度相同。
```
<img src="images/sucai1.jpeg" name='help' alt="" />
<a href='www.baidu.com' onmouseover="images.help.src='images/sucai2.jpeg'"
onmouseout="images.help.src='images/sucai1.jpeg'">change</a>
```

#### 3.6.2 屏外的图像和缓存
+   实现图片置换技术最好是将所有需要的图片都缓存进浏览器中，想要做到这点就需要用`Image()`构造
函数创建一个屏外图像；然后把它的`src`设置成URL；这样当浏览器使用同样的URL的时候，就会从缓存中
读取；
+   注意，除了用于切屏，我们从来不用屏外图像在任何事，尤其不会把屏外的Image对象赋值给文档的
images[]数组
```
<script>
(new Image(08,20)).src = "images/help_rollover.gif";
</script>

<a href = 'help.html' onmouseover = "document.help.src = 'images/help_rollover.gif'"></a>

```
使用图像置换方法的动画;
```
<script>

var aniframes = new Array(5);
for(var i=1;i<=5;i++){
    aniframes[i] = new Image();
    aniframes[i].src = 'images/'+i+".jpeg";
}

var frame = 1 ;      帧数计时器，跟踪当前的帧数
var timeout_id= null;  允许我们用clearTimeout()来停止动画


function animate(){
    document.animate.src = aniframes[frame].src;
    frame = (frame+1)%5;      更新帧计时器 ； 简单的循环 ， 从1-10 之后再从1-10
    timeout_id = setTimeout("animate()",300);
}
</script>
<form action="" method="post">
    <button onclick="if (time_out ==null) animate()">start</button>
    <input type="button" name="stop" onclick="if(timeout_id) clearTimeout(timeout_id);timeout_id = null"/>
</form>

<img src="images/2.jpeg" name='animate' alt="" />
```

#### 3.6.3 Image 对象的事件处理程序
+   事件处理程序是什么意思呢？ 简单就是说onload , onerror, onabort
就是说当Image发生某些情况的时候才去执行我们的动作，比如当所有的Image加载到缓存之后，在去
启动图像切换功能，
+   要做到这一点，得先做一个事件处理函数，监控Image对象在如今缓存中的数量；
```
<script>
var aniframes = new Array(10);
var count = 0;

function count_loaded_images(){
    if(++count == aniframes.length){
        animate();
    }
}

for(var i=1;i<=10;i++){
    aniframes[i] = new Image();
    aniframes[i].onload = count_loaded_images;    只需要将onload方法与我们自己定义的方法相等就行，不用后面加上（）
    aniframes[i].src = "images/"+i+'.jpeg';
}
必须注意的是， 我们必须在赐予图像src 属性之前设定onload 。 如果在后设定的话，可能我们赐予url的时候图像已经被
加载了，这样程序就永远不会触发；
</script>
```

+   Image对象除了onload 处理对象 还有onerror onabort 

#### 3.6.4 Image对象的其他属性

+   Image对象还具有其他几个属性， 大部分都是只读的， 反应`<img>` 的属性；

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title></title>
    </head>
    <body>
        <script type="text/javascript" charset="utf-8">

            function toggleButton(document,checked,label,onclick){
                //第一次加载时候需要做的事情，只需加载一次。做一些图片的初始化，和缓存
                if(!toggleButton.prototype.over){
                    toggleButton.prototype.over = _toggleButotn_over;
                    toggleButton.prototype.out = _toggleButton_out;
                    toggleButton.prototype.click = _toggleButton_click;

                    //初始化图片
                    //images作为类属性，而不是全局变量
                    toggleButton.images = new Array(4);
                    for (var i=0;i<4;i++){
                        toggleButton.images[i] = new Image(toggleButton.width,toggleButton.height);
                        toggleButton.images[i].src = toggleButton.imagenames[i];
                    }
                }

                this.document = document;
                this.checked = checked;

                //鼠标不再顶层!???? 
                this.highlighted = false;

                this.onclick = onclick;
                if(typeof this.onclick =='string'){
                    this.onclick = new Function("status", this.onclick);
                }

                //document.images[]数组中设置存放该复选框图像的条目
                var index = document.images.length;

                //下面输出复选框的HTML代码。使用<a> 和 <img>标记;
                document.write("<a href='ablout:blank' onmouseover="+"'document.images[index]._tb.over();return true;'"+
                    "onmouseout='document.images[index]._tb.out()'"+"onmouseclick='document.images[index]._tb.click();return false;'");
                document.write("<img src = '"+toggleButton.imagenames[this.checked+0]+"'width='"+toggleButton.width+"'height='"+toggleButton.height+"' border='0' hspace='0' vspace='0' align='absmiddle'>");
                if(label) document.write(label);
                document.write('</a></br>');
                //我们已经输出了img标记
                //那么久保存toggleButton 对象中创建的队Image对象的引用
                this.image = document.images[index];

                //创建一个从Image对象到ToggleButton 对象的链接
                //通过给Image对象定义_tb属性，实现这一点
                this.image._tb = this;
            }

            function _toggleButotn_over(){
                this.image.src = toggleButton.imagenames[this.checked+2];
                this.highlighted = true;
            }

            function _toggleButton_out(){
                this.image.src = toggleButton.imagenames[this.checked+0];
                this.highlighted = false; }
            function _toggleButton_click(){
                this.checked = !this.checked;
                this.image.src = toggleButton.imagenames[this.checked+this.highlighted*2];
                if(this.onclick) this.onclick(this.checked);
            }

            toggleButton.imagenames = new Array(4);
            toggleButton.imagenames[0] = "images/1.jpeg";
            toggleButton.imagenames[1] = "images/2.jpeg";
            toggleButton.imagenames[2] = "images/3.jpeg";
            toggleButton.imagenames[3] = "images/4.jpeg";
            toggleButton.width = toggleButton.height = 25;
        </script>

        <!-- 以下是如何使用toggleButton 类-->

        Optional extras :<br>
        <script type="text/javascript">
            var tb1 = new toggleButton(document,true,"56K Modem");
            var tb2 = new toggleButton(document,false,"Laser Printer", function(click){alert("printer:"+clicked);});
            var tb3 = new toggleButton(document,false,"Tape Backup Unit","alert('Tape backeup:'+ state)");
        </script>

        <!-- 以下是如何从事件处理程序使用toggleButton 对象-->

        <form>
            <input type="button" name="" value="Report Button Status" onclick="alert(tb1.checked+'\n'+tb2.checked+'\n'+tb3.checked)">
            <input type="button" name="" value="reset Buttons" onclick="if (tb1.checked) {tb1.click()};
            if (tb2.checked) {tb2.click()};if (tb3.checked) {tb3.click()}">
        </form>



        


    </body>
</html>
```

## 4 表单和表单元素
### 4.1 Form对象
+   从Document对象的属性froms[]数组的元素中找到Form对象；在这个数组中Form对象是按照他们在文档中
出现的顺序存放的； 所以document.forms[0] 指的是文档中的第一个表单。可以使用如下代码找到最后一个
表单;`document.forms[document.forms.length-1];

+   Form 还有一个属性是elements[]数组。 里面存放着按照顺序出现的表单元素;如
`document.forms[1].elements[3]` 代表的就是 第二个表单中的第三个元素：

+   From对象支持两种方法，submit() 和 reset() ，通过调用Form对象这两方法可以做到提交和重置
+   为了配合submit() 和 reset() javascript还提供了事件处理程序 ， 前者是onsubmit() 后者是
onreset() ;
+   onsubmit() 是在提交前执行的， 如果返回false，那么就无法提交，可以用来验证表单数据;**注意**只有
真正点击Submit 按钮才会触发onsubmit;调用submit()方法不会触发onsubmit;
+   onreset() 跟上述一样;

### 4.2 如下是一个例子，包含所有元素的HTML表单

```
<form action="" name='everythis'>
<table>
    <tr>
        <td>
            Username:<br>[1] <input type="text" name='username' size='15'>
        </td>
        <td>
            Password:<br>[2] <input type="text" name='password' size='15'>
        </td>
        <td rowspan="4">
            Input Event[3] :<br>
            <textarea name="textarea" id="" cols="28" rows="20"></textarea>
        </td>
        <td rowspan="4" align="center" valign="center">
            [9] <input type="button" value="Clear" name="clearbutton"><br>
            [10] <input type="submit" name='submitbutton' value='Submit'><br>
            [11] <input type="reset" name='resetbutton' value="Reset"><br>
        </td>
    </tr>
    <tr>
        <td colspan="2">
            Filename=: [4] <input type="file" naem='file' size="15">
        </td>
    </tr>
    <tr>
        <td>
            My Computer Perpherals: <br>
            [5] <input type="checkbox" name='peripherals' value="modem"> 56K Modem<br>
            [5] <input type="checkbox" name='peripherals' value="printer">Printer<br>
            [5] <input type="checkbox" name='peripherals' value="tape">Tape Backup
        </td>
        <td>
            My Web Browser:<br>
            [6] <input type="radio" name="browser" value='nn'>Netscape<br>
            [6] <input type="radio" name="browser" value='ie'>Internet Explorer<br>
            [6] <input type="radio" name="browser" value='other'>Ohter<br>
        </td>
    </tr>
    <tr>
        <td>
            My Hobbies: [7]<br>
            <select name="hobbies" multiple="multiple" size="4">
                <option value="programming">Hacking Javascript</option>
                <option value="surfing">Surfing the Web</option>
                <option value="caffeine">Drinking Coffee</option>
                <option value="annoying">Annoying my Friends</option>
            </select>
        </td>
        <td align="center" valign='center'>My Favorite Color:<br>
        <select name="color" id="">
            <option value="red">Red</option>
            <option value="blue">blue</option>
            <option value="violet">violet</option>
            <option value="green">green</option>
            <option value="white">white</option>
            <option value="peach">peach</option>
        </select>
        </td>
    </tr>
</table>
</form>

<div align="center">
    <table border="4" bgcolor="pink" cellspacing="1" cellpadding="4">
        <tr>
            <td align="center"><b>Form Elements</b></td>
            <td>[1] Text</td> <td>[2]Password</td> <td>[3] Textarea</td>
            <td>[4] FileUpload</td><td>[5]Checkbox</td>
        </tr>
        <tr>
            <td>[6]Radio</td> <td>[7]Select</td> <td>[8]Select(menu)</td>
            <td>[9] Button</td><td>[10]Submit</td><td>[11]Reset</td>
        </tr>
    </table>
</div>
<script>
    function report(element, event){
        var elmtname = element.name;
        if((element.type =="select-one") || (element.type=='select-multiple')){
            value ='';
            for(var i =0;i<element.options.length;i++){
                if(element.options[i].selected){
                    value +=element.options[i].value+ " ";
                }
            }
        }else if(element.type =='textarea') 
            value= '....';
        else 
            value=element.value;
        var msg = event+ ': ' + elmtname + '('+ value + ')\n';
        var t = element.form.textarea;
        t.value = t.value+msg;
    }

    function addhandlers(f){
        for(var i =0;i<f.elements.length; i++){
            var e = f.elements[i];
            e.onclick = function () { report(this,"Click")};
            e.onchange = function () { report(this,"Change")};
            e.onfocus = function() { report(this,"Focus")};
            e.onblur = function() { report(this,"Blur")};
            e.onselect = function () { report(this,'Select')};
        }
    f.clearbutton.onclick = function () {
        this.form.textarea.value='';report(this,"Click");
    }

    f.submitbutton.onclick = function () {
        report(this,"Click"); return false;
    }

    f.resetbutton.onclick = function () {
        this.form.reset();report(this,'Click'); return false;
    }
}

    addhandlers(document.everythis);
```
+   下面一章将解释上面代码中的一些事项

### 4.3 脚本化表单元素
#### 4.3.1 命名表单和表单元素
+   每个表单元素都有name性质，`<form>`表单本身也有`name`属性，这个事项跟表单
提交没有任何关系。
+   如果定义了name属性，那么在表单的Form对象被创建时，他除了会座位Document对象的
数组forms[]的元素，还会在被储存在Document对象的属性中；这个心定义的属性就是name的值;
```
document.everything 
和下属代码是一样的
document.forms[0]
```
+   这样做的话就算不是第一个forms表单元素， 还是能找到form元素；
+   表单元素中也有name属性，所以比如像寻找 address 表单 的 zipcode 元素：
`document.address.zipcode`
+   如果Radio表单元素出现“单选妞” 互斥行文，那么name必须具有相同的name性质.
如上述例子一样，我们将radio 性质name为'browser';
```
document.address.browser[0]
document.address.browser[1]
document.address.browser[2]
```

#### 4.3.2 表单元素的属性
+   所有的表单元素都有下列属性，
    * type 一个只读字符，表示表单元素的类型
    * form 队包含该元素的Form对象的只读引用
    * name HTML的name性质指定的只读字符串
    * value 表单元素的值

## 5  脚本化cookie
### 5.1 Cookie 概览
+   cookie 是一个 name = value 键值对，每个cookie 都有四个可选的性质，分别控制
* 生存期 expires, 指定了cookie的生存期 （cookie) 是暂时存在的，关闭浏览器会消失；date 格式为 Date.toGMTString()
* 可见性 path, 默认情况下cookie 只在所在页面的文件夹中的页面内有效； 比如  www.baidu.com/cate/index.html  那么在 www.baidu.com/cate/about.html 之也可以生效
但是在 www.baidu.com/index.html 中无法生效。 可以通过修改path 来实现cookie 的共享文件夹。 如 path ='/' 是在所有的文件都生效， path ='/cate' 的话，就可以在
/cate  下也会生效； 但是如果是在两个服务器上的分布式网站呢？  比如 about.baidu.com    index.baidu.com  这两个服务器的时候 就会出现domain性质； 例如：
`path ='/' 并且把 domain ='.baidu.com'` 这样就可以了
* 安全性 secure true 的时候 会通过https 来发送cookie;

### 5.2 cookie的储存
+   存储cookie `location.cookie = "vaersion ="+ escape(document.lastModified);` 因为cookie值不能含有分好
，逗号或者空白符，因此需要escape()把值存入cookie之前对他进行编码； 并在读取时候 得使用 `unescape()`函数；
+   每个服务器保存的cookie数不能超过20个,为避免超过这个限制，为每个想保存的状态变量都设置一个单独的cookie不是一个
好主意，将多个相关的状态变量存储到一个cookie中；
```

### 5.3 cookie的读取
var allcookie = document.cookie;
var pos = allcookie.indexOf("version=");
//pos 返回的是version= 第一个出现的位置；

//如果找到了具有改名字的cookie,那么提取并使用它的值
if(pos != -1){
    var satart = pos + 8;          //version= 正好是8个字符，pos的话那么就找好是=号之后的
    var end = allcookie.indexOf(';',start);
    if(end ==-1) end = allcookie.length;
    var value = allcookie.substring(start,end);
    varlue = unescape(value);

    if(value != document.lastModified){
        alert("This document has changed since you were last here");
    }
}
```
当然，当对cookie 属性进行读操作属性的时候，得到的字符串不包含任何有关各种cookie属性的信息。但cookie属性只允许
设置这些属性，但却不允许你读取它们的值；

### 5.4 cookie 示例
+   下面这个例子是我们定义一个cookie对象，就为这个cookie对象制定了Document对象和一个名字，创建了这个
cookie 对象后，就可以设置这个对象的任意字符串属性，这些属性的值就储存在cookie的值中. 
+   说明： store()方法可以遍历cookie对象的所有由用户定义的属性，并将这些属性的名字和值连接到一个字符串中;


```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title></title>
    </head>
    <body>
        <script type="text/javascript" charset="utf-8">
            function Cookie(document , name, hours, path, domain, secure){
                // 该对象所有的预定义属性都有$开头，
                // 这是为了与存储在cookie中的属性区分开
                this.$document = document;
                this.$name = name;
                if(hours){
                    this.$expiration = new Date((new Date()).getTime() + hours*3600000);
                }else{
                    this.$expiration = null;
                }
                if(path) this.$path = path; else this.$path = null;
                if(domain) this.$domain = domain; else this.$domain =null;
                if(secure) this.$secure = true; else this.$secure = false;
            }

            Cookie.prototype.store = function(){
                //首先遍历cookie对象的属性，并且将cookie值连接起来;
                //由于cookie将等号和分号作为分隔符；
                //所有我们使用冒号和&分隔储存在单个cookie之中的状态变量
                //注意，我们队每个状态变量进行了转移，以防它还有标点符号或其他非法符号
                var cookieval = '';
                for(var prop in this){
                    //忽略所有名字以$ 开头的属性和方法
                    if((prop.charAt(0) == '$') || ((typeof this[prop]) =='function'))
                        continue;
                    if(cookieval !="") cookieval += '&';
                    cookieval +=prop + ':' + escape(this[prop]);
                }

                var cookie = this.$name + '=' + cookieval;

                if(this.$expiration)
                    cookie +='; expires = '+this.$expiration.toGMTString();
                if(this.$path) cookie += ';path=' +this.$path;
                if(this.domain) cookie +=';domain=' +this.$domain;
                if(this.secure) cookie +='; secure';

                this.$document.cookie = cookie;
            }

            Cookie.prototype.load = function() {
                //首先得到所有的cookie
                var allcookies = this.$document.cookie;
                if(allcookies == '') return false;

                //下面从该列表中提取一命名的cookie
                var start = allcookies.indexOf(this.$name +'=');
                if(start == -1){
                    return false;
                }

                start += this.$name.length +1 ;    //跳过名字和等号； 
                var end = allcookies.indexOf(';',start);
                if(end == -1){
                    end = allcookies.length;
                }
                var cookieval = allcookies.substring(end,start);
                //既然我们已经提取出了已命名的cookie的值
                //就可以把它分割存储到状态变脸和值中
                //使用split() 方法解析所有的数据
                var a = cookieval.split('&');
                for(var i=0;i<a.length;i++){
                    a[i] =a[i].split(':');
                }

                //既然我们已经解析了cookie值
                //就可以设置cookie对象中的状态变脸的名字和值
                //注意我们队属性值调用了unscape()方法
                for(var i=0;i<a.length;i++){
                    this[a[i][0]] = unescape(a[i][1]);
                }
                return true;
            }

                //该函数的 remove() 方法
            Cookie.prototype.remove = function (){
                var cookie; 
                cookie = this.$name+'=';
                if(this.$path) cookie +=';path='+ this.$path;
                if(this.$domain) cookie+='; domain ='+this.$domain;
                cookie +='; expires = Fri, 02-Jan-1970 00:00:00 GMT';
                this.$document.cookie = cookie;
            }

            var visitordata = new Cookie(document, "name_color_count_state" ,240);
            if(!visitordata.load() || !visitordata.name || !visitordata.color){
                visitordata.name = prompt("what is your name:","");
                visitordata.color = prompt("What is your favorite color:","");
            }
            if(visitordata.visits ==null) visitordata.visitordata=0;
            visitordata.visits ++;

            visitordata.store();

            document.write('<font size="7" color="'+visitordata.color+'">'+'Welcome,' + visitordata.name +'!'+'</font>' +'<p> You have visited' + visitordata.visits +'times.');
        </script>
        <input type="button" value="Forget My name" onclick="visitordata.remove()" />
    </body>
</html>
```

## 6 文档对象模型
+   各大浏览器厂商本来已经自己有一套自己的方法，所以w3c组织就发布了DOM来整合这一系列的方法到一起。
这个就是DOM为什么出现；DOM提供了各种各样的借口，可以方便的实现在上面已经说到的功能；

### 6.1 DOM概览
+   DOM是将一个HTML页面用一个树形表示。HTML中有个Node对象树。Node借口为遍历和操作树定义了属性和方法。
+   遍历对象 Node对象的childNodes 属性将返回子节点的列表。`firstChild,lastChild,nextSibling,previousSibling 和
parentNode`属性提供遍历树的方法.
+   修改添加 上面指的是遍历的方法，appendChild(),removeChild(),replaceChild和 insertBefore()可以方便的
让你在文档树中添加删除节点。

### 6.1.1 节点的类型
+   每个Node对象都有nodeType 属性，这些属性制定节点的类型。 
    * Element       Node.ELEMENT_NODE
    * Text          Node.Text_NODE
    * Document      Node.DOCUMENT_NODE
    * Comment       Node.COMMENT_NODE
    * DocumentFragment      Node.DOCUMENT_FRAGMENT_NODE
    * Attr          Node.ATTRIBUTE_NODE

+   document.getElementByTagName:
`document.getElementByTagName("body")[0] 获得body元素`
getElmentByTagName() 返回一个数组，包含所有的HTML元素的列表，如获取文档中所有的表：
` var tables = docuemnt.getElementByTagName('table');  alert("this html have" + tables.length +'tables;');`
+   有事我们想操作制定的一个表，那么就可以用 `document.getElementByTagName('table')[3] . 当这样并不是最好的，
最好的方法是在table中添加一个属性为id；
`<table id='specialTable'>` 然后通过`getElmentById("specialTable")`; 来获得

+   以下是一个例子 ， 将body中的元素翻转；
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title></title>
    </head>
    <body>
        <script type="text/javascript" charset="utf-8">
            function reverse(f){
                var kids = f.childNodes;
                var numbers = kids.length;
                for(var i = numbers-1;i>=0;i--){
                    var c = f.removeChild(kids[i]);
                    f.appendChild(c);
                }
            }
        </script>
        <p>paragraph #1</p>
        <p>paragraph #2</p>
        <p>paragraph #3</p>
        <button onclick='reverse(document.body)'>reverse</button>
    </body>
</html>
```
+   解释： `var kids = document.body` ， 拿到body内的所有子节点。并且记录`numbers = kids.length`; 
然后删除元素 `var c = f.removeChild(kids[i]);` 然后再将元素插入 `f.appendChild(c)` ;
+   上面的函数中可以将 `var c = f.removeChild(kids[i]); ` 删除， 因为在应用 appendChild() 函数的时候，
如果节点已存在，那么就会先删除， 再插入；
+   为了更好的理解上面这个例子，我们将上面的例子扩展一下；现在要做到不只是颠倒子节点元素，还要做到text元素内的
内容的颠倒。
```
<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>

    <script type="text/javascript">
        function reverse(f){
            /*下面是我自己写的版本
            var kids = f.childNodes;
            for (var i = kids.length - 1; i >= 0; i--) {
                if(kids[i].type ==3){
                    var reversed = '';
                    kdata = kids[i].data;
                    for(var j=data.length-1;j >=0;j--){
                        reversed +=data.charAt(j);
                    }
                    kids[i].data = reversed;
                }else{

                }
                */
                //但是这种方法只能做到将text的内容倒转，如果继续实现将childnodes倒转的话，还要做很多的
                //条件判断。 所以最简单的方法是用递归
                if(f.nodeType == 3){
                    var fdata = f.data;
                    var reversed = '';
                    for(var i=fdata.length -1 ; i>=0;i--){
                        reversed += fdata.charAt(i);
                    }
                    f.data = reversed;
                }else{
                    var kids = f.childNodes;
                    var numbers = kids.length;
                    for(var i = numbers-1;i>=0;i--){
                        reverse(kids[i]);
                        f.appendChild(f.removeChild(kids[i]));
                    }
                }

            }
        }
    </script>

    <p>paragraph #1</p>
    <p>paragraph #2</p>
    <p>paragraph #3</p>
    <button onclick='reverse(document.body)'>reverse</button>

</body>
</html>
```
+   还有一种方法是，遍历整个body子节点，找到text节点的时候，先用 `document.createTextNode()`方法创建一个
`Text`节点，然后再用`document.replaceChild()`方法替换原始的Text节点.(首先找到想要替换的节点的父节点，再使用replaceChild());

+   `setAttribute()` 方法对元素性质进行修改;
```
var headline = document.getElementById('headline')
headline.setAttribute('align','center');
```
当然可以直接使用标准性质的javascript属性;
`headline.align = 'center';`

+   以下还有一个简单的例子，使用`createElement()`函数创建一个新节点，然后使用`appendChild()`插入到文档中；
并通过 innerHTML 属性修改里面的内容以及相关操作;
```






















