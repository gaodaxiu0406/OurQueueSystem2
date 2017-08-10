
import './info.less'
import React,{Component} from "react";
import Header from "../../components/header/Header";
import {ajax} from '../../util/index.js';
import {connect} from 'react-redux'

class Info extends Component{
    constructor(){
        super();
        this.state={title:'我的账号'}
    }
    // handleClick(){
    //     ajax({
    //         method:'post',
    //         url:'http://localhost:8000/info',
    //         async:true,
    //         data:{
    //             name:"aa"
    //         },
    //         headers:{} }).then((result)=>{
    //         console.log(result);
    //     }).catch((err)=>{
    //         console.log(err);
    //     });
    //     console.log('click');
    // }
/*    handleSubmit=()=>{
        ajax({
                method:'post',
                url:'http://localhost:8000/signin',
                async:true,
                data:{
                    name:"aa"
                },
                headers:{} }).then((result)=>{
                console.log(result,333333);
            }).catch((err)=>{
                console.log(err);
            });
            console.log('click');
    };*/
    handleClick=()=> {
        // console.log(this.props, 222222);
        ajax({
            method: 'post',
            url: 'http://localhost:8001/signin',
            async: true,
            headers: {}
        }).then((result) => {
            // result = JSON.parse(result);
            console.log(result,222222);
            alert('您已退出登录！');
            this.props.history.push("/signin");
            this.props.getUserInfo({nickname:'请登录您的账户',password:'',tel:''});
        }).catch((err) => {
            console.log(err);
        });
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
                        <input id="password" type="text" placeholder={this.props.tel}/>
                    </div>
                    {/*<div className="form-group">
                        <button type="button" onClick={this.handleSubmit} id="register">保存修改</button>
                    </div>*/}
                    <div className="form-group">
                        <button type="button" onClick={this.handleClick} id="register">退出登录</button>
                    </div>
                </form>
            </div>
        )
    }
}
let mapStateToProps=state=>({
    nickname:state.nickname,
    password:state.password,
    tel:state.tel
});
let mapDispatchToProps=dispatch=>({
    getUserInfo:(text)=>dispatch({type:"GET_USERINFO",text})
});

export default connect(mapStateToProps,mapDispatchToProps)(Info)