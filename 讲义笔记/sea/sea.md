# seaJS入门
SeaJS是一个遵循CommonJS规范的JavaScript模块加载框架，可以实现JavaScript的模块化开发及加载机制。与jQuery等JavaScript框架不同，SeaJS不会扩展封装语言特性，而只是实现JavaScript的模块化及按模块加载。SeaJS的主要目的是令JavaScript开发模块化并可以轻松愉悦进行加载，将前端工程师从繁重的JavaScript文件及对象依赖处理中解放出来，可以专注于代码本身的逻辑。SeaJS可以与jQuery这类框架完美集成。使用SeaJS可以提高JavaScript代码的可读性和清晰度，解决目前JavaScript编程中普遍存在的依赖关系混乱和代码纠缠等问题，方便代码的编写和维护。

SeaJS的作者是淘宝前端工程师玉伯。

对于前端们来说，后端的一些语言非常让我们感觉到和蔼可亲，没有浏览器的烦恼，可以随便include、随便require，又有class，用起来非常的爽。我们羡慕了这么久，前端的发展也正从这条路上熙熙攘攘的走来，各种思想和潮流蜂拥而至，不过是js还是css都非常革命性的的影响了我们。

### 定义一个模块
```
define(function(require, exports, module) {
     alert("sea is work");
});

使用一个模块
<script src="../js/sea.js"></script>
<script>        seajs.use("a");    </script>
```


### 工厂函数factory解析
工厂函数是模块的主体和重点。在只传递一个参数给define时（推荐写法），这个参数就是工厂函数，此时工厂函数的三个参数分别是：  
1.require——模块加载函数，用于记载依赖模块。  
2.exports——接口点，将数据或方法定义在其上则将其暴露给外部调用。
3.module——模块的元数据。  
第一种定义模块的模式是基于exports的模式：    
代码如下:
```
define(function(require, exports, module) {
    var a = require('a'); //引入a模块
    var b = require('b'); //引入b模块

    var data1 = 1; //私有数据

    var func1 = function() { //私有方法
        return a.run(data1);
    }

    exports.data2 = 2; //公共数据

    exports.func2 = function() { //公共方法
        return 'hello';
    }
});
```



### 模块的载入和引用
模块的寻址算法  
上文说过一个模块对应一个js文件，而载入模块时一般都是提供一个字符串参数告诉载入函数需要的模块，所以就需要有一套从字符串标识到实际模块所在文件路径的解析算法。SeaJS支持如下标识：  
绝对地址——给出js文件的绝对路径。  

代码如下:
```
require("http://example/js/a");
```

就代表载入 http://example/js/a.js 。  
相对地址——用相对调用载入函数所在js文件的相对地址寻找模块。  
例如在 http://example/js/b.js 中载入  
代码如下:  
```
require("./c");
```

则载入 http://example/js/c.js 。  
基址地址——如果载入字符串标识既不是绝对路径也不是以”./”开头，则相对SeaJS全局配置中的“base”来寻址，这种方法稍后讨论。  
注意上面在载入模块时都不用传递后缀名“.js”，SeaJS会自动添加“.js”。但是下面三种情况下不会添加：  
载入css时，如:  
代码如下:  
```
require("./module1-style.css");
```

路径中含有”?”时，如:   
代码如下:  
```
require(<a href="http://example/js/a.json?cb=func">http://example/js/a.json?cb=func</a>);
```

路径以”#”结尾时，如:
代码如下:
```
require("http://example/js/a.json#");
```
根据应用场景的不同，SeaJS提供了三个载入模块的API，分别是seajs.use，require和require.async，下面分别介绍。


### seajs.use
seajs.use主要用于载入入口模块。入口模块相当于C程序的main函数，同时也是整个模块依赖树的根。上面在TinyApp小例子中，init就是入口模块。seajs.use用法如下：
复制代码代码如下:
```
//单一模式
seajs.use('./a');

//回调模式
seajs.use('./a', function(a) {
 a.run();
});

//多模块模式
seajs.use(['./a', './b'], function(a, b) {
 a.run();
 b.run();
});
```

seaJS入门
SeaJS是一个遵循CommonJS规范的JavaScript模块加载框架，可以实现JavaScript的模块化开发及加载机制。与jQuery等JavaScript框架不同，SeaJS不会扩展封装语言特性，而只是实现JavaScript的模块化及按模块加载。SeaJS的主要目的是令JavaScript开发模块化并可以轻松愉悦进行加载，将前端工程师从繁重的JavaScript文件及对象依赖处理中解放出来，可以专注于代码本身的逻辑。SeaJS可以与jQuery这类框架完美集成。使用SeaJS可以提高JavaScript代码的可读性和清晰度，解决目前JavaScript编程中普遍存在的依赖关系混乱和代码纠缠等问题，方便代码的编写和维护。  

SeaJS的作者是淘宝前端工程师玉伯。  
对于前端们来说，后端的一些语言非常让我们感觉到和蔼可亲，没有浏览器的烦恼，可以随便include、随便require，又有class，用起来非常的爽。我们羡慕了这么久，前端的发展也正从这条路上熙熙攘攘的走来，各种思想和潮流蜂拥而至，不过是js还是css都非常革命性的的影响了我们。  
定义一个模块
```
define(function(require, exports, module) {
     alert("sea is work");
});
```

