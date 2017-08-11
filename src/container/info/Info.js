
import './info.less'
import React,{Component} from "react";
import Header from "../../components/header/Header";
import {ajax} from '../../util/index.js';
import {connect} from 'react-redux';
import Footer from '../../components/footer/Footer';
import utils from '../../localStorange/utils';


class Info extends Component{
    constructor(){
        super();
        this.state={title:'我的账号'}
    }
    handleClick=()=> {
        // console.log(utils.readUsers(),9999999999);
        console.log(this.props.nickname,3333333333);
        if(confirm('确定要退出登录吗？')){
            // this.props.history.push("/signin");
            this.props.getUserInfo({nickname:'请登录您的账户',password:'',tel:''});
        }
    };
    render(){
        return (
            <div>
                <Header title={this.state.title}/>
                <form id="form" method="post" action="submit">

                    <div className="form-group">
                        <label htmlFor="name">昵称</label>
                        <input id="name" name="name" type="text" placeholder={this.props.nickname}/>
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
                        {
                            this.props.password?<input id="password" type="password" placeholder={"提示 您的密码长度为:"+this.props.password.length+"位"}/>:<input id="password" type="password" placeholder=''/>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="tel">手机号</label>
                        <input id="password" type="text" placeholder={this.state.tel}/>
                    </div>
                    {/*<div className="form-group">
                        <button type="button" onClick={this.handleSubmit} id="register">保存修改</button>
                    </div>*/}
                    {
                        (this.props.nickname=="(｡･∀･)ﾉﾞ嗨  主银~~!!")||this.props.nickname=="请登录您的账户"?<div className="form-group">
                            <button type="button" id="register">您还没有登录哦~</button>
                        </div>:<div className="form-group">
                            <button type="button" onClick={this.handleClick} id="register">退出登录</button>
                        </div>
                    }

                </form>

            </div>
        )
    }
}
let mapStateToProps=state=>({
    nickname:state.userReducer.nickname,
    password:state.userReducer.password
});
let mapDispatchToProps=dispatch=>({
    getUserInfo:(text)=>dispatch({type:"GET_USERINFO",text})
});

export default connect(mapStateToProps,mapDispatchToProps)(Info)