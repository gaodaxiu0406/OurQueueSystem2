## 跨域不能携带cookie的解决方案
- 在后台加上下面这句话
```
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
```
- 前端ajax加上下面这句话
```
xhr.withCredentials = true;
```

## 遍历数组的方法(ES5为数组定义了五个迭代方法)
- forEach()：没有返回值，只是针对每个数组项调用指定的函数(callbackfn)
- every(): 返回一个布尔值(true或false)，判断每个数组项是否符合指定函数的条件，符合为true，反之为false
- some(): 返回一个布尔值(true或false),判断每个数组项是否符合指定函数的条件，只要有任何一项返回为true，就会返回true
- filter(): 每个数组项调用指定的函数，条件为true的将返到一个新数组中
- map(): 每个数组项调用指定的函数，返回每次函数调用的结果组成一个新数组
著作权归作者所有。
商业转载请联系作者获得授权,非商业转载请注明出处。
原文: https://www.w3cplus.com/javascript/array-part-7.html © w3cplus.com