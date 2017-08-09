/**
 * 登录页面
 */
import './signin.less'
import React,{Component} from "react";
import Header from "../../components/header/Header";
import {connect} from "react-redux";
import {ajax} from '../../util/index';
import {
    HashRouter as Router,Route,Link,Switch
} from "react-router-dom";
import Index from "../index/Index";
class SignIn extends Component{
    constructor(){
        super();
        this.state={title:'登录'}
    }
    handleClick=()=>{
        console.log(this.props);
        let data={
            nickname:this.refs.username.value,
            pwd:this.refs.password.value}
        console.log(data);
        ajax({
            method:'post',
            url:'http://localhost:8000/signin',
            async:true,
            data:data,
            headers:{} }).then((result)=>{
            result=JSON.parse(result);
            if(result=="ok"){
                this.props.getUserInfo(data);
                this.props.history.push("/index")
                console.log(this.props);
            }else{
                alert("用户名或密码错误")
            }


        }).catch((err)=>{
            console.log(err);
        });

    }
    render(){
        return (
            <div>
                <Header title={this.state.title}/>
                <img className="avatar" src="../../../static/img/avatar.png" alt="个人头像"/>
                <form id="form" method="get">
                    <div className="form-group">
                        <label htmlFor="name">昵称</label>
                        <input id="name" ref="username" type="text" placeholder="请输入您的用户名"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">密码</label>
                        <input id="name" ref="password" type="text" placeholder="请输入您的密码"/>
                    </div>
                    <div className="form-group">
                        <button id="register" onClick={this.handleClick}>立即登录</button>
                    </div>
                </form>
            </div>
        )
    }
}

let mapStateToProps=state=>({

});
let mapDispatchToProps=dispatch=>({
    getUserInfo:(text)=>dispatch({type:"GET_USERINFO",text})
})

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)