使用一个模块
```
<script src="../js/sea.js"></script>
<script>        seajs.use("a");    </script>
```


工厂函数factory解析
工厂函数是模块的主体和重点。在只传递一个参数给define时（推荐写法），这个参数就是工厂函数，此时工厂函数的三个参数分别是：
1. require——模块加载函数，用于记载依赖模块。
2. exports——接口点，将数据或方法定义在其上则将其暴露给外部调用。
3. module——模块的元数据。
第一种定义模块的模式是基于exports的模式：
代码如下:
```
define(function(require, exports, module) {
    var a = require('a'); //引入a模块
    var b = require('b'); //引入b模块

    var data1 = 1; //私有数据

    var func1 = function() { //私有方法
        return a.run(data1);
    }

    exports.data2 = 2; //公共数据

    exports.func2 = function() { //公共方法
        return 'hello';
    }
});
```



模块的载入和引用
模块的寻址算法
上文说过一个模块对应一个js文件，而载入模块时一般都是提供一个字符串参数告诉载入函数需要的模块，所以就需要有一套从字符串标识到实际模块所在文件路径的解析算法。SeaJS支持如下标识：
绝对地址——给出js文件的绝对路径。
如:
代码如下:
require("http://example/js/a");

就代表载入 http://example/js/a.js 。
相对地址——用相对调用载入函数所在js文件的相对地址寻找模块。
例如在 http://example/js/b.js 中载入
代码如下:
```
require("./c");
```
则载入 http://example/js/c.js 。

基址地址——如果载入字符串标识既不是绝对路径也不是以”./”开头，则相对SeaJS全局配置中的“base”来寻址，这种方法稍后讨论。
注意上面在载入模块时都不用传递后缀名“.js”，SeaJS会自动添加“.js”。但是下面三种情况下不会添加：
载入css时，如:
代码如下:
```
require("./module1-style.css");
```
路径中含有”?”时，如:
代码如下:
```
require(<a href="http://example/js/a.json?cb=func">http://example/js/a.json?cb=func</a>);
```
路径以”#”结尾时，如:
代码如下:
```
require("http://example/js/a.json#");
```
根据应用场景的不同，SeaJS提供了三个载入模块的API，分别是seajs.use，require和require.async，下面分别介绍。


seajs.use
seajs.use主要用于载入入口模块。入口模块相当于C程序的main函数，同时也是整个模块依赖树的根。上面在TinyApp小例子中，init就是入口模块。seajs.use用法如下：
复制代码代码如下:
```
//单一模式
seajs.use('./a');

//回调模式
seajs.use('./a', function(a) {
  a.run();
});

//多模块模式
seajs.use(['./a', './b'], function(a, b) {
  a.run();
  b.run();
});
```





### require
require是SeaJS主要的模块加载方法，当在一个模块中需要用到其它模块时一般用require加载：  
复制代码代码如下:  
```
var m = require('/path/to/module/file');
```
这里简要介绍一下SeaJS的自动加载机制。上文说过，使用SeaJS后html只要包含sea.js即可，那么其它js文件是如何加载进来的呢？SeaJS会首先下载入口模块，然后顺着入口模块使用正则表达式匹配代码中所有的require，再根据require中的文件路径标识下载相应的js文件，对下载来的js文件再迭代进行类似操作。整个过程类似图的遍历操作（因为可能存在交叉循环依赖所以整个依赖数据结构是一个图而不是树）。
明白了上面这一点，下面的规则就很好理解了：

传给require的路径标识必须是字符串字面量，不能是表达式，如下面使用require的方法是错误的：  
复制代码代码如下:  
```
require('module' + '1');
require('Module'.toLowerCase());
```

这都会造成SeaJS无法进行正确的正则匹配以下载相应的js文件。


### equire.async
上文说过SeaJS会在html页面打开时通过静态分析一次性记载所有需要的js文件，如果想要某个js文件在用到时才下载，可以使用require.async：  
复制代码代码如下:  
```
require.async('/path/to/module/file', function(m) {
    //code of callback...
});
```
这样只有在用到这个模块时，对应的js文件才会被下载，也就实现了JavaScript代码的按需加载。


### SeaJS的全局配置
SeaJS提供了一个seajs.config方法可以设置全局配置，接收一个表示全局配置的配置对象。具体使用方法如下：
复制代码代码如下:
```
seajs.config({
    base: 'path/to/jslib/',
    alias: {
      'app': 'path/to/app/'
    },
    charset: 'utf-8',
    timeout: 20000,
    debug: false
});
```

其中base表示基址寻址时的基址路径。例如base设置为
```
http://example.com/js/3-party/ ，则:
```
复制代码代码如下:
```
var $ = require('jquery');
```
会载入 http://example.com/js/3-party/jquery.js 。  
alias可以对较长的常用路径设置缩写。  
charset表示下载js时script标签的charset属性。  
timeout表示下载文件的最大时长，以毫秒为单位  。
debug表示是否工作在调试模式下。  
SeaJS如何与现有JS库配合使用  
要将现有JS库如jQuery与SeaJS一起使用，只需根据SeaJS的的模块定义规则对现有库进行一个封装。例如，下面是对jQuery的封装方法：
复制代码代码如下:
```
define(function() {

//{{{jQuery原有代码开始
jQuery原有代码结束

return $.noConflict();
});
```







Sea的配置文件
https://github.com/seajs/seajs/issues/262