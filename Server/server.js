let express = require('express');
let bodyParser=require('body-parser');
let fs=require('fs');
let app = express();
let path=require('path');
let session=require('express-session');
app.use(session({
    secret: 'cat',//加密的密钥
    resave: true,//每次客户端请求服务器的时候 都要重新保存session
    saveUninitialized: true,//保存未初始化的session
    cookie: { secure: true }
}));
app.get('/write',function (req,res) {
    //每当使用了session中间件之后 会在请求对象req上多一个session属性 {name:zfpx}
    //req.send
    req.session.name='zfpx';
    res.end('write ok');
});
app.get('/read',function (req,res) {
    res.end(req.session.name);
});
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/signup',function(req,res){
    res.send('注册');
});
app.post('/signup',function(req,res){
    let read=JSON.parse(fs.readFileSync("../mock/api/user.json","utf-8"));
    let result=read.find((item)=>item.nickname==req.body.nickname);
    result?null:read.push(req.body);
    fs.writeFileSync("../mock/api/user.json",JSON.stringify(read));
    res.send(req.body);
});
app.post('/signin',function(req,res){
    let users=JSON.parse(fs.readFileSync("../mock/api/user.json","utf-8"));
    // console.log(req.body,users);
    let user=users.find((item)=>(item.nickname==req.body.nickname));
    // console.log(user);
    res.send(JSON.stringify(user));
});
app.get('/list',(req,res)=>{
    let data=fs.readFileSync(path.resolve('../mock/orderList.js'),'utf-8');
// data=JSON.stringify(data);
//     console.log(data);
    res.send(data)
});
app.post('/itemInfo',(req,res)=>{
    console.log(req.body);
    res.send(req.body)
});



/*app.get('/info',function(req,res){
    let users=JSON.parse(fs.readFileSync("../mock/api/user.json","utf-8"));
    console.log(req.body,res);
    let user=users.filter((item)=>(item.nickname!=req.body.nickname));
    console.log(user);
    // res.send(JSON.stringify(user));

});*/

/*app.post('/info',function(req,res){
    // console.log(req.body);
    let obj = {
        code:100,
        msg: 'ok',
        data:[
            '个人信息'
        ]
    };
    res.send(obj);
});*/
// app.get('/list',()=>{
//
// });
// let category = require('./routes/category');
// app.use('/user',user);
// app.use('/category',category);
app.post('/other',function(req,res){
    res.send('other');
});
app.listen(8000);
