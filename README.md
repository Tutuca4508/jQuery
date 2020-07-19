# jQuery

> ## 1. jQuery与原生js区别

- 加载模式不同
    * 原生JS会等到DOM元素加载完毕,并且图片也加载完毕才会执行
    * jQuery会等到DOM元素加载完毕,但不会等到图片也加载完毕就会执行

- 入口函数
    * 原生的JS如果编写了多个入口函数,后面编写的会覆盖前面编写的
    * jQuery中编写多个入口函数,后面的不会覆盖前面的


> ## 2. jQuery的冲突问题
释放$的使用权：` jQuery.noConflict()`
注意点: 释放操作必须在编写其它jQuery代码之前编写
释放之后就不能再使用$,改为使用jQuery(可自定义访问符号)

> ## 3. jQuery核心函数
核心函数：`$()`

1. 接受函数
2. 接受字符串
3. 接受字符串选择器

返回一个jQuery对象, 对象中保存了找到的DOM元素

4. 接受字符串代码片段

返回一个jQuery对象, 对象中保存了创建的DOM元素

5. 接受DOM元素

会被包装成一个jQuery对象返回给我们

**jQuery对象是一个伪数组**

> ## 4. 静态方法和实例方法
- 静态方法
    1. 定义一个类`function AClass() { }`
    2. 直接给类添加的就是静态方法
    ```javascript
    AClass.staticMethod = function () {
                alert("hello");
            }
    ```
    3. 调用静态方法`AClass.staticMethod();`

- 实例方法
     1. 定义一个类`function AClass() { }`
     2. 给类添加实例方法
     ```javascript
     AClass.prototype.instanceMethod = function () {
            alert("instanceMethod");
        }
     ```
     3. 调用实例方法
     ```javascript
        // 创建实例对象
        var a = new AClass();
        // 通过实例调用实例方法
        a.instanceMethod();
     ```
> ## 5. 静态方法each方法
 - 原生的forEach方法只能遍历数组, 不能遍历伪数组
```javascript
    数组（伪数组）.foreach（function (value,index) {
        console.log(index, value);
}）
```
- jQuery的each方法是可以遍历伪数组的
```javascript
    $.each(数组(伪数组),function (value,index) {
        console.log(index, value);
    })
```
> ## 6. 静态方法map方法
- 原生的map方法只能遍历数组, 不能遍历伪数组
  ```javascript
    数组（伪数组）.foreach（function (value,index,array) {
        console.log(index, value, array);
    }）
    ```
- jQuery的map方法是可以遍历伪数组的
    ```javascript
    数组（伪数组）.foreach（function (value,index,array) {
        console.log(index, value, array);
    }）
    ```
> ## 7.each与map区别
- each静态方法默认的返回值就是, 遍历谁就返回谁
- map静态方法默认的返回值是一个空数组
- each静态方法不支持在回调函数中对遍历的数组进行处理
- map静态方法可以在回调函数中通过return对遍历的数组进行处理, 然后生成一个新的数组返回

> ## 8. jQuery中的其他静态方法
- `$.trim()`
   
    作用: 去除字符串两端的空格

- `$.isWindow()`

    作用: 判断传入的对象是否是window对象

- `$.isArray()`

    作用: 判断传入的对象是否是真数组
- `$.isFunction`

    作用: 判断传入的对象是否是一个函数

> ## 9. 静态方法holdReady方法
`$.holdReady(true)`

作用: 暂停ready执行

`$.holdReady(false)`

作用：恢复ready执行

> ## 10. 内容选择器
`:empty `

作用:找到既没有文本内容也没有子元素的指定元素

`:parent `

作用: 找到有文本内容或有子元素的指定元素

`:contains(text) `

作用: 找到包含指定文本内容的指定元素

` :has(selector) `

作用: 找到包含指定子元素的指定元素

> ## 11. 属性和属性节点
1. 什么是属性?

    对象身上保存的变量就是属性

2. 如何操作属性?

    对象.属性名称 = 值;

    对象.属性名称;

    对象["属性名称"] = 值;

    对象["属性名称"];
```javascript
    var p = new Person();
    // p.name = "lnj";
    p["name"] = "zs";
    // console.log(p.name);
    console.log(p["name"]);
```
3. 什么是属性节点?

`<span name = "it666"></span>`
- 在编写HTML代码时,在HTML标签中添加的属性就是属性节点
- 在浏览器中找到span这个DOM元素之后, 展开看到的都是属性
- 在attributes属性中保存的所有内容都是属性节点

4. 如何操作属性节点？
- DOM元素.setAttribute("属性名称", "值");
- DOM元素.getAttribute("属性名称");

5. 属性和属性节点的区别

    任何对象都有属性, 但是只有DOM对象才有属性节点   

> ## 12. jQuery的attr方法
`attr(name|pro|key,val|fn)`
- 传递一个参数, 代表获取属性节点的值
    - 无论找到多少个元素, 只返回第一个元素指定的属性节点的值

- 传递两个参数, 代表设置属性节点的值
    - 找到多少个元素就会设置多少个元素
    - 如果设置的属性节点不存在, 那么系统会自动新增

`removeAttr(name)` 

删除节点

会删除所有找到元素指定的属性节点


> ## 13. jQuery的prop方法
- 官方推荐在操作属性节点时,具有 true 和 false 两个属性的属性节点，如 checked, selected 或者 disabled 使用prop()，其他的使用 attr()
            
```javascript
    $(function () {
            $("span").eq(0).prop("demo", "it666");
            $("span").eq(1).prop("demo", "lnj");
            console.log($("span").prop("demo"));
            $("span").removeProp("demo");
        });
    <span class="span1" name="it666"></span>
    <span class="span2" name="lnj"></span>

    console.log($("input").prop("checked")); // true / false
    console.log($("input").attr("checked")); // checked / undefined
```