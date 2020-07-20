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

> ## 14. jQuery操作类相关方法
`addClass(class|fn)`

- 作用: 添加一个类
- 如果要添加多个, 多个类名之间用空格隔开即可
`removeClass([class|fn])`

- 作用: 删除一个类
- 如果想删除多个, 多个类名之间用空格隔开即可

`toggleClass(class|fn[,sw])`
- 作用: 切换类
- 有就删除, 没有就添加

> ## 15.jQuery文本值相关方法
`html([val|fn])`

`text([val|fn])`

`val([val|fn|arr])`

> ## 16. jQuery操作CSS样式的方法
```javascript
$(function () {
            // 编写jQuery相关代码
            // 1.逐个设置
            $("div").css("width", "100px");
            $("div").css("height", "100px");
            $("div").css("background", "red");

            // 2.链式设置
            // 注意点: 链式操作如果大于3步, 建议分开
            $("div").css("width", "100px").css("height", "100px").css("background", "blue");

            // 3.批量设置
            $("div").css({
                width: "100px",
                height: "100px",
                background: "red"
            });

            // 4.获取CSS样式值
            console.log($("div").css("background"));;
        });
```
> ## 17. Query位置和尺寸操作的方法
- 获取元素的宽度
`$("元素名").width()`
`$("元素名").offset().left`  获取元素距离窗口的偏移位
`$(".son").position().left`  获取元素距离定位元素的偏移位 
- 设置元素的宽度
`$("元素名").width("200px")`
`$("元素名").offset({ left:10 })`  
 
 > ## 18. jQuery的scrollTop方法
 ```javascript
                // 获取滚动的偏移位
                console.log($(".scroll").scrollTop());
                // 获取网页滚动的偏移位
                // 注意点: 为了保证浏览器的兼容, 获取网页滚动的偏移位需要按照如下写法
                console.log($("body").scrollTop()+$("html").scrollTop());
            
                // 设置滚动的偏移位
                $(".scroll").scrollTop(300);
                // 设置网页滚动偏移位
                // 注意点: 为了保证浏览器的兼容, 设置网页滚动偏移位的时候必须按照如下写法
                $("html,body").scrollTop(300);
            
      
 ```

 >## 19. jQuery事件绑定
 - jQuery中有两种绑定事件方式
    - 1.eventName(fn);
        - 编码效率略高/ 部分事件jQuery没有实现,所以不能添加
    - 2.on(eventName, fn);
        - 编码效率略低/ 所有js事件都可以添加
> ## 20. jQuery事件移除
```javascript
$(function () {
            function test1() {
                alert("hello lnj");
            }
            function test2() {
                alert("hello 123");
            }
            // 编写jQuery相关代码
            $("button").click(test1);
            $("button").click(test2);
            $("button").mouseleave(function () {
                alert("hello mouseleave");
            });
            $("button").mouseenter(function () {
                alert("hello mouseenter");
            });

            // off方法如果不传递参数, 会移除所有的事件
            // $("button").off();

            // off方法如果传递一个参数, 会移除所有指定类型的事件
            // $("button").off("click");

            // off方法如果传递两个参数, 会移除所有指定类型的指定事件
            $("button").off("click", test1);
        });
```
> ## 21. jQuery事件冒泡和默行为

- 阻止冒泡
```javascript
$(".son").click(function (event) {
        alert("son");
        // 1. return false;
        // 2. event.stopPropagation();
 });
```
- 阻止默认行为
```javascript
$("a").click(function (event) {
        alert("弹出注册框");
        // 1. return false;
        // 2. event.preventDefault();
});
```
> ## 22. jQuery事件自动触发
`$(".father").trigger("click")`
`$(".father").triggerHandler("click")`
- trigger: 如果利用trigger自动触发事件,会触发事件冒泡,会触发默认行为
- triggerHandler: 如果利用triggerHandler自动触发事件, 不会触发事件冒泡,不会触发默认行为

> ## 23. jQuery自定义事件
- 1.事件必须是通过on绑定的
- 2.事件必须通过trigger来触发
```javascript
$(".son").on("myClick", function () {
    alert("son");
});
$(".son").triggerHandler("myClick");
```

> ## 24. jQuery事件命名空间
想要事件的命名空间有效,必须满足两个条件
- 1.事件是通过on来绑定的
- 2.通过trigger触发事件
```javascript
            $(".son").on("click.zs", function () {
                alert("click1");
            });
            $(".son").on("click.ls", function () {
                alert("click2");
            });
            // $(".son").trigger("click.zs");
            $(".son").trigger("click.ls");
```
> ## 25. jQuery事件命名空间面试题
```javascript
            $(function () {

            $(".father").on("click.ls", function () {
                alert("father click1");
            });
            $(".father").on("click", function () {
                alert("father click2");
            });
            $(".son").on("click.ls", function () {
                alert("son click1");
            });
            /*
            利用trigger触发子元素带命名空间的事件, 那么父元素带相同命名空间的事件也会被触发. 而父元素没有命名空间的事件不会被触发

            利用trigger触发子元素不带命名空间的事件,那么子元素所有相同类型的事件和父元素所有相同类型的事件都会被触发
            */
            // $(".son").trigger("click.ls");
            $(".son").trigger("click");
        });
```

> ## 26. 事件委托
- 什么是事件委托?
    请别人帮忙做事情, 然后将做完的结果反馈给我们
```javascript
$(function () {
            $("button").click(function () {
                $("ul").append("<li>我是新增的li</li>");
            })

            /*
            在jQuery中,如果通过核心函数找到的元素不止一个, 那么在添加事件的时候,jQuery会遍历所有找到的元素,给所有找到的元素添加事件
            */

            // $("ul>li").click(function () {
            //     console.log($(this).html());
            // });

            /*
            以下代码的含义, 让ul帮li监听click事件
            之所以能够监听, 是因为入口函数执行的时候ul就已经存在了, 所以能够添加事件
            之所以this是li,是因为我们点击的是li, 而li没有click事件, 所以事件冒泡传递给了ul,ul响应了事件, 既然事件是从li传递过来的,所以ul必然指定this是谁
            */
            $("ul").delegate("li", "click", function () {
                console.log($(this).html());
            });
        });
```
> ## 27. 事件移入移出
- mouseenter/mouseleave事件, 子元素被移入移出不会触发父元素的事件推荐大家使用
- hover
```javascript
            $(".father").hover(function () {
                console.log("father被移入了");
            },function () {
                console.log("father被移出了");
            });
```