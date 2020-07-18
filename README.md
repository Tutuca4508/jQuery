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
>  ## 6. 静态方法map方法
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