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

/*app.get('/signin', function (req, res) {
    req.session.nickname = req.query.nickname;
    // res.redirect('/index');
});*/
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/signup',function(req,res){
    let read=JSON.parse(fs.readFileSync("../mock/api/user.json","utf-8"));
    let result=read.find((item)=>item.nickname==req.body.nickname);
    result?null:read.push(req.body);
    fs.writeFileSync("../mock/api/user.json",JSON.stringify(read));
    res.send(req.body);
});
app.post('/signin',function(req,res){
    let users=JSON.parse(fs.readFileSync("../mock/api/user.json","utf-8"));
    let user=users.find((item)=>(item.nickname==req.body.nickname));
    console.log(req.body.nickname,88888888888);
    req.session.name=req.body.nickname;
    res.send(JSON.stringify(user));
});
app.get('/other',function (req,res) {
    console.log(req.session.name,99999999999);
    let users=JSON.parse(fs.readFileSync("../mock/api/user.json","utf-8"));
    let user=users.find((item)=>(item.nickname==req.body.nickname));
    res.send(JSON.stringify(user));
});



app.get('/list',(req,res)=>{
    let data=fs.readFileSync(path.resolve('../mock/orderList.js'),'utf-8');
// data=JSON.stringify(data);
//     console.log(data);
    res.send(data)
});
app.post('/itemInfo',(req,res)=>{
    // console.log(req.body,99999999999);
    res.send(req.body)
});



/*app.post('/other',function(req,res){
    res.send('other');
});*/
app.listen(8001);
