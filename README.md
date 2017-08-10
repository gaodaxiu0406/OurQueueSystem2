## 跨域不能携带cookie的解决方案
- 在后台加上下面这句话
```
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
```
- 前端ajax加上下面这句话
```
xhr.withCredentials = true;
```

