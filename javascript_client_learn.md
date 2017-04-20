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
### 1.2.5 javascript 程序的执行；
+   接下来的几张解释了不同形式的额javascript代码是如何执行的，虽然有些显而易见，但是又大量的细节需要介绍；











