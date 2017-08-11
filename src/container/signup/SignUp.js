/*注册页面*/
import './signup.less';
import {ajax} from '../../util/index';
import React,{Component} from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {
    HashRouter as Router,Route,Link,Switch
} from "react-router-dom";
import SignIn from "../signin/SignIn";
import utils from '../../localStorange/utils';

export default  class SignUp extends Component{
    constructor(){
        super();
        this.state={
            title:'注册'
        }
    }
    handleClick=(event)=>{
        event.preventDefault();
        let nickname=this.refs.nickname.value;
        let tel=this.refs.tel.value;
        let password=this.refs.password.value;
        let cpwd=this.refs.cpwd.value;
            if(utils){
                if(nickname&&password&&cpwd&&tel){
                    console.log(1);
                    if(utils.readUsers().some((item)=>item.nickname==nickname)){
                        alert('用户名已经被注册')
                    }else if(utils.readUsers().some((item)=>item.tel==tel)){
                        alert('手机号已经被注册')
                    }else if(!(/^1([3-8])(\d{9})$/.test(tel))){
                        alert('您输入的手机号不存在')
                    }else if(!(password===cpwd)){
                        alert('两次输入的密码不匹配o(╥﹏╥)o')
                    }else if(password.length<6){
                        alert('请输入6位或6位以上的密码哦~')
                    }else{
                        utils.saveUser({nickname,tel,password,cpwd});
                        this.props.history.push('/signin');
                    }
                }else{
                    alert('对不起，您的注册信息填写不完整,请填写完整后提交(￣︶￣)!')
                     }
            }
            /*if(!(/^1([3-8])(\d{9})$/.test(tel))){
                alert('您输入的手机号不存在')
            }else if(!(password===cpwd)){
                alert('两次输入的密码不匹配o(╥﹏╥)o')
            }else if(password.length<6){
                alert('请输入6位以上的密码哦~')
            }else{
                let data = {
                    nickname: this.refs.nickname.value,
                    tel: this.refs.tel.value,
                    password: this.refs.password.value,
                    cpwd: this.refs.cpwd.value,
                };
                ajax({
                    method:'post',
                    url:'http://localhost:8001/signup',
                    async:true,
                    data:data,
                    headers:{} }).then((result)=>{
                    console.log(result);
                }).catch((err)=>{
                    console.log(err);
                });
                this.props.history.push('/signin');
            }
        }else{
            alert('对不起，您的注册信息填写不完整,请填写完整后提交(￣︶￣)!')*/
        // }

    };
    render(){
        return (
            <div>
                <Header title={this.state.title}/>
                <div className="text">
                    <span className="text1">欢迎注册成为本店会员用户</span>
                    <span className="text2">可以直接免排队点餐哦~</span>
                </div>
                <form id="form" method="post" onSubmit={this.handleClick}>
                    <div className="form-group">
                        <label htmlFor="nickname">昵称</label>
                        <input required ref='nickname' id="nickname" type="text" placeholder="昵称"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tel">手机号</label>
                        <input required ref='tel' id="tel" type="text" placeholder="请输入您的手机号"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">密码</label>
                        <input required ref='password' id="password" type="password" placeholder="请设置您的密码"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">确认密码</label>
                        <input required ref='cpwd' id="cpwd" type="password" placeholder="请重新验证您的密码"/>
                    </div>
                </form>
                <div className="form-group">
                    <button onClick={this.handleClick}>立即注册</button>
                </div>
            </div>
        )
    }
}