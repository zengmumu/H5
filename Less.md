# WHAT'S LESS
1. Less 是一门 CSS 预处理语言
2. 思维：像写JS和PHP一样去写CSS
3. 语法特性：变量、函数、Mixin...

# 2.例子
example.less
```
@color: #4D926F; 

 #header { 
     color: @color; 
 } 

 h2 { 
    color: @color; 
 }


```
example.css
```
 #header { 
    color: #4D926F; 
 } 

 h2 { 
    color: #4D926F; 
 }
```

# HOW TO USE
1. 通过npm安装less
npm install -g less
2. 用less js
    ```
    <link rel="stylesheet/less" href="less.less" type="text/css" />
    <script src="less.js"></script>
    ```
3. kaola

# 语法
1. 变量

```
@nice-blue: #5B83AD;
@light-blue: @nice-blue + #111;

#header {
    color: @nice-blue;
}

#header-1{
    color:@light-blue
}

```
2. 运算
```
@base: 5%;
@filler: @base * 2;
@other: @base + @filler;

#pro{
    color: #888 / 4;
    background-color: @base-color + #111;
    height: 100% / 2 + @filler;
}

```
3. 混合
```
.common-style{
    color: #FFF;
}

#pro{
    .common-style
    background-color: @base-color + #111;
}

```
4. 混合传参
```
.border-radius (@radius) {
    border-radius: @radius;
    -moz-border-radius: @radius;
    -webkit-border-radius: @radius;
}
#header {
    .border-radius(4px);
}

```
5. 混合传参默认值

```
.border-radius (@radius:5px;) {
    border-radius: @radius;
    -moz-border-radius: @radius;
    -webkit-border-radius: @radius;
}
#header {
    .border-radius;
}

```

6. 匹配模型

```
.po(r){  position: relative;}

.po(a){  position: absolute; }

.po(f){  position:fixed;  }

.po(s){  position: static; }

.header{
    .po(f);
}
```

7. 嵌套

```
#header {
    color: black;
    .navigation {
        font-size: 12px;
    }

    .logo {
        width: 300px;
 &:hover { text-decoration: none }
    }
}
&代表上一个选择器

```
8. 函数
```
@width: 3.65

#pro{
    width: ceil(@width);
}

data-uri
data-uri('../data/image.jpg');
url('data:image/jpeg;base64,bm90IGFjdHVhbGx5IGEganBlZyBmaWxlCg==');

lighten(hsl(90, 80%, 50%), 20%)
darken(hsl(90, 80%, 50%), 20%)
```
9. 注释 
```
ss可以使用/* */
也可以使用//
//在编译时会自动过滤掉
```
10. 导入
```
@import "lib.less"; 
@import "lib";

css导入：
@import "lib.css"; 
```
10. 字符串
```
@base-url: "http://assets.fnord.com"; 

background-image: url("@{base-url}/images/bg.png");
```
11. 避免编译 
```

.class { filter: ~"ms:alwaysHasItsOwnSyntax.For.Stuff()"; }

编译后：
.class { filter: ms:alwaysHasItsOwnSyntax.For.Stuff(); }

~”xxxx”来避免LESS引擎处理部分独特CSS语法。
```
循环
```
.myloop(@counter,@i:0)when(@i<@counter){
    @c:@i+1;
   
   
    .col-@{c}
    {
       flex: 0 0  @c+0%;
       max-width: @c+0%; 
    }
    .col-offset-@{c}
    {
        margin-left:@c+0%;
    }
     .myloop(@counter,@i + 1);
}
.myloop(100);
```

作为函数用的mixin
```
.mixin() {
  @width:  100%;
  @height: 200px;
}

.caller {
  .mixin();
  width:  @width;
  height: @height;
}
结果
.caller {
  width:  100%;
  height: 200px;
}

.average(@x, @y) {
  @average: ((@x + @y) / 2);
}

div {
  .average(16px, 50px); // "call" the mixin
  padding: @average;    // use its "return" value
}

结果

div {
  padding: 33px;
}
```



