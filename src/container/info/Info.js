
import './info.less'
import React,{Component} from "react";
import Header from "../../components/header/Header";
import {ajax} from '../../util/index.js';
export default  class Info extends Component{
    constructor(){
        super();
        this.state={title:'我的账号'}
    }
    handleClick(){
        ajax({
            method:'post',
            url:'http://localhost:8000/info',
            async:true,
            data:{
                name:"aa"
            },
            headers:{} }).then((result)=>{
            console.log(result);
        }).catch((err)=>{
            console.log(err);
        });
        console.log('click');
    }
    render(){
        return (
            <div>
                <Header title={this.state.title}/>
                <form id="form" method="post" action="submit">

                    <div className="form-group">
                        <label htmlFor="name">昵称</label>
                        <input id="name" name="name" type="text" placeholder="请输入您的用户名"/>
                    </div>
                    <div className="form-group form-group-sex">
                        <label htmlFor="name">性别</label>
                        <select name="sex" id="sex">
                            <option value="0">男</option>
                            <option value="1">女</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">密码</label>
                        <input id="password" type="text" placeholder="密码"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">手机号</label>
                        <input id="password" type="text" placeholder="手机号"/>
                    </div>
                    <div className="form-group">
                        <button type="button" onClick={this.handleClick} id="register">退出登录</button>
                    </div>
                </form>
            </div>
        )
    }
}