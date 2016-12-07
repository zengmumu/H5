# Class基本语法
ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。
```
//定义类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '('+this.x+', '+this.y+')';
  }
}
```
上面代码定义了一个“类”，可以看到里面有一个constructor方法，这就是构造方法，而this关键字则代表实例对象。

### constructor方法
constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。

实例对象
```
var point = new Point(2, 3);
name属性
class Point {}
Point.name // "Point"
```
class表达式
与函数一样，Class也可以使用表达式的形式定义。
```
const MyClass = class Me {
  getClassName() {
    return Me.name;
  }
};
```

### Class的继承
Class之间可以通过extends关键字，实现继承。

子类会继承父类的属性和方法。
```
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
 
class ColorPoint extends Point {
  constructor(x, y, color) {
    this.color = color; // 错误
    super(x, y);
    this.color = color; // 正确
  }
}
```
上面代码中，子类的constructor方法没有调用super之前，就使用this关键字，结果报错，而放在super方法之后就是正确的。

注意：ColorPoint继承了父类Point，但是它的构造函数必须调用super方法。

下面是生成子类实例的代码。
```
let cp = new ColorPoint(25, 8, 'green');
cp instanceof ColorPoint // true
cp instanceof Point // true
```

# class的取值函数（getter）和存值函数（setter）
在Class内部可以使用get和set关键字，对某个属性设置存值函数和取值函数。
```
class MyClass {
  get prop() {
    return 'getter';
  }
  set prop(value) {
    document.write('setter: '+value);
  }
}
 
let inst = new MyClass();
 
inst.prop = 123;
// setter: 123
 
inst.prop
// 'getter'
```
上面代码中，prop属性有对应的存值函数和取值函数，因此赋值和读取行为都被自定义了。

# Class的静态方法
类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
```
class Foo {
  static classMethod() {
    return 'hello';
  }
}
Foo.classMethod() // 'hello'
var foo = new Foo();
foo.classMethod()
// TypeError: undefined is not a function
```
上面代码中，Foo类的classMethod方法前有static关键字，表明该方法是一个静态方法，可以直接在Foo类上调用（Foo.classMethod()），而不是在Foo类的实例上调用。如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法。

父类的静态方法，可以被子类继承。
```
class Foo {
  static classMethod() {
    return 'hello';
  }
}
class Bar extends Foo {
}
Bar.classMethod(); // 'hello'
```
上面代码中，父类Foo有一个静态方法，子类Bar可以调用这个方法。

静态方法也是可以从super对象上调用的。
```
class Foo {
  static classMethod() {
    return 'hello';
  }
}
class Bar extends Foo {
  static classMethod() {
    return super.classMethod() + ', too';
  }
}
Bar.classMethod();
```